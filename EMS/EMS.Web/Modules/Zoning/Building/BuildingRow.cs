
namespace EMS.Zoning.Entities
{
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
    public sealed class BuildingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Building Id"), Column("BuildingID"), Identity]
        public Int32? BuildingId
        {
            get { return Fields.BuildingId[this]; }
            set { Fields.BuildingId[this] = value; }
        }

        [DisplayName("Zip Code"), Size(200), QuickSearch]
        public String ZipCode
        {
            get { return Fields.ZipCode[this]; }
            set { Fields.ZipCode[this] = value; }
        }

        [DisplayName("Address"), Size(200)]
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

        [DisplayName("City"), Column("CityID"), ForeignKey("[dbo].[City]", "CityID"), LeftJoin("jCity"), TextualField("CityName")]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Deleted")]
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
            get { return Fields.ZipCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BuildingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BuildingId;
            public StringField ZipCode;
            public StringField Address;
            public StringField StreetAddress;
            public StringField Description;
            public Int32Field CityId;
            public BooleanField Deleted;

            public StringField CityName;
            public BooleanField CityDeleted;
        }
    }
}
