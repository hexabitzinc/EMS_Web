
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

    [ConnectionKey("Default"), Module("Zoning"), TableName("[dbo].[CommonLocation]")]
    [DisplayName("Common Location"), InstanceName("Common Location")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("Zoning.CommonLocation")]
    public sealed class CommonLocationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Common Location Id"), Column("CommonLocationID"), Identity]
        public Int32? CommonLocationId
        {
            get { return Fields.CommonLocationId[this]; }
            set { Fields.CommonLocationId[this] = value; }
        }

        [DisplayName("Building"), Column("BuildingID"), ForeignKey("[dbo].[Building]", "BuildingID"), LeftJoin("jBuilding"), TextualField("BuildingName")]
        [LookupEditor("Zonning.Building")]
        public Int32? BuildingId
        {
            get { return Fields.BuildingId[this]; }
            set { Fields.BuildingId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description"), Size(1000)]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.CommonLocationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CommonLocationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CommonLocationId;
            public Int32Field BuildingId;
            public StringField Name;
            public StringField Description;
            public BooleanField Deleted;

            public Int32Field BuildingCityId;
            public StringField BuildingName;
            public StringField BuildingZipCode;
            public StringField BuildingAddress;
            public StringField BuildingStreetAddress;
            public StringField BuildingDescription;
            public BooleanField BuildingDeleted;
        }
    }
}
