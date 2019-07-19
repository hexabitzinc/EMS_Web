
namespace EMS.Parameter.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Parameter.Parameter")]
    [BasedOnRow(typeof(Entities.ParameterRow), CheckNames = true)]
    public class ParameterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ParameterId { get; set; }
        public String ParameterTypeName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Address { get; set; }
        public String Notes { get; set; }
        public Boolean Deleted { get; set; }
    }
}