
namespace EMS.Meter.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Meter.Meter")]
    [BasedOnRow(typeof(Entities.MeterRow), CheckNames = true)]
    public class MeterForm
    {
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