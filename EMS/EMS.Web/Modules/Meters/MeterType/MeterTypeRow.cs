
namespace EMS.Meters.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Meters"), TableName("[dbo].[MeterType]")]
    [DisplayName("Meter Type"), InstanceName("Meter Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MeterTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Floor Id"), Column("FloorID"), Identity]
        public Int32? FloorId
        {
            get { return Fields.FloorId[this]; }
            set { Fields.FloorId[this] = value; }
        }

        [DisplayName("Building Id"), Column("BuildingID"), Size(200), NotNull, QuickSearch]
        public String BuildingId
        {
            get { return Fields.BuildingId[this]; }
            set { Fields.BuildingId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FloorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BuildingId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeterTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FloorId;
            public StringField BuildingId;
        }
    }
}
