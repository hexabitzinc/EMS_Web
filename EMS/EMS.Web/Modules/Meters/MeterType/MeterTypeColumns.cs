
namespace EMS.Meters.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meters.MeterType")]
    [BasedOnRow(typeof(Entities.MeterTypeRow), CheckNames = true)]
    public class MeterTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FloorId { get; set; }
        [EditLink]
        public String BuildingId { get; set; }
    }
}