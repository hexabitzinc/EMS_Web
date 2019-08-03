
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
    using System.Collections.Generic;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        private Random rnd = new Random();

        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {

            //<if:Northwind>
            var data = new DataDetails();
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                BuildingRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();

                    var ZoningConnection = SqlConnections.NewFor<BuildingRow>();
                    model.TotalBuildings = ZoningConnection.Count<BuildingRow>();
                    model.TotalApartments = ZoningConnection.Count<ApartmentRow>();

                    var MeterConnection = SqlConnections.NewFor<MeterRow>();
                    model.TotalMeters = MeterConnection.Count<MeterRow>();


                    var EMSDeviceConnection = SqlConnections.NewFor<EmsDeviceRow>();
                    model.TotalEMSDevices = EMSDeviceConnection.Count<EmsDeviceRow>();

                    //var DataChartConnection = SqlConnections.NewFor<MeterDetailRow>();
                    //data.Details = DataChartConnection.List<MeterDetailRow>(q => q.SelectTableFields());
                    //model.dataChart = data.Details;
                    model.BarLstModel = new List<SimpleReportViewModel>();
                    model.BarLstModel = Bar();

                    model.LineLstModel = new List<SimpleReportViewModel>();
                    model.LineLstModel = Line();

                    model.PieLstModel = new List<SimpleReportViewModel>();
                    model.PieLstModel = Pie();

                    model.StackedLstModel = new List<StackedViewModel>();
                    model.StackedLstModel = Stacked();

                    return model;
                });

            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }

        public List<SimpleReportViewModel> Bar()
        {
            //list of department
            var lstModel = new List<SimpleReportViewModel>();

            var ChartConnection = SqlConnections.NewFor<MeterDetailRow>();
            var SchedulingConnection = SqlConnections.NewFor<SchedulingRow>();
            foreach (var item in ChartConnection.List<MeterDetailRow>())
            {
                //SchedulingConnection.ExistsById(item.SchedulingId);
                lstModel.Add(new SimpleReportViewModel
                {
                    DimensionOne = item.SchedulingId.ToString(),
                    Quantity = int.Parse(item.Value)
                });
            }
            return lstModel;
        }

        public List<SimpleReportViewModel> Line()
        {
            //list of countries
            var lstModel = new List<SimpleReportViewModel>();
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "Brazil",
                Quantity = rnd.Next(10)
            });
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "USA",
                Quantity = rnd.Next(10)
            });
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "Portugal",
                Quantity = rnd.Next(10)
            });
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "Russia",
                Quantity = rnd.Next(10)
            });
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "Ireland",
                Quantity = rnd.Next(10)
            });
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "Germany",
                Quantity = rnd.Next(10)
            });
            return lstModel;
        }

        public List<SimpleReportViewModel> Pie()
        {
            //list of drinks
            var lstModel = new List<SimpleReportViewModel>();
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "Beer",
                Quantity = rnd.Next(10)
            });
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "Wine",
                Quantity = rnd.Next(10)
            });
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "Whisky",
                Quantity = rnd.Next(10)
            });
            lstModel.Add(new SimpleReportViewModel
            {
                DimensionOne = "Water",
                Quantity = rnd.Next(10)
            });
            return lstModel;
        }

        public List<StackedViewModel> Stacked()
        {
            var lstModel = new List<StackedViewModel>();
            //sales of product sales by quarter
            lstModel.Add(new StackedViewModel
            {
                StackedDimensionOne = "First Quarter",
                LstData = new List<SimpleReportViewModel>()
                {
                    new SimpleReportViewModel()
                    {
                        DimensionOne="TV",
                        Quantity = rnd.Next(10)
                    },
                    new SimpleReportViewModel()
                    {
                        DimensionOne="Games",
                        Quantity = rnd.Next(10)
                    },
                    new SimpleReportViewModel()
                    {
                        DimensionOne="Books",
                        Quantity = rnd.Next(10)
                    }
                }
            });
            lstModel.Add(new StackedViewModel
            {
                StackedDimensionOne = "Second Quarter",
                LstData = new List<SimpleReportViewModel>()
                {
                    new SimpleReportViewModel()
                    {
                        DimensionOne="TV",
                        Quantity = rnd.Next(10)
                    },
                    new SimpleReportViewModel()
                    {
                        DimensionOne="Games",
                        Quantity = rnd.Next(10)
                    },
                    new SimpleReportViewModel()
                    {
                        DimensionOne="Books",
                        Quantity = rnd.Next(10)
                    }
                }
            });
            lstModel.Add(new StackedViewModel
            {
                StackedDimensionOne = "Third Quarter",
                LstData = new List<SimpleReportViewModel>()
                {
                    new SimpleReportViewModel()
                    {
                        DimensionOne="TV",
                        Quantity = rnd.Next(10)
                    },
                    new SimpleReportViewModel()
                    {
                        DimensionOne="Games",
                        Quantity = rnd.Next(10)
                    },
                    new SimpleReportViewModel()
                    {
                        DimensionOne="Books",
                        Quantity = rnd.Next(10)
                    }
                }
            });
            lstModel.Add(new StackedViewModel
            {
                StackedDimensionOne = "Fourth Quarter",
                LstData = new List<SimpleReportViewModel>()
                {
                    new SimpleReportViewModel()
                    {
                        DimensionOne="TV",
                        Quantity = rnd.Next(10)
                    },
                    new SimpleReportViewModel()
                    {
                        DimensionOne="Games",
                        Quantity = rnd.Next(10)
                    },
                    new SimpleReportViewModel()
                    {
                        DimensionOne="Books",
                        Quantity = rnd.Next(10)
                    }
                }
            });
            return lstModel;
        }

        public class DataDetails
        {
            public System.Collections.Generic.List<MeterDetailRow> Details { get; set; }
        }
    }
}
