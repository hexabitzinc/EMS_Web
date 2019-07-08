
namespace EMS.Zoning.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Zoning.Building")]
    [BasedOnRow(typeof(Entities.BuildingRow), CheckNames = true)]
    public class BuildingForm
    {
        public String ZipCode { get; set; }
        public String Address { get; set; }
        public String StreetAddress { get; set; }
        public String Description { get; set; }
        public Int32 CityId { get; set; }
        public Boolean Deleted { get; set; }
    }
}