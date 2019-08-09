
namespace EMS.Zoning.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Zoning.Building")]
    [BasedOnRow(typeof(Entities.BuildingRow), CheckNames = true)]
    public class BuildingForm
    {
        public Int32 CityId { get; set; }
        public String Name { get; set; }
        public String ZipCode { get; set; }
        public String Address { get; set; }
        public String StreetAddress { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}