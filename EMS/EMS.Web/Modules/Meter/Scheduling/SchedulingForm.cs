
namespace EMS.Meter.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Meter.Scheduling")]
    [BasedOnRow(typeof(Entities.SchedulingRow), CheckNames = true)]
    public class SchedulingForm
    {
        public String Year { get; set; }
        public String Month { get; set; }
        public String Day { get; set; }
        public String Time { get; set; }
        public DateTime FullDate { get; set; }
        public Boolean Deleted { get; set; }
    }
}