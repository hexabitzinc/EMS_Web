
namespace EMS.Parameter.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Parameter.ParameterGroup")]
    [BasedOnRow(typeof(Entities.ParameterGroupRow), CheckNames = true)]
    public class ParameterGroupForm
    {
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}