
namespace EMS.Zoning.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Zoning.Section")]
    [BasedOnRow(typeof(Entities.SectionRow), CheckNames = true)]
    public class SectionForm
    {
        public Int32 FloorId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public Boolean Deleted { get; set; }
    }
}