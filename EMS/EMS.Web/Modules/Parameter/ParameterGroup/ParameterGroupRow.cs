
namespace EMS.Parameter.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Parameter"), TableName("[dbo].[ParameterGroup]")]
    [DisplayName("Parameter Group"), InstanceName("Parameter Group")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ParameterGroupRow : Row, IIdRow, INameRow
    {
        [DisplayName("Parameter Group Id"), Column("ParameterGroupID"), Identity]
        public Int32? ParameterGroupId
        {
            get { return Fields.ParameterGroupId[this]; }
            set { Fields.ParameterGroupId[this] = value; }
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
            get { return Fields.ParameterGroupId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ParameterGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ParameterGroupId;
            public StringField Name;
            public BooleanField Deleted;
        }
    }
}
