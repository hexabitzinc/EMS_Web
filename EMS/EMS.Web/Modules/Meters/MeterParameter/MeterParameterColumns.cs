
namespace EMS.Meters.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meters.MeterParameter")]
    [BasedOnRow(typeof(Entities.MeterParameterRow), CheckNames = true)]
    public class MeterParameterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeterParameterId { get; set; }
        [EditLink]
        public String BuildingId { get; set; }
    }
}