
namespace EMS.Parameter.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Parameter"), TableName("[dbo].[ParameterType]")]
    [DisplayName("Parameter Type"), InstanceName("Parameter Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ParameterTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Parameter Type Id"), Column("ParameterTypeID"), Identity]
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

        [DisplayName("Deleted"), NotNull]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ParameterTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ParameterTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ParameterTypeId;
            public StringField Name;
            public BooleanField Deleted;
        }
    }
}
