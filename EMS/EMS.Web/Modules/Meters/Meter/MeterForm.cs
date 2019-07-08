
namespace EMS.Meters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meters.Meter")]
    [BasedOnRow(typeof(Entities.MeterRow), CheckNames = true)]
    public class MeterForm
    {
        public Int32 ApartmentId { get; set; }
        public Int32 ConsumerId { get; set; }
        public Boolean Deleted { get; set; }
    }
}