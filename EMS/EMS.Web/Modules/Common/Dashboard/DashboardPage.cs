﻿
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
    using System.Threading.Tasks;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        private Random rnd = new Random();

        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {

            //<if:Northwind>
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                BuildingRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();

                    using (var connection = SqlConnections.NewByKey("Default"))
                    {

                        model.TotalBuildings = connection.Count<BuildingRow>();
                        model.TotalApartments = connection.Count<ApartmentRow>();
                        model.TotalMeters = connection.Count<MeterRow>();
                        model.TotalEMSDevices = connection.Count<EmsDeviceRow>();

                        model.BarLstModel = new List<SimpleReportViewModel>();
                        model.BarLstModel = Bar();

                        model.PieLstModel = new List<SimpleReportViewModel>();
                        model.PieLstModel = Pie();

                        return model;
                    }
                });

            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }

        public List<SimpleReportViewModel> Bar()
        {
            //list of department
            var lstModel = new List<SimpleReportViewModel>();

            using (var ChartConnection = SqlConnections.NewByKey("Default"))
            {
                //var xx = ChartConnection.List<SchedulingRow>().FindAll(s => s.Month == DateTime.Now.Month.ToString());
                string query = @"select fullDate, Value
from MeterDetail inner join Scheduling 
on MeterDetail.SchedulingID = Scheduling.SchedulingID
where FullDate between '2019-06-14 11:43:21' and '2019-08-09 15:43:21'
and ApartmentID = 4
--and MeterID = 3
and ParameterID in (1,2,3,4,5)";
                var chartConnection = ChartConnection.Query(query);
                foreach (var item in chartConnection)
                {
                    string date = item.fullDate + "";
                    int v = int.Parse(item.Value);
                    lstModel.Add(new SimpleReportViewModel
                    {
                        DimensionOne = date,
                        Quantity = v
                    });
                }
                return lstModel;
            }

        }

        public List<SimpleReportViewModel> Pie()
        {
            //list of drinks
            var lstModel = new List<SimpleReportViewModel>();

            using (var ChartConnection = SqlConnections.NewByKey("Default"))
            {
                
            }
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

        public List<SimpleReportViewModel> Queries(DateTime start, DateTime end, int consumerId, List<int?> meterId, List<int> parameterId)
        {
            var lstModel = new List<SimpleReportViewModel>();
            bool isAdmin = false;
            bool isOperator = false;
            bool isConsumer = false;

            using (var connection = SqlConnections.NewByKey("Default"))
            {
                if (isAdmin)
                {
                    List<MeterRow> meters = connection.List<MeterRow>();
                    List<MeterDetailRow> meterDetails = new List<MeterDetailRow>();
                    meterDetails.AddRange(connection.List<MeterDetailRow>().FindAll(md => meterId.Contains(md.MeterId)));

                    foreach (var item in meterDetails)
                    {
                        var x = connection.ById<SchedulingRow>(item.SchedulingId);
                        lstModel.Add(new SimpleReportViewModel
                        {
                            DimensionOne = x.FullDate.ToString(),
                            Quantity = int.Parse(item.Value)
                        });
                    }
                    return lstModel;
                }
                if (isOperator)
                {
                    List<MeterRow> meters = new List<MeterRow>();
                    var meterRows = connection.List<MeterRow>();
                    meters = meterRows.FindAll(m => m.ConsumerId == consumerId);
                    List<MeterDetailRow> meterDetails = new List<MeterDetailRow>();
                    foreach (var item in meters)
                    {
                        meterDetails.AddRange(connection.List<MeterDetailRow>().FindAll(md => md.MeterId == item.MeterId));
                    }

                    foreach (var item in meterDetails)
                    {
                        var x = connection.ById<SchedulingRow>(item.SchedulingId);
                        lstModel.Add(new SimpleReportViewModel
                        {
                            DimensionOne = x.FullDate.ToString(),
                            Quantity = int.Parse(item.Value)
                        });
                    }
                    return lstModel;
                }
                if (isConsumer)
                {
                    List<MeterRow> meters = new List<MeterRow>();
                    var meterRows = connection.List<MeterRow>();
                    meters = meterRows.FindAll(m => m.ConsumerId == consumerId);
                    List<MeterDetailRow> meterDetails = new List<MeterDetailRow>();
                    foreach (var item in meters)
                    {
                        meterDetails.AddRange(connection.List<MeterDetailRow>().FindAll(md => md.MeterId == item.MeterId));
                    }

                    foreach (var item in meterDetails)
                    {
                        var x = connection.ById<SchedulingRow>(item.SchedulingId);
                        lstModel.Add(new SimpleReportViewModel
                        {
                            DimensionOne = x.FullDate.ToString(),
                            Quantity = int.Parse(item.Value)
                        });
                    }
                    return lstModel;
                }

            }

            return lstModel;
        }


        //public List<SimpleReportViewModel> Line()
        //{
        //    //list of countries
        //    var lstModel = new List<SimpleReportViewModel>();
        //    lstModel.Add(new SimpleReportViewModel
        //    {
        //        DimensionOne = "Brazil",
        //        Quantity = rnd.Next(10)
        //    });
        //    lstModel.Add(new SimpleReportViewModel
        //    {
        //        DimensionOne = "USA",
        //        Quantity = rnd.Next(10)
        //    });
        //    lstModel.Add(new SimpleReportViewModel
        //    {
        //        DimensionOne = "Portugal",
        //        Quantity = rnd.Next(10)
        //    });
        //    lstModel.Add(new SimpleReportViewModel
        //    {
        //        DimensionOne = "Russia",
        //        Quantity = rnd.Next(10)
        //    });
        //    lstModel.Add(new SimpleReportViewModel
        //    {
        //        DimensionOne = "Ireland",
        //        Quantity = rnd.Next(10)
        //    });
        //    lstModel.Add(new SimpleReportViewModel
        //    {
        //        DimensionOne = "Germany",
        //        Quantity = rnd.Next(10)
        //    });
        //    return lstModel;
        //}

        //public List<StackedViewModel> Stacked()
        //{
        //    var lstModel = new List<StackedViewModel>();
        //    //sales of product sales by quarter
        //    lstModel.Add(new StackedViewModel
        //    {
        //        StackedDimensionOne = "First Quarter",
        //        LstData = new List<SimpleReportViewModel>()
        //        {
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="TV",
        //                Quantity = rnd.Next(10)
        //            },
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="Games",
        //                Quantity = rnd.Next(10)
        //            },
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="Books",
        //                Quantity = rnd.Next(10)
        //            }
        //        }
        //    });
        //    lstModel.Add(new StackedViewModel
        //    {
        //        StackedDimensionOne = "Second Quarter",
        //        LstData = new List<SimpleReportViewModel>()
        //        {
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="TV",
        //                Quantity = rnd.Next(10)
        //            },
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="Games",
        //                Quantity = rnd.Next(10)
        //            },
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="Books",
        //                Quantity = rnd.Next(10)
        //            }
        //        }
        //    });
        //    lstModel.Add(new StackedViewModel
        //    {
        //        StackedDimensionOne = "Third Quarter",
        //        LstData = new List<SimpleReportViewModel>()
        //        {
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="TV",
        //                Quantity = rnd.Next(10)
        //            },
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="Games",
        //                Quantity = rnd.Next(10)
        //            },
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="Books",
        //                Quantity = rnd.Next(10)
        //            }
        //        }
        //    });
        //    lstModel.Add(new StackedViewModel
        //    {
        //        StackedDimensionOne = "Fourth Quarter",
        //        LstData = new List<SimpleReportViewModel>()
        //        {
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="TV",
        //                Quantity = rnd.Next(10)
        //            },
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="Games",
        //                Quantity = rnd.Next(10)
        //            },
        //            new SimpleReportViewModel()
        //            {
        //                DimensionOne="Books",
        //                Quantity = rnd.Next(10)
        //            }
        //        }
        //    });
        //    return lstModel;
        //}

    }
}