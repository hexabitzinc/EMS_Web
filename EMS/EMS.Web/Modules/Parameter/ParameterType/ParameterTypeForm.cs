
namespace EMS.Parameter.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Parameter.ParameterType")]
    [BasedOnRow(typeof(Entities.ParameterTypeRow), CheckNames = true)]
    public class ParameterTypeForm
    {
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}