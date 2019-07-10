
namespace EMS.Zoning.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Zoning.Floor")]
    [BasedOnRow(typeof(Entities.FloorRow), CheckNames = true)]
    public class FloorForm
    {
        public Int32 BuildingId { get; set; }
        public String Name { get; set; }
        public Int32 FloorNumber { get; set; }
        public String Describtion { get; set; }
        public Boolean Deleted { get; set; }
    }
}