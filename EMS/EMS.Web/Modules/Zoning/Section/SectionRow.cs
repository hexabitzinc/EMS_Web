
namespace EMS.Zoning.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Zoning"), TableName("[dbo].[Section]")]
    [DisplayName("Section"), InstanceName("Section")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SectionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Section Id"), Column("SectionID"), Identity]
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

        [DisplayName("Describtion"), Size(200)]
        public String Describtion
        {
            get { return Fields.Describtion[this]; }
            set { Fields.Describtion[this] = value; }
        }

        [DisplayName("Floor"), Column("FloorID"), ForeignKey("[dbo].[Floor]", "FloorID"), LeftJoin("jFloor"), TextualField("FloorName")]
        public Int32? FloorId
        {
            get { return Fields.FloorId[this]; }
            set { Fields.FloorId[this] = value; }
        }

        [DisplayName("Deleted")]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        [DisplayName("Floor Floor Number"), Expression("jFloor.[FloorNumber]")]
        public Int32? FloorFloorNumber
        {
            get { return Fields.FloorFloorNumber[this]; }
            set { Fields.FloorFloorNumber[this] = value; }
        }

        [DisplayName("Floor Name"), Expression("jFloor.[Name]")]
        public String FloorName
        {
            get { return Fields.FloorName[this]; }
            set { Fields.FloorName[this] = value; }
        }

        [DisplayName("Floor Describtion"), Expression("jFloor.[Describtion]")]
        public String FloorDescribtion
        {
            get { return Fields.FloorDescribtion[this]; }
            set { Fields.FloorDescribtion[this] = value; }
        }

        [DisplayName("Floor Building Id"), Expression("jFloor.[BuildingID]")]
        public Int32? FloorBuildingId
        {
            get { return Fields.FloorBuildingId[this]; }
            set { Fields.FloorBuildingId[this] = value; }
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
            public StringField Name;
            public StringField Describtion;
            public Int32Field FloorId;
            public BooleanField Deleted;

            public Int32Field FloorFloorNumber;
            public StringField FloorName;
            public StringField FloorDescribtion;
            public Int32Field FloorBuildingId;
            public BooleanField FloorDeleted;
        }
    }
}
