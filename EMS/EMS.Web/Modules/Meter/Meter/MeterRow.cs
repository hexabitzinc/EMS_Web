
namespace EMS.Meter.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Meter"), TableName("[dbo].[Meter]")]
    [DisplayName("Meter"), InstanceName("Meter")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MeterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meter Id"), Column("MeterID"), Identity]
        public Int32? MeterId
        {
            get { return Fields.MeterId[this]; }
            set { Fields.MeterId[this] = value; }
        }

        [DisplayName("Meter Type"), Column("MeterTypeID"), ForeignKey("[dbo].[MeterType]", "MeterTypeID"), LeftJoin("jMeterType"), TextualField("MeterTypeName")]
        public Int32? MeterTypeId
        {
            get { return Fields.MeterTypeId[this]; }
            set { Fields.MeterTypeId[this] = value; }
        }

        [DisplayName("Consumer"), Column("ConsumerID"), ForeignKey("[dbo].[Consumer]", "ConsumerID"), LeftJoin("jConsumer"), TextualField("ConsumerFirstName")]
        public Int32? ConsumerId
        {
            get { return Fields.ConsumerId[this]; }
            set { Fields.ConsumerId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Serial Number"), Size(200)]
        public String SerialNumber
        {
            get { return Fields.SerialNumber[this]; }
            set { Fields.SerialNumber[this] = value; }
        }

        [DisplayName("Make"), Size(200)]
        public String Make
        {
            get { return Fields.Make[this]; }
            set { Fields.Make[this] = value; }
        }

        [DisplayName("Physical Location"), Size(1000)]
        public String PhysicalLocation
        {
            get { return Fields.PhysicalLocation[this]; }
            set { Fields.PhysicalLocation[this] = value; }
        }

        [DisplayName("Assigned Location"), Size(1000)]
        public String AssignedLocation
        {
            get { return Fields.AssignedLocation[this]; }
            set { Fields.AssignedLocation[this] = value; }
        }

        [DisplayName("Communication Method"), Size(200)]
        public String CommunicationMethod
        {
            get { return Fields.CommunicationMethod[this]; }
            set { Fields.CommunicationMethod[this] = value; }
        }

        [DisplayName("Serial Communication Setting"), Size(200)]
        public String SerialCommunicationSetting
        {
            get { return Fields.SerialCommunicationSetting[this]; }
            set { Fields.SerialCommunicationSetting[this] = value; }
        }

        [DisplayName("Registration Date"), NotNull]
        public DateTime? RegistrationDate
        {
            get { return Fields.RegistrationDate[this]; }
            set { Fields.RegistrationDate[this] = value; }
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Deleted"), NotNull]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        [DisplayName("Meter Type Name"), Expression("jMeterType.[Name]")]
        public String MeterTypeName
        {
            get { return Fields.MeterTypeName[this]; }
            set { Fields.MeterTypeName[this] = value; }
        }

        [DisplayName("Meter Type Deleted"), Expression("jMeterType.[Deleted]")]
        public Boolean? MeterTypeDeleted
        {
            get { return Fields.MeterTypeDeleted[this]; }
            set { Fields.MeterTypeDeleted[this] = value; }
        }

        [DisplayName("Consumer First Name"), Expression("jConsumer.[FirstName]")]
        public String ConsumerFirstName
        {
            get { return Fields.ConsumerFirstName[this]; }
            set { Fields.ConsumerFirstName[this] = value; }
        }

        [DisplayName("Consumer Last Name"), Expression("jConsumer.[LastName]")]
        public String ConsumerLastName
        {
            get { return Fields.ConsumerLastName[this]; }
            set { Fields.ConsumerLastName[this] = value; }
        }

        [DisplayName("Consumer Gender"), Expression("jConsumer.[Gender]")]
        public String ConsumerGender
        {
            get { return Fields.ConsumerGender[this]; }
            set { Fields.ConsumerGender[this] = value; }
        }

        [DisplayName("Consumer Address"), Expression("jConsumer.[Address]")]
        public String ConsumerAddress
        {
            get { return Fields.ConsumerAddress[this]; }
            set { Fields.ConsumerAddress[this] = value; }
        }

        [DisplayName("Consumer Phone"), Expression("jConsumer.[Phone]")]
        public String ConsumerPhone
        {
            get { return Fields.ConsumerPhone[this]; }
            set { Fields.ConsumerPhone[this] = value; }
        }

        [DisplayName("Consumer Other Information"), Expression("jConsumer.[OtherInformation]")]
        public String ConsumerOtherInformation
        {
            get { return Fields.ConsumerOtherInformation[this]; }
            set { Fields.ConsumerOtherInformation[this] = value; }
        }

        [DisplayName("Consumer Mobile"), Expression("jConsumer.[Mobile]")]
        public String ConsumerMobile
        {
            get { return Fields.ConsumerMobile[this]; }
            set { Fields.ConsumerMobile[this] = value; }
        }

        [DisplayName("Consumer Email"), Expression("jConsumer.[Email]")]
        public String ConsumerEmail
        {
            get { return Fields.ConsumerEmail[this]; }
            set { Fields.ConsumerEmail[this] = value; }
        }

        [DisplayName("Consumer Deleted"), Expression("jConsumer.[Deleted]")]
        public Boolean? ConsumerDeleted
        {
            get { return Fields.ConsumerDeleted[this]; }
            set { Fields.ConsumerDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeterId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeterId;
            public Int32Field MeterTypeId;
            public Int32Field ConsumerId;
            public StringField Name;
            public StringField SerialNumber;
            public StringField Make;
            public StringField PhysicalLocation;
            public StringField AssignedLocation;
            public StringField CommunicationMethod;
            public StringField SerialCommunicationSetting;
            public DateTimeField RegistrationDate;
            public StringField Notes;
            public BooleanField Deleted;

            public StringField MeterTypeName;
            public BooleanField MeterTypeDeleted;

            public StringField ConsumerFirstName;
            public StringField ConsumerLastName;
            public StringField ConsumerGender;
            public StringField ConsumerAddress;
            public StringField ConsumerPhone;
            public StringField ConsumerOtherInformation;
            public StringField ConsumerMobile;
            public StringField ConsumerEmail;
            public BooleanField ConsumerDeleted;
        }
    }
}
