
namespace EMS.Zoning.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

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