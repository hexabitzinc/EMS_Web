
namespace EMS.Consumer.Entities
{
    using Newtonsoft.Json;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Consumer"), TableName("[dbo].[Consumer]")]
    [DisplayName("Consumer"), InstanceName("Consumer")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("Consumer.Consumer")]
    public sealed class ConsumerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Consumer Id"), Column("ConsumerID"), Identity]
        public Int32? ConsumerId
        {
            get { return Fields.ConsumerId[this]; }
            set { Fields.ConsumerId[this] = value; }
        }

        [DisplayName("First Name"), Size(200), NotNull, QuickSearch]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Last Name"), Size(200), NotNull]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("Gender"), Size(200), NotNull]
        public String Gender
        {
            get { return Fields.Gender[this]; }
            set { Fields.Gender[this] = value; }
        }

        [DisplayName("Address"), Size(1000)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Phone"), Size(200)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Other Information"), Size(1000)]
        public String OtherInformation
        {
            get { return Fields.OtherInformation[this]; }
            set { Fields.OtherInformation[this] = value; }
        }

        [DisplayName("Mobile"), Size(200)]
        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }

        [DisplayName("Email"), Size(255)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Deleted"), NotNull]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ConsumerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FirstName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConsumerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ConsumerId;
            public StringField FirstName;
            public StringField LastName;
            public StringField Gender;
            public StringField Address;
            public StringField Phone;
            public StringField OtherInformation;
            public StringField Mobile;
            public StringField Email;
            public BooleanField Deleted;
        }
    }
}
