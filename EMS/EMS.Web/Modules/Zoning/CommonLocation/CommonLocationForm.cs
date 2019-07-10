
namespace EMS.Zoning.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Zoning.CommonLocation")]
    [BasedOnRow(typeof(Entities.CommonLocationRow), CheckNames = true)]
    public class CommonLocationForm
    {
        public Int32 BuildingId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}