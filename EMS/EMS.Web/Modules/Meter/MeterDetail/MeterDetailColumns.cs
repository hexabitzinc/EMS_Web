
namespace EMS.Meter.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Meter.MeterDetail")]
    [BasedOnRow(typeof(Entities.MeterDetailRow), CheckNames = true)]
    public class MeterDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeterDetailId { get; set; }
        public String MeterName { get; set; }
        public String ParameterGroupName { get; set; }
        public String ParameterName { get; set; }
        public String SchedulingYear { get; set; }
        public String ApartmentName { get; set; }
        public String CommonLocationName { get; set; }
        [EditLink]
        public String Value { get; set; }
        public Boolean Deleted { get; set; }
    }
}