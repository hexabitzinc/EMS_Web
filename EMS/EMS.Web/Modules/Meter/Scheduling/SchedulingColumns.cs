
namespace EMS.Meter.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meter.Scheduling")]
    [BasedOnRow(typeof(Entities.SchedulingRow), CheckNames = true)]
    public class SchedulingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SchedulingId { get; set; }
        [EditLink]
        public String Year { get; set; }
        public String Month { get; set; }
        public String Day { get; set; }
        public String Time { get; set; }
        public DateTime FullDate { get; set; }
        public Boolean Deleted { get; set; }
    }
}