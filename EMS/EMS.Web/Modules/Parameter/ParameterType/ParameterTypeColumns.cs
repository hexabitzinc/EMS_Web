
namespace EMS.Parameter.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Parameter.ParameterType")]
    [BasedOnRow(typeof(Entities.ParameterTypeRow), CheckNames = true)]
    public class ParameterTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ParameterTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}