
namespace EMS.Zoning.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Zoning.CommonLocation")]
    [BasedOnRow(typeof(Entities.CommonLocationRow), CheckNames = true)]
    public class CommonLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CommonLocationId { get; set; }
        public String BuildingName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}