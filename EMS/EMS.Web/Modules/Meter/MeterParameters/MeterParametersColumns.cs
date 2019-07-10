
namespace EMS.Meter.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meter.MeterParameters")]
    [BasedOnRow(typeof(Entities.MeterParametersRow), CheckNames = true)]
    public class MeterParametersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeterParameterId { get; set; }
        public String ParameterGroupName { get; set; }
        public String ParameterName { get; set; }
        public Boolean Deleted { get; set; }
    }
}