
namespace EMS.Zoning.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Zoning"), TableName("[dbo].[Building]")]
    [DisplayName("Building"), InstanceName("Building")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("Zoning.Building")]
    public sealed class BuildingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Building Id"), Column("BuildingID"), Identity]
        public Int32? BuildingId
        {
            get { return Fields.BuildingId[this]; }
            set { Fields.BuildingId[this] = value; }
        }

        [DisplayName("City"), Column("CityID"), ForeignKey("[dbo].[City]", "CityID"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor("Zoning.City")]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Name"), Size(200), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Zip Code"), Size(200)]
        public String ZipCode
        {
            get { return Fields.ZipCode[this]; }
            set { Fields.ZipCode[this] = value; }
        }

        [DisplayName("Address"), Size(1000)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Street Address"), Size(200)]
        public String StreetAddress
        {
            get { return Fields.StreetAddress[this]; }
            set { Fields.StreetAddress[this] = value; }
        }

        [DisplayName("Description"), Size(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Deleted"), NotNull]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        [DisplayName("City Name"), Expression("jCity.[Name]")]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("City Description"), Expression("jCity.[Description]")]
        public String CityDescription
        {
            get { return Fields.CityDescription[this]; }
            set { Fields.CityDescription[this] = value; }
        }

        [DisplayName("City Deleted"), Expression("jCity.[Deleted]")]
        public Boolean? CityDeleted
        {
            get { return Fields.CityDeleted[this]; }
            set { Fields.CityDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BuildingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BuildingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BuildingId;
            public Int32Field CityId;
            public StringField Name;
            public StringField ZipCode;
            public StringField Address;
            public StringField StreetAddress;
            public StringField Description;
            public BooleanField Deleted;

            public StringField CityName;
            public StringField CityDescription;
            public BooleanField CityDeleted;
        }
    }
}
