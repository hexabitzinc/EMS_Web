
namespace EMS.Parameter.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Parameter.ParameterGroup")]
    [BasedOnRow(typeof(Entities.ParameterGroupRow), CheckNames = true)]
    public class ParameterGroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ParameterGroupId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}