
namespace EMS.Zoning.Forms
{
    using Serenity.ComponentModel;
    using System;

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