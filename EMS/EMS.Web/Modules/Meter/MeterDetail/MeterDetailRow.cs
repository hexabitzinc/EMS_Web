
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

    [ConnectionKey("Default"), Module("Meter"), TableName("[dbo].[MeterDetail]")]
    [DisplayName("Meter Detail"), InstanceName("Meter Detail")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [JsonConverter(typeof(JsonRowConverter))]
    [LookupScript("Meter.MeterDetail")]
    public sealed class MeterDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meter Detail Id"), Column("MeterDetailID"), Identity]
        public Int32? MeterDetailId
        {
            get { return Fields.MeterDetailId[this]; }
            set { Fields.MeterDetailId[this] = value; }
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
        [LookupEditor("Meter.Scheduling")]
        [DisplayName("Scheduling"), Column("SchedulingID"), ForeignKey("[dbo].[Scheduling]", "SchedulingID"), LeftJoin("jScheduling"), TextualField("SchedulingID")]
        public Int32? SchedulingId
        {
            get { return Fields.SchedulingId[this]; }
            set { Fields.SchedulingId[this] = value; }
        }
        [LookupEditor("Zoning.Apartment")]
        [DisplayName("Apartment"), Column("ApartmentID"), ForeignKey("[dbo].[Apartment]", "ApartmentID"), LeftJoin("jApartment"), TextualField("ApartmentName")]
        public Int32? ApartmentId
        {
            get { return Fields.ApartmentId[this]; }
            set { Fields.ApartmentId[this] = value; }
        }
        [LookupEditor("Zoning.CommonLocation")]
        [DisplayName("Common Location"), Column("CommonLocationID"), ForeignKey("[dbo].[CommonLocation]", "CommonLocationID"), LeftJoin("jCommonLocation"), TextualField("CommonLocationName")]
        public Int32? CommonLocationId
        {
            get { return Fields.CommonLocationId[this]; }
            set { Fields.CommonLocationId[this] = value; }
        }

        [DisplayName("Value"), Size(200), QuickSearch]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
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

        [DisplayName("Scheduling Year"), Expression("jScheduling.[Year]")]
        public String SchedulingYear
        {
            get { return Fields.SchedulingYear[this]; }
            set { Fields.SchedulingYear[this] = value; }
        }

        [DisplayName("Scheduling Month"), Expression("jScheduling.[Month]")]
        public String SchedulingMonth
        {
            get { return Fields.SchedulingMonth[this]; }
            set { Fields.SchedulingMonth[this] = value; }
        }

        [DisplayName("Scheduling Day"), Expression("jScheduling.[Day]")]
        public String SchedulingDay
        {
            get { return Fields.SchedulingDay[this]; }
            set { Fields.SchedulingDay[this] = value; }
        }

        [DisplayName("Scheduling Time"), Expression("jScheduling.[Time]")]
        public String SchedulingTime
        {
            get { return Fields.SchedulingTime[this]; }
            set { Fields.SchedulingTime[this] = value; }
        }

        [DisplayName("Scheduling Full Date"), Expression("jScheduling.[FullDate]")]
        public DateTime? SchedulingFullDate
        {
            get { return Fields.SchedulingFullDate[this]; }
            set { Fields.SchedulingFullDate[this] = value; }
        }

        [DisplayName("Scheduling Deleted"), Expression("jScheduling.[Deleted]")]
        public Boolean? SchedulingDeleted
        {
            get { return Fields.SchedulingDeleted[this]; }
            set { Fields.SchedulingDeleted[this] = value; }
        }

        [DisplayName("Apartment Section Id"), Expression("jApartment.[SectionID]")]
        public Int32? ApartmentSectionId
        {
            get { return Fields.ApartmentSectionId[this]; }
            set { Fields.ApartmentSectionId[this] = value; }
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

        [DisplayName("Apartment Description"), Expression("jApartment.[Description]")]
        public String ApartmentDescription
        {
            get { return Fields.ApartmentDescription[this]; }
            set { Fields.ApartmentDescription[this] = value; }
        }

        [DisplayName("Apartment Deleted"), Expression("jApartment.[Deleted]")]
        public Boolean? ApartmentDeleted
        {
            get { return Fields.ApartmentDeleted[this]; }
            set { Fields.ApartmentDeleted[this] = value; }
        }

        [DisplayName("Common Location Building Id"), Expression("jCommonLocation.[BuildingID]")]
        public Int32? CommonLocationBuildingId
        {
            get { return Fields.CommonLocationBuildingId[this]; }
            set { Fields.CommonLocationBuildingId[this] = value; }
        }

        [DisplayName("Common Location Name"), Expression("jCommonLocation.[Name]")]
        public String CommonLocationName
        {
            get { return Fields.CommonLocationName[this]; }
            set { Fields.CommonLocationName[this] = value; }
        }

        [DisplayName("Common Location Description"), Expression("jCommonLocation.[Description]")]
        public String CommonLocationDescription
        {
            get { return Fields.CommonLocationDescription[this]; }
            set { Fields.CommonLocationDescription[this] = value; }
        }

        [DisplayName("Common Location Deleted"), Expression("jCommonLocation.[Deleted]")]
        public Boolean? CommonLocationDeleted
        {
            get { return Fields.CommonLocationDeleted[this]; }
            set { Fields.CommonLocationDeleted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeterDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeterDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeterDetailId;
            public Int32Field ParameterGroupId;
            public Int32Field ParameterId;
            public Int32Field SchedulingId;
            public Int32Field ApartmentId;
            public Int32Field CommonLocationId;
            public StringField Value;
            public BooleanField Deleted;

            public StringField ParameterGroupName;
            public BooleanField ParameterGroupDeleted;

            public Int32Field ParameterParameterTypeId;
            public StringField ParameterName;
            public StringField ParameterAddress;
            public StringField ParameterNotes;
            public BooleanField ParameterDeleted;

            public StringField SchedulingYear;
            public StringField SchedulingMonth;
            public StringField SchedulingDay;
            public StringField SchedulingTime;
            public DateTimeField SchedulingFullDate;
            public BooleanField SchedulingDeleted;

            public Int32Field ApartmentSectionId;
            public StringField ApartmentName;
            public StringField ApartmentType;
            public StringField ApartmentAddress;
            public StringField ApartmentRoomNumber;
            public StringField ApartmentDescription;
            public BooleanField ApartmentDeleted;

            public Int32Field CommonLocationBuildingId;
            public StringField CommonLocationName;
            public StringField CommonLocationDescription;
            public BooleanField CommonLocationDeleted;
        }
    }
}
