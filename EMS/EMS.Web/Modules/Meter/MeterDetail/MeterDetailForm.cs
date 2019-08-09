
namespace EMS.Meter.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Meter.MeterDetail")]
    [BasedOnRow(typeof(Entities.MeterDetailRow), CheckNames = true)]
    public class MeterDetailForm
    {
        public Int32 MeterId { get; set; }
        public Int32 ParameterGroupId { get; set; }
        public Int32 ParameterId { get; set; }
        public Int32 SchedulingId { get; set; }
        public Int32 ApartmentId { get; set; }
        public Int32 CommonLocationId { get; set; }
        public String Value { get; set; }
        public Boolean Deleted { get; set; }
    }
}