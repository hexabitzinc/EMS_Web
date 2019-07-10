
namespace EMS.Meter.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meter.Meter")]
    [BasedOnRow(typeof(Entities.MeterRow), CheckNames = true)]
    public class MeterForm
    {
        public Int32 ApartmentId { get; set; }
        public Int32 CommonLocationId { get; set; }
        public Int32 MeterTypeId { get; set; }
        public Int32 ConsumerId { get; set; }
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