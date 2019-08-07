
namespace EMS.Common
{
    public class DashboardPageModel
    {
        public int CurrentCost = 150;

        public int TotalBuildings { get; set; }
        public int TotalApartments { get; set; }
        public int TotalMeters { get; set; }
        public int TotalEMSDevices { get; set; }
        public System.Collections.Generic.List<SimpleReportViewModel> BarLstModel { get; set; }
        public System.Collections.Generic.List<SimpleReportViewModel> LineLstModel { get; set; }
        public System.Collections.Generic.List<SimpleReportViewModel> PieLstModel { get; set; }
        public System.Collections.Generic.List<StackedViewModel> StackedLstModel { get; set; }
    }

    public class SimpleReportViewModel
    {
        public string DimensionOne { get; set; }
        public int Quantity { get; set; }
    }

    public class StackedViewModel
    {
        public string StackedDimensionOne { get; set; }
        public System.Collections.Generic.List<SimpleReportViewModel> LstData { get; set; }
    }
}