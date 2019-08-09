
namespace EMS.Meter.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Meter.MeterType")]
    [BasedOnRow(typeof(Entities.MeterTypeRow), CheckNames = true)]
    public class MeterTypeForm
    {
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}