
namespace EMS.EMSDevice.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EMSDevice.EmsSetting")]
    [BasedOnRow(typeof(Entities.EmsSettingRow), CheckNames = true)]
    public class EmsSettingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmsSettingId { get; set; }
        public String ParameterTypeName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Value { get; set; }
        public String Address { get; set; }
        public String Notes { get; set; }
        public Boolean Deleted { get; set; }
    }
}