
namespace EMS.EMSDevice.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("EMSDevice"), TableName("[dbo].[EMSSetting]")]
    [DisplayName("Ems Setting"), InstanceName("Ems Setting")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("EMSDevice.EMSParameter")]
    public sealed class EmsSettingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ems Setting Id"), Column("EMSSettingID"), Identity]
        public Int32? EmsSettingId
        {
            get { return Fields.EmsSettingId[this]; }
            set { Fields.EmsSettingId[this] = value; }
        }
        [LookupEditor("Parameter.ParameterType")]
        [DisplayName("Parameter Type"), Column("ParameterTypeID"), ForeignKey("[dbo].[ParameterType]", "ParameterTypeID"), LeftJoin("jParameterType"), TextualField("ParameterTypeName")]
        public Int32? ParameterTypeId
        {
            get { return Fields.ParameterTypeId[this]; }
            set { Fields.ParameterTypeId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Value"), Size(200)]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [DisplayName("Address"), Size(200)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Deleted"), NotNull]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        [DisplayName("Parameter Type Name"), Expression("jParameterType.[Name]")]
        public String ParameterTypeName
        {
            get { return Fields.ParameterTypeName[this]; }
            set { Fields.ParameterTypeName[this] = value; }
        }

        [DisplayName("Parameter Type Deleted"), Expression("jParameterType.[Deleted]")]
        public Boolean? ParameterTypeDeleted
        {
            get { return Fields.ParameterTypeDeleted[this]; }
            set { Fields.ParameterTypeDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmsSettingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmsSettingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmsSettingId;
            public Int32Field ParameterTypeId;
            public StringField Name;
            public StringField Value;
            public StringField Address;
            public StringField Notes;
            public BooleanField Deleted;

            public StringField ParameterTypeName;
            public BooleanField ParameterTypeDeleted;
        }
    }
}
