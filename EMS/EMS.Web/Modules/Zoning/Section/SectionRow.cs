
namespace EMS.Zoning.Entities
{
    using Newtonsoft.Json;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Zoning"), TableName("[dbo].[Section]")]
    [DisplayName("Section"), InstanceName("Section")]
    [ReadPermission("Administration:Operator")]
    [ModifyPermission("Administration:Operator")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("Zoning.Section")]
    public sealed class SectionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Section Id"), Column("SectionID"), Identity]
        public Int32? SectionId
        {
            get { return Fields.SectionId[this]; }
            set { Fields.SectionId[this] = value; }
        }
        [LookupEditor("Zoning.Floor", InplaceAdd = true)]
        [DisplayName("Floor"), Column("FloorID"), ForeignKey("[dbo].[Floor]", "FloorID"), LeftJoin("jFloor"), TextualField("FloorName")]
        public Int32? FloorId
        {
            get { return Fields.FloorId[this]; }
            set { Fields.FloorId[this] = value; }
        }

        [DisplayName("Name"), Size(200), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
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

        [DisplayName("Floor Building Id"), Expression("jFloor.[BuildingID]")]
        public Int32? FloorBuildingId
        {
            get { return Fields.FloorBuildingId[this]; }
            set { Fields.FloorBuildingId[this] = value; }
        }

        [DisplayName("Floor Name"), Expression("jFloor.[Name]")]
        public String FloorName
        {
            get { return Fields.FloorName[this]; }
            set { Fields.FloorName[this] = value; }
        }

        [DisplayName("Floor Floor Number"), Expression("jFloor.[FloorNumber]")]
        public Int32? FloorFloorNumber
        {
            get { return Fields.FloorFloorNumber[this]; }
            set { Fields.FloorFloorNumber[this] = value; }
        }

        [DisplayName("Floor Description"), Expression("jFloor.[Description]")]
        public String FloorDescription
        {
            get { return Fields.FloorDescription[this]; }
            set { Fields.FloorDescription[this] = value; }
        }

        [DisplayName("Floor Deleted"), Expression("jFloor.[Deleted]")]
        public Boolean? FloorDeleted
        {
            get { return Fields.FloorDeleted[this]; }
            set { Fields.FloorDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SectionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SectionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SectionId;
            public Int32Field FloorId;
            public StringField Name;
            public StringField Description;
            public BooleanField Deleted;

            public Int32Field FloorBuildingId;
            public StringField FloorName;
            public Int32Field FloorFloorNumber;
            public StringField FloorDescription;
            public BooleanField FloorDeleted;
        }
    }
}
