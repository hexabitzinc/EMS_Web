
namespace EMS.Zoning.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Zoning.ZoningGroup")]
    [BasedOnRow(typeof(Entities.ZoningGroupRow), CheckNames = true)]
    public class ZoningGroupForm
    {
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}