
namespace EMS.Consumer.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Consumer.Consumer")]
    [BasedOnRow(typeof(Entities.ConsumerRow), CheckNames = true)]
    public class ConsumerForm
    {
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Gender { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public String OtherInformation { get; set; }
        public String Mobile { get; set; }
        public String Email { get; set; }
        public Boolean Deleted { get; set; }
    }
}