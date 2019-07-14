
namespace EMS.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using Microsoft.AspNetCore.Mvc;
    using EMS.Zoning.Entities;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            //<if:Northwind>
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                CityRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var o = CityRow.Fields;
                    using (var connection = SqlConnections.NewFor<CityRow>())
                    {
                        model.TotalCities = connection.Count<CityRow>();





                        //model.OpenOrders = connection.Count<CityRow>(o.ShippingState == (int)OrderShippingState.NotShipped);
                        //var closedOrders = connection.Count<CityRow>(o.ShippingState == (int)OrderShippingState.Shipped);
                        //var totalOrders = model.OpenOrders + closedOrders;
                        //model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                        //    ((double)closedOrders / (double)totalOrders * 100));
                        //model.CustomerCount = connection.Count<CityRow>();
                        //model.ProductCount = connection.Count<CityRow>();
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
