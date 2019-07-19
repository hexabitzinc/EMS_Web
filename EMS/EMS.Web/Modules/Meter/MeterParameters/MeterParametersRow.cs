
namespace EMS.Meter.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Meter"), TableName("[dbo].[MeterParameters]")]
    [DisplayName("Meter Parameters"), InstanceName("Meter Parameters")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("Meter.MeterParameters")]
    public sealed class MeterParametersRow : Row, IIdRow
    {
        [DisplayName("Meter Parameter Id"), Column("MeterParameterID"), Identity]
        public Int32? MeterParameterId
        {
            get { return Fields.MeterParameterId[this]; }
            set { Fields.MeterParameterId[this] = value; }
        }
        [LookupEditor("Parameter.ParameterGroup")]
        [DisplayName("Parameter Group"), Column("ParameterGroupID"), ForeignKey("[dbo].[ParameterGroup]", "ParameterGroupID"), LeftJoin("jParameterGroup"), TextualField("ParameterGroupName")]
        public Int32? ParameterGroupId
        {
            get { return Fields.ParameterGroupId[this]; }
            set { Fields.ParameterGroupId[this] = value; }
        }
        [LookupEditor("Parameter.Parameter")]
        [DisplayName("Parameter"), Column("ParameterID"), ForeignKey("[dbo].[Parameter]", "ParameterID"), LeftJoin("jParameter"), TextualField("ParameterName")]
        public Int32? ParameterId
        {
            get { return Fields.ParameterId[this]; }
            set { Fields.ParameterId[this] = value; }
        }

        [DisplayName("Deleted"), NotNull]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        [DisplayName("Parameter Group Name"), Expression("jParameterGroup.[Name]")]
        public String ParameterGroupName
        {
            get { return Fields.ParameterGroupName[this]; }
            set { Fields.ParameterGroupName[this] = value; }
        }

        [DisplayName("Parameter Group Deleted"), Expression("jParameterGroup.[Deleted]")]
        public Boolean? ParameterGroupDeleted
        {
            get { return Fields.ParameterGroupDeleted[this]; }
            set { Fields.ParameterGroupDeleted[this] = value; }
        }

        [DisplayName("Parameter Parameter Type Id"), Expression("jParameter.[ParameterTypeID]")]
        public Int32? ParameterParameterTypeId
        {
            get { return Fields.ParameterParameterTypeId[this]; }
            set { Fields.ParameterParameterTypeId[this] = value; }
        }

        [DisplayName("Parameter Name"), Expression("jParameter.[Name]")]
        public String ParameterName
        {
            get { return Fields.ParameterName[this]; }
            set { Fields.ParameterName[this] = value; }
        }

        [DisplayName("Parameter Value"), Expression("jParameter.[Value]")]
        public String ParameterValue
        {
            get { return Fields.ParameterValue[this]; }
            set { Fields.ParameterValue[this] = value; }
        }

        [DisplayName("Parameter Address"), Expression("jParameter.[Address]")]
        public String ParameterAddress
        {
            get { return Fields.ParameterAddress[this]; }
            set { Fields.ParameterAddress[this] = value; }
        }

        [DisplayName("Parameter Notes"), Expression("jParameter.[Notes]")]
        public String ParameterNotes
        {
            get { return Fields.ParameterNotes[this]; }
            set { Fields.ParameterNotes[this] = value; }
        }

        [DisplayName("Parameter Deleted"), Expression("jParameter.[Deleted]")]
        public Boolean? ParameterDeleted
        {
            get { return Fields.ParameterDeleted[this]; }
            set { Fields.ParameterDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeterParameterId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeterParametersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeterParameterId;
            public Int32Field ParameterGroupId;
            public Int32Field ParameterId;
            public BooleanField Deleted;

            public StringField ParameterGroupName;
            public BooleanField ParameterGroupDeleted;

            public Int32Field ParameterParameterTypeId;
            public StringField ParameterName;
            public StringField ParameterValue;
            public StringField ParameterAddress;
            public StringField ParameterNotes;
            public BooleanField ParameterDeleted;
        }
    }
}
