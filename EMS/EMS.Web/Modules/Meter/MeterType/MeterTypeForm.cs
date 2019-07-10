
namespace EMS.Meter.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meter.MeterType")]
    [BasedOnRow(typeof(Entities.MeterTypeRow), CheckNames = true)]
    public class MeterTypeForm
    {
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}