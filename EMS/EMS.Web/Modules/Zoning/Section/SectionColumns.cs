
namespace EMS.Zoning.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Zoning.Section")]
    [BasedOnRow(typeof(Entities.SectionRow), CheckNames = true)]
    public class SectionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SectionId { get; set; }
        public String FloorName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}