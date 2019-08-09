
namespace EMS.EMSDevice.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("EMSDevice.EmsSetting")]
    [BasedOnRow(typeof(Entities.EmsSettingRow), CheckNames = true)]
    public class EmsSettingForm
    {
        public Int32 ParameterTypeId { get; set; }
        public String Name { get; set; }
        public String Value { get; set; }
        public String Address { get; set; }
        public String Notes { get; set; }
        public Boolean Deleted { get; set; }
    }
}