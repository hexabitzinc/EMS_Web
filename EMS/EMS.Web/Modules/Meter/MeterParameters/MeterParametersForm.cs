
namespace EMS.Meter.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meter.MeterParameters")]
    [BasedOnRow(typeof(Entities.MeterParametersRow), CheckNames = true)]
    public class MeterParametersForm
    {
        public Int32 ParameterGroupId { get; set; }
        public Int32 ParameterId { get; set; }
        public Boolean Deleted { get; set; }
    }
}