
namespace EMS.EMSDevice.Entities
{
    using Newtonsoft.Json;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("EMSDevice"), TableName("[dbo].[EMSDevice]")]
    [DisplayName("Ems Device"), InstanceName("Ems Device")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("EMSDevice.EMSDevice")]
    public sealed class EmsDeviceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ems Device Id"), Column("EMSDeviceID"), Identity]
        public Int32? EmsDeviceId
        {
            get { return Fields.EmsDeviceId[this]; }
            set { Fields.EmsDeviceId[this] = value; }
        }
        [LookupEditor("Zoning.Building", InplaceAdd = true)]
        [DisplayName("Building"), Column("BuildingID"), ForeignKey("[dbo].[Building]", "BuildingID"), LeftJoin("jBuilding"), TextualField("BuildingName")]
        public Int32? BuildingId
        {
            get { return Fields.BuildingId[this]; }
            set { Fields.BuildingId[this] = value; }
        }
        [LookupEditor("EMSDevice.EMSParameter", InplaceAdd = true)]
        [DisplayName("Ems Parameter"), Column("EMSParameterID"), ForeignKey("[dbo].[EMSParameter]", "EMSParameterID"), LeftJoin("jEmsParameter"), TextualField("EmsParameterName")]
        public Int32? EmsParameterId
        {
            get { return Fields.EmsParameterId[this]; }
            set { Fields.EmsParameterId[this] = value; }
        }
        [LookupEditor("EMSDevice.EMSSetting", InplaceAdd = true)]
        [DisplayName("Ems Setting"), Column("EMSSettingID"), ForeignKey("[dbo].[EMSSetting]", "EMSSettingID"), LeftJoin("jEmsSetting"), TextualField("EmsSettingName")]
        public Int32? EmsSettingId
        {
            get { return Fields.EmsSettingId[this]; }
            set { Fields.EmsSettingId[this] = value; }
        }
        [LookupEditor("Consumer.Consumer", InplaceAdd = true)]
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

        [DisplayName("Building City Id"), Expression("jBuilding.[CityID]")]
        public Int32? BuildingCityId
        {
            get { return Fields.BuildingCityId[this]; }
            set { Fields.BuildingCityId[this] = value; }
        }

        [DisplayName("Building Name"), Expression("jBuilding.[Name]")]
        public String BuildingName
        {
            get { return Fields.BuildingName[this]; }
            set { Fields.BuildingName[this] = value; }
        }

        [DisplayName("Building Zip Code"), Expression("jBuilding.[ZipCode]")]
        public String BuildingZipCode
        {
            get { return Fields.BuildingZipCode[this]; }
            set { Fields.BuildingZipCode[this] = value; }
        }

        [DisplayName("Building Address"), Expression("jBuilding.[Address]")]
        public String BuildingAddress
        {
            get { return Fields.BuildingAddress[this]; }
            set { Fields.BuildingAddress[this] = value; }
        }

        [DisplayName("Building Street Address"), Expression("jBuilding.[StreetAddress]")]
        public String BuildingStreetAddress
        {
            get { return Fields.BuildingStreetAddress[this]; }
            set { Fields.BuildingStreetAddress[this] = value; }
        }

        [DisplayName("Building Description"), Expression("jBuilding.[Description]")]
        public String BuildingDescription
        {
            get { return Fields.BuildingDescription[this]; }
            set { Fields.BuildingDescription[this] = value; }
        }

        [DisplayName("Building Deleted"), Expression("jBuilding.[Deleted]")]
        public Boolean? BuildingDeleted
        {
            get { return Fields.BuildingDeleted[this]; }
            set { Fields.BuildingDeleted[this] = value; }
        }

        [DisplayName("Ems Parameter Parameter Type Id"), Expression("jEmsParameter.[ParameterTypeID]")]
        public Int32? EmsParameterParameterTypeId
        {
            get { return Fields.EmsParameterParameterTypeId[this]; }
            set { Fields.EmsParameterParameterTypeId[this] = value; }
        }

        [DisplayName("Ems Parameter Name"), Expression("jEmsParameter.[Name]")]
        public String EmsParameterName
        {
            get { return Fields.EmsParameterName[this]; }
            set { Fields.EmsParameterName[this] = value; }
        }

        [DisplayName("Ems Parameter Value"), Expression("jEmsParameter.[Value]")]
        public String EmsParameterValue
        {
            get { return Fields.EmsParameterValue[this]; }
            set { Fields.EmsParameterValue[this] = value; }
        }

        [DisplayName("Ems Parameter Address"), Expression("jEmsParameter.[Address]")]
        public String EmsParameterAddress
        {
            get { return Fields.EmsParameterAddress[this]; }
            set { Fields.EmsParameterAddress[this] = value; }
        }

        [DisplayName("Ems Parameter Notes"), Expression("jEmsParameter.[Notes]")]
        public String EmsParameterNotes
        {
            get { return Fields.EmsParameterNotes[this]; }
            set { Fields.EmsParameterNotes[this] = value; }
        }

        [DisplayName("Ems Parameter Deleted"), Expression("jEmsParameter.[Deleted]")]
        public Boolean? EmsParameterDeleted
        {
            get { return Fields.EmsParameterDeleted[this]; }
            set { Fields.EmsParameterDeleted[this] = value; }
        }

        [DisplayName("Ems Setting Parameter Type Id"), Expression("jEmsSetting.[ParameterTypeID]")]
        public Int32? EmsSettingParameterTypeId
        {
            get { return Fields.EmsSettingParameterTypeId[this]; }
            set { Fields.EmsSettingParameterTypeId[this] = value; }
        }

        [DisplayName("Ems Setting Name"), Expression("jEmsSetting.[Name]")]
        public String EmsSettingName
        {
            get { return Fields.EmsSettingName[this]; }
            set { Fields.EmsSettingName[this] = value; }
        }

        [DisplayName("Ems Setting Value"), Expression("jEmsSetting.[Value]")]
        public String EmsSettingValue
        {
            get { return Fields.EmsSettingValue[this]; }
            set { Fields.EmsSettingValue[this] = value; }
        }

        [DisplayName("Ems Setting Address"), Expression("jEmsSetting.[Address]")]
        public String EmsSettingAddress
        {
            get { return Fields.EmsSettingAddress[this]; }
            set { Fields.EmsSettingAddress[this] = value; }
        }

        [DisplayName("Ems Setting Notes"), Expression("jEmsSetting.[Notes]")]
        public String EmsSettingNotes
        {
            get { return Fields.EmsSettingNotes[this]; }
            set { Fields.EmsSettingNotes[this] = value; }
        }

        [DisplayName("Ems Setting Deleted"), Expression("jEmsSetting.[Deleted]")]
        public Boolean? EmsSettingDeleted
        {
            get { return Fields.EmsSettingDeleted[this]; }
            set { Fields.EmsSettingDeleted[this] = value; }
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
            get { return Fields.EmsDeviceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmsDeviceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmsDeviceId;
            public Int32Field BuildingId;
            public Int32Field EmsParameterId;
            public Int32Field EmsSettingId;
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

            public Int32Field BuildingCityId;
            public StringField BuildingName;
            public StringField BuildingZipCode;
            public StringField BuildingAddress;
            public StringField BuildingStreetAddress;
            public StringField BuildingDescription;
            public BooleanField BuildingDeleted;

            public Int32Field EmsParameterParameterTypeId;
            public StringField EmsParameterName;
            public StringField EmsParameterValue;
            public StringField EmsParameterAddress;
            public StringField EmsParameterNotes;
            public BooleanField EmsParameterDeleted;

            public Int32Field EmsSettingParameterTypeId;
            public StringField EmsSettingName;
            public StringField EmsSettingValue;
            public StringField EmsSettingAddress;
            public StringField EmsSettingNotes;
            public BooleanField EmsSettingDeleted;

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
