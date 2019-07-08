
namespace EMS.Meters.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meters.Meter")]
    [BasedOnRow(typeof(Entities.MeterRow), CheckNames = true)]
    public class MeterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeterId { get; set; }
        public String ApartmentName { get; set; }
        public String ConsumerUsername { get; set; }
        public Boolean Deleted { get; set; }
    }
}