
namespace EMS.Zoning.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Zoning.Apartment")]
    [BasedOnRow(typeof(Entities.ApartmentRow), CheckNames = true)]
    public class ApartmentForm
    {
        public Int32 SectionId { get; set; }
        public String Name { get; set; }
        public String Type { get; set; }
        public String Address { get; set; }
        public String RoomNumber { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}