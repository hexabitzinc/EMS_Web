
namespace EMS.Meters.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Meters"), TableName("[dbo].[Meter]")]
    [DisplayName("Meter"), InstanceName("Meter")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MeterRow : Row, IIdRow
    {
        [DisplayName("Meter Id"), Column("MeterID"), Identity]
        public Int32? MeterId
        {
            get { return Fields.MeterId[this]; }
            set { Fields.MeterId[this] = value; }
        }

        [DisplayName("Apartment"), Column("ApartmentID"), ForeignKey("[dbo].[Apartment]", "ApartmentID"), LeftJoin("jApartment"), TextualField("ApartmentName")]
        public Int32? ApartmentId
        {
            get { return Fields.ApartmentId[this]; }
            set { Fields.ApartmentId[this] = value; }
        }

        [DisplayName("Consumer"), Column("ConsumerID"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jConsumer"), TextualField("ConsumerUsername")]
        public Int32? ConsumerId
        {
            get { return Fields.ConsumerId[this]; }
            set { Fields.ConsumerId[this] = value; }
        }

        [DisplayName("Deleted")]
        public Boolean? Deleted
        {
            get { return Fields.Deleted[this]; }
            set { Fields.Deleted[this] = value; }
        }

        [DisplayName("Apartment Name"), Expression("jApartment.[Name]")]
        public String ApartmentName
        {
            get { return Fields.ApartmentName[this]; }
            set { Fields.ApartmentName[this] = value; }
        }

        [DisplayName("Apartment Type"), Expression("jApartment.[Type]")]
        public String ApartmentType
        {
            get { return Fields.ApartmentType[this]; }
            set { Fields.ApartmentType[this] = value; }
        }

        [DisplayName("Apartment Address"), Expression("jApartment.[Address]")]
        public String ApartmentAddress
        {
            get { return Fields.ApartmentAddress[this]; }
            set { Fields.ApartmentAddress[this] = value; }
        }

        [DisplayName("Apartment Room Number"), Expression("jApartment.[RoomNumber]")]
        public String ApartmentRoomNumber
        {
            get { return Fields.ApartmentRoomNumber[this]; }
            set { Fields.ApartmentRoomNumber[this] = value; }
        }

        [DisplayName("Apartment Describtion"), Expression("jApartment.[Describtion]")]
        public String ApartmentDescribtion
        {
            get { return Fields.ApartmentDescribtion[this]; }
            set { Fields.ApartmentDescribtion[this] = value; }
        }

        [DisplayName("Apartment Section Id"), Expression("jApartment.[SectionID]")]
        public Int32? ApartmentSectionId
        {
            get { return Fields.ApartmentSectionId[this]; }
            set { Fields.ApartmentSectionId[this] = value; }
        }

        [DisplayName("Apartment Deleted"), Expression("jApartment.[Deleted]")]
        public Boolean? ApartmentDeleted
        {
            get { return Fields.ApartmentDeleted[this]; }
            set { Fields.ApartmentDeleted[this] = value; }
        }

        [DisplayName("Consumer Username"), Expression("jConsumer.[Username]")]
        public String ConsumerUsername
        {
            get { return Fields.ConsumerUsername[this]; }
            set { Fields.ConsumerUsername[this] = value; }
        }

        [DisplayName("Consumer Display Name"), Expression("jConsumer.[DisplayName]")]
        public String ConsumerDisplayName
        {
            get { return Fields.ConsumerDisplayName[this]; }
            set { Fields.ConsumerDisplayName[this] = value; }
        }

        [DisplayName("Consumer Email"), Expression("jConsumer.[Email]")]
        public String ConsumerEmail
        {
            get { return Fields.ConsumerEmail[this]; }
            set { Fields.ConsumerEmail[this] = value; }
        }

        [DisplayName("Consumer Source"), Expression("jConsumer.[Source]")]
        public String ConsumerSource
        {
            get { return Fields.ConsumerSource[this]; }
            set { Fields.ConsumerSource[this] = value; }
        }

        [DisplayName("Consumer Password Hash"), Expression("jConsumer.[PasswordHash]")]
        public String ConsumerPasswordHash
        {
            get { return Fields.ConsumerPasswordHash[this]; }
            set { Fields.ConsumerPasswordHash[this] = value; }
        }

        [DisplayName("Consumer Password Salt"), Expression("jConsumer.[PasswordSalt]")]
        public String ConsumerPasswordSalt
        {
            get { return Fields.ConsumerPasswordSalt[this]; }
            set { Fields.ConsumerPasswordSalt[this] = value; }
        }

        [DisplayName("Consumer Last Directory Update"), Expression("jConsumer.[LastDirectoryUpdate]")]
        public DateTime? ConsumerLastDirectoryUpdate
        {
            get { return Fields.ConsumerLastDirectoryUpdate[this]; }
            set { Fields.ConsumerLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Consumer User Image"), Expression("jConsumer.[UserImage]")]
        public String ConsumerUserImage
        {
            get { return Fields.ConsumerUserImage[this]; }
            set { Fields.ConsumerUserImage[this] = value; }
        }

        [DisplayName("Consumer Insert Date"), Expression("jConsumer.[InsertDate]")]
        public DateTime? ConsumerInsertDate
        {
            get { return Fields.ConsumerInsertDate[this]; }
            set { Fields.ConsumerInsertDate[this] = value; }
        }

        [DisplayName("Consumer Insert User Id"), Expression("jConsumer.[InsertUserId]")]
        public Int32? ConsumerInsertUserId
        {
            get { return Fields.ConsumerInsertUserId[this]; }
            set { Fields.ConsumerInsertUserId[this] = value; }
        }

        [DisplayName("Consumer Update Date"), Expression("jConsumer.[UpdateDate]")]
        public DateTime? ConsumerUpdateDate
        {
            get { return Fields.ConsumerUpdateDate[this]; }
            set { Fields.ConsumerUpdateDate[this] = value; }
        }

        [DisplayName("Consumer Update User Id"), Expression("jConsumer.[UpdateUserId]")]
        public Int32? ConsumerUpdateUserId
        {
            get { return Fields.ConsumerUpdateUserId[this]; }
            set { Fields.ConsumerUpdateUserId[this] = value; }
        }

        [DisplayName("Consumer Is Active"), Expression("jConsumer.[IsActive]")]
        public Int16? ConsumerIsActive
        {
            get { return Fields.ConsumerIsActive[this]; }
            set { Fields.ConsumerIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeterId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeterId;
            public Int32Field ApartmentId;
            public Int32Field ConsumerId;
            public BooleanField Deleted;

            public StringField ApartmentName;
            public StringField ApartmentType;
            public StringField ApartmentAddress;
            public StringField ApartmentRoomNumber;
            public StringField ApartmentDescribtion;
            public Int32Field ApartmentSectionId;
            public BooleanField ApartmentDeleted;

            public StringField ConsumerUsername;
            public StringField ConsumerDisplayName;
            public StringField ConsumerEmail;
            public StringField ConsumerSource;
            public StringField ConsumerPasswordHash;
            public StringField ConsumerPasswordSalt;
            public DateTimeField ConsumerLastDirectoryUpdate;
            public StringField ConsumerUserImage;
            public DateTimeField ConsumerInsertDate;
            public Int32Field ConsumerInsertUserId;
            public DateTimeField ConsumerUpdateDate;
            public Int32Field ConsumerUpdateUserId;
            public Int16Field ConsumerIsActive;
        }
    }
}
