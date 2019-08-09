
namespace EMS.Zoning.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Zoning.City")]
    [BasedOnRow(typeof(Entities.CityRow), CheckNames = true)]
    public class CityForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}