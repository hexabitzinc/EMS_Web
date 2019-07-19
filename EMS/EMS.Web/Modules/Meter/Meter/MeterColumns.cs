
namespace EMS.Meter.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meter.Meter")]
    [BasedOnRow(typeof(Entities.MeterRow), CheckNames = true)]
    public class MeterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeterId { get; set; }
        public String MeterTypeName { get; set; }
        public String ConsumerFirstName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String SerialNumber { get; set; }
        public String Make { get; set; }
        public String PhysicalLocation { get; set; }
        public String AssignedLocation { get; set; }
        public String CommunicationMethod { get; set; }
        public String SerialCommunicationSetting { get; set; }
        public DateTime RegistrationDate { get; set; }
        public String Notes { get; set; }
        public Boolean Deleted { get; set; }
    }
}