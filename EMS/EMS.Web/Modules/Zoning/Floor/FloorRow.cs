
namespace EMS.Zoning.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Zoning"), TableName("[dbo].[Floor]")]
    [DisplayName("Floor"), InstanceName("Floor")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class FloorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Floor Id"), Column("FloorID"), Identity]
        public Int32? FloorId
        {
            get { return Fields.FloorId[this]; }
            set { Fields.FloorId[this] = value; }
        }

        [DisplayName("Floor Number")]
        public Int32? FloorNumber
        {
            get { return Fields.FloorNumber[this]; }
            set { Fields.FloorNumber[this] = value; }
        }

        [DisplayName("Name"), Size(200), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Describtion"), Size(200)]
        public String Describtion
        {
            get { return Fields.Describtion[this]; }
            set { Fields.Describtion[this] = value; }
        }

        [DisplayName("Building"), Column("BuildingID"), ForeignKey("[dbo].[Building]", "BuildingID"), LeftJoin("jBuilding"), TextualField("BuildingZipCode")]
        public Int32? BuildingId
        {
            get { return Fields.BuildingId[this]; }
            set { Fields.BuildingId[this] = value; }
        }

        [DisplayName("Deleted")]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
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

        [DisplayName("Building City Id"), Expression("jBuilding.[CityID]")]
        public Int32? BuildingCityId
        {
            get { return Fields.BuildingCityId[this]; }
            set { Fields.BuildingCityId[this] = value; }
        }

        [DisplayName("Building Deleted"), Expression("jBuilding.[Deleted]")]
        public Boolean? BuildingDeleted
        {
            get { return Fields.BuildingDeleted[this]; }
            set { Fields.BuildingDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FloorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FloorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FloorId;
            public Int32Field FloorNumber;
            public StringField Name;
            public StringField Describtion;
            public Int32Field BuildingId;
            public BooleanField Deleted;

            public StringField BuildingZipCode;
            public StringField BuildingAddress;
            public StringField BuildingStreetAddress;
            public StringField BuildingDescription;
            public Int32Field BuildingCityId;
            public BooleanField BuildingDeleted;
        }
    }
}
