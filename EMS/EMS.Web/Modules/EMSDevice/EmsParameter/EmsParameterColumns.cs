
namespace EMS.EMSDevice.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("EMSDevice.EmsParameter")]
    [BasedOnRow(typeof(Entities.EmsParameterRow), CheckNames = true)]
    public class EmsParameterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmsParameterId { get; set; }
        public String ParameterTypeName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Value { get; set; }
        public String Address { get; set; }
        public String Notes { get; set; }
        public Boolean Deleted { get; set; }
    }
}