
namespace EMS.Meters.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meters.MeterParameter")]
    [BasedOnRow(typeof(Entities.MeterParameterRow), CheckNames = true)]
    public class MeterParameterForm
    {
        public String BuildingId { get; set; }
    }
}