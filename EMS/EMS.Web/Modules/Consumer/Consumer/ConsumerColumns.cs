
namespace EMS.Consumer.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Consumer.Consumer")]
    [BasedOnRow(typeof(Entities.ConsumerRow), CheckNames = true)]
    public class ConsumerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ConsumerId { get; set; }
        [EditLink]
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