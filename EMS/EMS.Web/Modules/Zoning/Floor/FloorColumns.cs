
namespace EMS.Zoning.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Zoning.Floor")]
    [BasedOnRow(typeof(Entities.FloorRow), CheckNames = true)]
    public class FloorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FloorId { get; set; }
        public String BuildingName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int32 FloorNumber { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}