﻿
namespace EMS.Zoning.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Zoning.Floor")]
    [BasedOnRow(typeof(Entities.FloorRow), CheckNames = true)]
    public class FloorForm
    {
        public Int32 BuildingId { get; set; }
        public String Name { get; set; }
        public Int32 FloorNumber { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}