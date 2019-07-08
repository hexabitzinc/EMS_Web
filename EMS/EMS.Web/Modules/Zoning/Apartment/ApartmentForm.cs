
namespace EMS.Zoning.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Zoning.Apartment")]
    [BasedOnRow(typeof(Entities.ApartmentRow), CheckNames = true)]
    public class ApartmentForm
    {
        public String Name { get; set; }
        public String Type { get; set; }
        public String Address { get; set; }
        public String RoomNumber { get; set; }
        public String Describtion { get; set; }
        public Int32 SectionId { get; set; }
        public Boolean Deleted { get; set; }
    }
}