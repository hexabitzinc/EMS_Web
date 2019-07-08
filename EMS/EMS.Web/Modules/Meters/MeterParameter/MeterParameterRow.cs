
namespace EMS.Meters.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Meters"), TableName("[dbo].[MeterParameter]")]
    [DisplayName("Meter Parameter"), InstanceName("Meter Parameter")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MeterParameterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meter Parameter Id"), Column("MeterParameterID"), Identity]
        public Int32? MeterParameterId
        {
            get { return Fields.MeterParameterId[this]; }
            set { Fields.MeterParameterId[this] = value; }
        }

        [DisplayName("Building Id"), Column("BuildingID"), Size(200), NotNull, QuickSearch]
        public String BuildingId
        {
            get { return Fields.BuildingId[this]; }
            set { Fields.BuildingId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeterParameterId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BuildingId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeterParameterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeterParameterId;
            public StringField BuildingId;
        }
    }
}
