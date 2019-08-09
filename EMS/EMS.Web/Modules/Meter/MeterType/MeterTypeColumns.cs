
namespace EMS.Meter.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Meter.MeterType")]
    [BasedOnRow(typeof(Entities.MeterTypeRow), CheckNames = true)]
    public class MeterTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeterTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}