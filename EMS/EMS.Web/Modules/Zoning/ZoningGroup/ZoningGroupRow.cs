
namespace EMS.Zoning.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Zoning"), TableName("[dbo].[ZoningGroup]")]
    [DisplayName("Zoning Group"), InstanceName("Zoning Group")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ZoningGroupRow : Row, IIdRow, INameRow
    {
        [DisplayName("Zoning Group Id"), Column("ZoningGroupID"), Identity]
        public Int32? ZoningGroupId
        {
            get { return Fields.ZoningGroupId[this]; }
            set { Fields.ZoningGroupId[this] = value; }
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
            get { return Fields.ZoningGroupId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ZoningGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ZoningGroupId;
            public StringField Name;
            public BooleanField Deleted;
        }
    }
}
