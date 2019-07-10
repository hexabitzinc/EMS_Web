
namespace EMS.Zoning.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

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
        public String Describtion { get; set; }
        public Boolean Deleted { get; set; }
    }
}