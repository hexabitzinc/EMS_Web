
namespace EMS.Zoning.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Zoning.Building")]
    [BasedOnRow(typeof(Entities.BuildingRow), CheckNames = true)]
    public class BuildingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BuildingId { get; set; }
        public String CityName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String ZipCode { get; set; }
        public String Address { get; set; }
        public String StreetAddress { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}