
namespace EMS.Parameter.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Parameter.Parameter")]
    [BasedOnRow(typeof(Entities.ParameterRow), CheckNames = true)]
    public class ParameterForm
    {
        public Int32 ParameterTypeId { get; set; }
        public String Name { get; set; }
        public String Address { get; set; }
        public String Notes { get; set; }
        public Boolean Deleted { get; set; }
    }
}