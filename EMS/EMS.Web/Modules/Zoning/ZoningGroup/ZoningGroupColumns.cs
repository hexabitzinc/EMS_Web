
namespace EMS.Zoning.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Zoning.ZoningGroup")]
    [BasedOnRow(typeof(Entities.ZoningGroupRow), CheckNames = true)]
    public class ZoningGroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ZoningGroupId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}