
namespace EMS.Zoning.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Zoning.Apartment")]
    [BasedOnRow(typeof(Entities.ApartmentRow), CheckNames = true)]
    public class ApartmentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ApartmentId { get; set; }
        public String SectionName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Type { get; set; }
        public String Address { get; set; }
        public String RoomNumber { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}