
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

    [ConnectionKey("Default"), Module("Zoning"), TableName("[dbo].[Apartment]")]
    [DisplayName("Apartment"), InstanceName("Apartment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("Zoning.Apartment")]
    public sealed class ApartmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Apartment Id"), Column("ApartmentID"), Identity]
        public Int32? ApartmentId
        {
            get { return Fields.ApartmentId[this]; }
            set { Fields.ApartmentId[this] = value; }
        }
        [LookupEditor("Zoning.Section", InplaceAdd = true)]
        [DisplayName("Section"), Column("SectionID"), ForeignKey("[dbo].[Section]", "SectionID"), LeftJoin("jSection"), TextualField("SectionName")]
        public Int32? SectionId
        {
            get { return Fields.SectionId[this]; }
            set { Fields.SectionId[this] = value; }
        }

        [DisplayName("Name"), Size(200), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Type"), Size(200)]
        public String Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Address"), Size(1000)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Room Number"), Size(200)]
        public String RoomNumber
        {
            get { return Fields.RoomNumber[this]; }
            set { Fields.RoomNumber[this] = value; }
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

        [DisplayName("Section Floor Id"), Expression("jSection.[FloorID]")]
        public Int32? SectionFloorId
        {
            get { return Fields.SectionFloorId[this]; }
            set { Fields.SectionFloorId[this] = value; }
        }

        [DisplayName("Section Name"), Expression("jSection.[Name]")]
        public String SectionName
        {
            get { return Fields.SectionName[this]; }
            set { Fields.SectionName[this] = value; }
        }

        [DisplayName("Section Description"), Expression("jSection.[Description]")]
        public String SectionDescription
        {
            get { return Fields.SectionDescription[this]; }
            set { Fields.SectionDescription[this] = value; }
        }

        [DisplayName("Section Deleted"), Expression("jSection.[Deleted]")]
        public Boolean? SectionDeleted
        {
            get { return Fields.SectionDeleted[this]; }
            set { Fields.SectionDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ApartmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ApartmentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ApartmentId;
            public Int32Field SectionId;
            public StringField Name;
            public StringField Type;
            public StringField Address;
            public StringField RoomNumber;
            public StringField Description;
            public BooleanField Deleted;

            public Int32Field SectionFloorId;
            public StringField SectionName;
            public StringField SectionDescription;
            public BooleanField SectionDeleted;
        }
    }
}
