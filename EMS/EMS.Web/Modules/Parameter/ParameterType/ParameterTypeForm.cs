
namespace EMS.Parameter.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Parameter.ParameterType")]
    [BasedOnRow(typeof(Entities.ParameterTypeRow), CheckNames = true)]
    public class ParameterTypeForm
    {
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}