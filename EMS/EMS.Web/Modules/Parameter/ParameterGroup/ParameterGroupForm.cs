
namespace EMS.Parameter.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Parameter.ParameterGroup")]
    [BasedOnRow(typeof(Entities.ParameterGroupRow), CheckNames = true)]
    public class ParameterGroupForm
    {
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}