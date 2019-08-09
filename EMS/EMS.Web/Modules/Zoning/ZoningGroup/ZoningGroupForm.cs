
namespace EMS.Zoning.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Zoning.ZoningGroup")]
    [BasedOnRow(typeof(Entities.ZoningGroupRow), CheckNames = true)]
    public class ZoningGroupForm
    {
        public String Name { get; set; }
        public Boolean Deleted { get; set; }
    }
}