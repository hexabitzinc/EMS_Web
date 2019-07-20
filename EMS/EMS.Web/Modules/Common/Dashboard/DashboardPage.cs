
namespace EMS.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using Microsoft.AspNetCore.Mvc;
    using EMS.Zoning.Entities;
    using EMS.Meter.Entities;
    using EMS.EMSDevice.Entities;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            //<if:Northwind>
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                "DashboardPageModel", () =>
                {
                    var model = new DashboardPageModel();

                    var ZoningConnection = SqlConnections.NewFor<BuildingRow>();
                    model.TotalBuildings = ZoningConnection.Count<BuildingRow>();
                    model.TotalApartments = ZoningConnection.Count<ApartmentRow>();

                    var MeterConnection = SqlConnections.NewFor<MeterRow>();
                    model.TotalMeters = MeterConnection.Count<MeterRow>();


                    var EMSDeviceConnection = SqlConnections.NewFor<EmsDeviceRow>();
                    model.TotalEMSDevices = EMSDeviceConnection.Count<EmsDeviceRow>();

                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
