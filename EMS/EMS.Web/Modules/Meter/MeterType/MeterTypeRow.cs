
namespace EMS.Meter.Entities
{
    using Newtonsoft.Json;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Meter"), TableName("[dbo].[MeterType]")]
    [DisplayName("Meter Type"), InstanceName("Meter Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("Meter.MeterType")]
    public sealed class MeterTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meter Type Id"), Column("MeterTypeID"), Identity]
        public Int32? MeterTypeId
        {
            get { return Fields.MeterTypeId[this]; }
            set { Fields.MeterTypeId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Deleted"), NotNull]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeterTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeterTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeterTypeId;
            public StringField Name;
            public BooleanField Deleted;
        }
    }
}
