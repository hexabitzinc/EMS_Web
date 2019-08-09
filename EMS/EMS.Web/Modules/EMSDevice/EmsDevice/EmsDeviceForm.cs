
namespace EMS.EMSDevice.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("EMSDevice.EmsDevice")]
    [BasedOnRow(typeof(Entities.EmsDeviceRow), CheckNames = true)]
    public class EmsDeviceForm
    {
        public Int32 BuildingId { get; set; }
        public Int32 EmsParameterId { get; set; }
        public Int32 EmsSettingId { get; set; }
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