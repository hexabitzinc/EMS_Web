
namespace EMS.Meter.Entities
{
    using Newtonsoft.Json;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Meter"), TableName("[dbo].[Scheduling]")]
    [DisplayName("Scheduling"), InstanceName("Scheduling")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("Meter.Scheduling")]
    public sealed class SchedulingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Scheduling Id"), Column("SchedulingID"), Identity]
        public Int32? SchedulingId
        {
            get { return Fields.SchedulingId[this]; }
            set { Fields.SchedulingId[this] = value; }
        }

        [DisplayName("Year"), Size(200), QuickSearch]
        public String Year
        {
            get { return Fields.Year[this]; }
            set { Fields.Year[this] = value; }
        }

        [DisplayName("Month"), Size(200)]
        public String Month
        {
            get { return Fields.Month[this]; }
            set { Fields.Month[this] = value; }
        }

        [DisplayName("Day"), Size(200)]
        public String Day
        {
            get { return Fields.Day[this]; }
            set { Fields.Day[this] = value; }
        }

        [DisplayName("Time"), Size(200)]
        public String Time
        {
            get { return Fields.Time[this]; }
            set { Fields.Time[this] = value; }
        }

        [DisplayName("Full Date"), NotNull]
        public DateTime? FullDate
        {
            get { return Fields.FullDate[this]; }
            set { Fields.FullDate[this] = value; }
        }

        [DisplayName("Deleted"), NotNull]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SchedulingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Year; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SchedulingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SchedulingId;
            public StringField Year;
            public StringField Month;
            public StringField Day;
            public StringField Time;
            public DateTimeField FullDate;
            public BooleanField Deleted;
        }
    }
}
