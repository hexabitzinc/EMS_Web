using FluentMigrator;
using System;

namespace EMS.Migrations.DefaultDB
{
    [Migration(20190101130000)]
    public class DefaultDB_20190101_130000_EMS : AutoReversingMigration
    {
        public override void Up()
        {
            // EMS Migrations

            #region Zoning

            Create.Table("ZoningGroup")
                .WithColumn("ZoningGroupID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("City")
                .WithColumn("CityID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Building")
                .WithColumn("BuildingID").AsInt32().Identity().PrimaryKey()
                .WithColumn("CityID").AsInt32().Nullable().ForeignKey("FK_Building_City", "dbo", "City", "CityID")
                .WithColumn("Name").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(200).Nullable()
                .WithColumn("Address").AsString(1000).Nullable()
                .WithColumn("StreetAddress").AsString(200).Nullable()
                .WithColumn("Description").AsString(200).Nullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Floor")
                .WithColumn("FloorID").AsInt32().Identity().PrimaryKey()
                .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_Floor_Building", "dbo", "Building", "BuildingID")
                .WithColumn("Name").AsString(200).Nullable()
                .WithColumn("FloorNumber").AsInt32().Nullable()
                .WithColumn("Description").AsString(200).Nullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Section")
               .WithColumn("SectionID").AsInt32().Identity().PrimaryKey()
               .WithColumn("FloorID").AsInt32().Nullable().ForeignKey("FK_Section_Floor", "dbo", "Floor", "FloorID")
               .WithColumn("Name").AsString(200).Nullable()
               .WithColumn("Description").AsString(200).Nullable()
               .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Apartment")
               .WithColumn("ApartmentID").AsInt32().Identity().PrimaryKey()
               .WithColumn("SectionID").AsInt32().Nullable().ForeignKey("FK_Apartment_Section", "dbo", "Section", "SectionID")
               .WithColumn("Name").AsString(200).Nullable()
               .WithColumn("Type").AsString(200).Nullable()
               .WithColumn("Address").AsString(1000).Nullable()
               .WithColumn("RoomNumber").AsString(200).Nullable()
               .WithColumn("Description").AsString(1000).Nullable()
               .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("CommonLocation")
                .WithColumn("CommonLocationID").AsInt32().Identity().PrimaryKey()
                .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_CommonLocation_Building", "dbo", "Building", "BuildingID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            #endregion

            #region Consumers

            Create.Table("Consumer")
               .WithColumn("ConsumerID").AsInt32().Identity().PrimaryKey()
               .WithColumn("FirstName").AsString(200).NotNullable()
               .WithColumn("LastName").AsString(200).NotNullable()
               .WithColumn("Gender").AsString(200).NotNullable()
               .WithColumn("Address").AsString(1000).Nullable()
               .WithColumn("Phone").AsString(200).Nullable()
               .WithColumn("OtherInformation").AsString(1000).Nullable()
               .WithColumn("Mobile").AsString(200).Nullable()
               .WithColumn("Email").AsString().Nullable()
               .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            #endregion

            #region Advertisment

            //Create.Table("Advertisement")
            //    .WithColumn("AdvertisementID").AsInt32().Identity().PrimaryKey()
            //    .WithColumn("Source").AsString(1000).NotNullable()
            //    .WithColumn("RegistrationDate").AsDateTime().NotNullable()
            //    .WithColumn("RemainingSeconds").AsInt32().NotNullable()
            //    .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            //Create.Table("AdvertisementText")
            //    .WithColumn("AdvertisementTextID").AsInt32().Identity().PrimaryKey()
            //    .WithColumn("AdvertisementID").AsInt32().Nullable().ForeignKey("FK_AdvertisementText_Advertisement", "dbo", "Advertisement", "AdvertisementID")
            //    .WithColumn("RemainingSeconds").AsInt32().NotNullable()
            //    .WithColumn("Text").AsString(int.MaxValue).NotNullable()
            //    .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            //Create.Table("AdvertisementImage")
            //   .WithColumn("AdvertisementImageID").AsInt32().Identity().PrimaryKey()
            //   .WithColumn("AdvertisementID").AsInt32().Nullable().ForeignKey("FK_AdvertisementImage_Advertisement", "dbo", "Advertisement", "AdvertisementID")
            //   .WithColumn("RemainingSeconds").AsInt32().NotNullable()
            //   .WithColumn("Image").AsByte().NotNullable()
            //   .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            #endregion

            #region Parameter

            Create.Table("ParameterType")
               .WithColumn("ParameterTypeID").AsInt32().Identity().PrimaryKey()
               .WithColumn("Name").AsString(200).NotNullable()
               .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Parameter")
                .WithColumn("ParameterID").AsInt32().Identity().PrimaryKey()
                .WithColumn("ParameterTypeID").AsInt32().Nullable().ForeignKey("FK_Parameter_ParameterType", "dbo", "ParameterType", "ParameterTypeID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Address").AsString(200).Nullable()
                .WithColumn("Notes").AsString(int.MaxValue).Nullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("ParameterGroup")
                .WithColumn("ParameterGroupID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            #endregion

            #region Meters

            Create.Table("MeterType")
                .WithColumn("MeterTypeID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Meter")
                .WithColumn("MeterID").AsInt32().Identity().PrimaryKey()
                .WithColumn("MeterTypeID").AsInt32().Nullable().ForeignKey("FK_Meter_MeterType", "dbo", "MeterType", "MeterTypeID")
                .WithColumn("ConsumerID").AsInt32().Nullable().ForeignKey("FK_Meter_Consumer", "dbo", "Consumer", "ConsumerID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("SerialNumber").AsString(200).Nullable()
                .WithColumn("Make").AsString(200).Nullable()
                .WithColumn("PhysicalLocation").AsString(1000).Nullable()
                .WithColumn("AssignedLocation").AsString(1000).Nullable()
                .WithColumn("CommunicationMethod").AsString(200).Nullable()
                .WithColumn("SerialCommunicationSetting").AsString(200).Nullable()
                .WithColumn("RegistrationDate").AsDateTime().NotNullable()
                .WithColumn("Notes").AsString(int.MaxValue).Nullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Scheduling")
                .WithColumn("SchedulingID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Year").AsString(200).Nullable()
                .WithColumn("Month").AsString(200).Nullable()
                .WithColumn("Day").AsString(200).Nullable()
                .WithColumn("Time").AsString(200).Nullable()
                .WithColumn("FullDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("MeterDetail")
                .WithColumn("MeterDetailID").AsInt32().Identity().PrimaryKey()
                .WithColumn("ParameterGroupID").AsInt32().Nullable().ForeignKey("FK_MeterDetail_ParameterGroup", "dbo", "ParameterGroup", "ParameterGroupID")
                .WithColumn("ParameterID").AsInt32().Nullable().ForeignKey("FK_MeterDetail_Parameter", "dbo", "Parameter", "ParameterID")
                .WithColumn("SchedulingID").AsInt32().Nullable().ForeignKey("FK_MeterDetail_Scheduling", "dbo", "Scheduling", "SchedulingID")
                .WithColumn("ApartmentID").AsInt32().Nullable().ForeignKey("FK_MeterDetail_Apartment", "dbo", "Apartment", "ApartmentID")
                .WithColumn("CommonLocationID").AsInt32().Nullable().ForeignKey("FK_MeterDetail_CommonLocation", "dbo", "CommonLocation", "CommonLocationID")
                .WithColumn("Value").AsString(200).Nullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            #endregion

            #region EMSDevices

            Create.Table("EMSParameter")
               .WithColumn("EMSParameterID").AsInt32().Identity().PrimaryKey()
               .WithColumn("ParameterTypeID").AsInt32().Nullable().ForeignKey("FK_EMSParameter_ParameterType", "dbo", "ParameterType", "ParameterTypeID")
               .WithColumn("Name").AsString(200).NotNullable()
               .WithColumn("Value").AsString(200).Nullable()
               .WithColumn("Address").AsString(200).Nullable()
               .WithColumn("Notes").AsString(int.MaxValue).Nullable()
               .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("EMSSetting")
               .WithColumn("EMSSettingID").AsInt32().Identity().PrimaryKey()
               .WithColumn("ParameterTypeID").AsInt32().Nullable().ForeignKey("FK_EMSSetting_ParameterType", "dbo", "ParameterType", "ParameterTypeID")
               .WithColumn("Name").AsString(200).NotNullable()
               .WithColumn("Value").AsString(200).Nullable()
               .WithColumn("Address").AsString(200).Nullable()
               .WithColumn("Notes").AsString(int.MaxValue).Nullable()
               .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("EMSDevice")
                .WithColumn("EMSDeviceID").AsInt32().Identity().PrimaryKey()
                .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_EMSDevice_Building", "dbo", "Building", "BuildingID")
                .WithColumn("EMSParameterID").AsInt32().Nullable().ForeignKey("FK_EMSDevice_EMSParameter", "dbo", "EMSParameter", "EMSParameterID")
                .WithColumn("EMSSettingID").AsInt32().Nullable().ForeignKey("FK_EMSDevice_EMSSetting", "dbo", "EMSSetting", "EMSSettingID")
                .WithColumn("ConsumerID").AsInt32().Nullable().ForeignKey("FK_EMSDevice_Consumer", "dbo", "Consumer", "ConsumerID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("SerialNumber").AsString(200).Nullable()
                .WithColumn("Make").AsString(200).Nullable()
                .WithColumn("PhysicalLocation").AsString(1000).Nullable()
                .WithColumn("AssignedLocation").AsString(1000).Nullable()
                .WithColumn("CommunicationMethod").AsString(200).Nullable()
                .WithColumn("SerialCommunicationSetting").AsString(200).Nullable()
                .WithColumn("RegistrationDate").AsDateTime().NotNullable()
                .WithColumn("Notes").AsString(int.MaxValue).Nullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            #endregion

            #region Misc

            Create.Table("Feedback")
               .WithColumn("FeedbackID").AsInt32().Identity().PrimaryKey()
               .WithColumn("Type").AsString(200).NotNullable()
               .WithColumn("Text").AsString(int.MaxValue).NotNullable()
               .WithColumn("screenshot").AsByte().Nullable()
               .WithColumn("Rating").AsString(200).Nullable()
               .WithColumn("Date").AsDateTime().NotNullable()
               .WithColumn("IsSent").AsBoolean().Nullable()
               .WithColumn("Reply").AsString(int.MaxValue).Nullable()
               .WithColumn("Email").AsString(200).Nullable()
               .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Log")
                .WithColumn("LogID").AsInt32().Identity().PrimaryKey()
                .WithColumn("EventName").AsString(200).NotNullable()
                .WithColumn("Time").AsDateTime().NotNullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Memo")
                .WithColumn("MemoID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Text").AsString(int.MaxValue).NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Setting")
                .WithColumn("SettingID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Details").AsString(int.MaxValue).NotNullable()
                .WithColumn("Value").AsString(1000).NotNullable()
                .WithColumn("Type").AsString(200).NotNullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Template")
                .WithColumn("TemplateID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Data").AsByte().NotNullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            #endregion

            #region Auditing
            //Create.Table("ActionType")
            //    .WithColumn("ActionTypeID").AsInt32().Identity().PrimaryKey()
            //    .WithColumn("Name").AsString(200).NotNullable();

            //Create.Table("UserType")
            //    .WithColumn("UserTypeID").AsInt32().Identity().PrimaryKey()
            //    .WithColumn("Name").AsString(200).NotNullable()
            //    .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            //Create.Table("UserAction")
            //    .WithColumn("UserActionID").AsInt32().Identity().PrimaryKey()
            //    .WithColumn("ActionTypeID").AsInt32().Nullable().ForeignKey("FK_UserAction_ActionType", "dbo", "ActionType", "ActionTypeID")
            //    .WithColumn("AdvertisementTextID").AsInt32().Nullable().ForeignKey("FK_UserAction_AdvertisementText", "dbo", "AdvertisementText", "ActionTypeID")
            //    .WithColumn("AdvertisementID").AsInt32().Nullable().ForeignKey("FK_UserAction_Advertisement", "dbo", "Advertisement", "AdvertisementID")
            //    .WithColumn("AdvertisementImageID").AsInt32().Nullable().ForeignKey("FK_UserAction_AdvertisementImage", "dbo", "AdvertisementImage", "AdvertisementImageID")
            //    .WithColumn("CommonLocationID").AsInt32().Nullable().ForeignKey("FK_UserAction_CommonLocation", "dbo", "CommonLocation", "CommonLocationID")
            //    .WithColumn("EMSSettingID").AsInt32().Nullable().ForeignKey("FK_UserAction_EMSSetting", "dbo", "EMSSetting", "EMSSettingID")
            //    .WithColumn("ParameterGroupID").AsInt32().Nullable().ForeignKey("FK_UserAction_ParameterGroup", "dbo", "ParameterGroup", "ParameterGroupID")
            //    .WithColumn("MeterParameterID").AsInt32().Nullable().ForeignKey("FK_UserAction_MeterParameter", "dbo", "MeterParameter", "MeterParameterID")
            //    .WithColumn("ParameterID").AsInt32().Nullable().ForeignKey("FK_UserAction_Parameter", "dbo", "Parameter", "ParameterID")
            //    .WithColumn("ParameterTypeID").AsInt32().Nullable().ForeignKey("FK_UserAction_ParameterType", "dbo", "ParameterType", "ParameterTypeID")
            //    .WithColumn("EMSParameterID").AsInt32().Nullable().ForeignKey("FK_UserAction_EMSParameter", "dbo", "EMSParameter", "EMSParameterID")
            //    .WithColumn("EMSDeviceID").AsInt32().Nullable().ForeignKey("FK_UserAction_EMSDevice", "dbo", "EMSDevice", "EMSDeviceID")
            //    .WithColumn("ConsumerID").AsInt32().Nullable().ForeignKey("FK_UserAction_Consumer", "dbo", "Consumer", "ConsumerID")
            //    .WithColumn("FeedbackID").AsInt32().Nullable().ForeignKey("FK_UserAction_Feedback", "dbo", "Feedback", "FeedbackID")
            //    .WithColumn("LogID").AsInt32().Nullable().ForeignKey("FK_UserAction_Log", "dbo", "Logs", "LogID")
            //    .WithColumn("MemoID").AsInt32().Nullable().ForeignKey("FK_UserAction_Memo", "dbo", "Memo", "MemoID")
            //    .WithColumn("MeterTypeID").AsInt32().Nullable().ForeignKey("FK_UserAction_MeterType", "dbo", "MeterType", "MeterTypeID")
            //    .WithColumn("SettingID").AsInt32().Nullable().ForeignKey("FK_UserAction_Setting", "dbo", "Setting", "SettingID")
            //    .WithColumn("TemplateID").AsInt32().Nullable().ForeignKey("FK_UserAction_Template", "dbo", "Template", "TemplateID")
            //    .WithColumn("ZoningGroupID").AsInt32().Nullable().ForeignKey("FK_UserAction_ZoningGroup", "dbo", "ZoningGroup", "ZoningGroupID")
            //    .WithColumn("CityID").AsInt32().Nullable().ForeignKey("FK_UserAction_City", "dbo", "City", "CityID")
            //    .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_UserAction_Building", "dbo", "Building", "BuildingID")
            //    .WithColumn("FloorID").AsInt32().Nullable().ForeignKey("FK_UserAction_Floor", "dbo", "Floor", "FloorID")
            //    .WithColumn("SectionID").AsInt32().Nullable().ForeignKey("FK_UserAction_Section", "dbo", "Section", "SectionID")
            //    .WithColumn("ApartmentID").AsInt32().Nullable().ForeignKey("FK_UserAction_Apartment", "dbo", "Apartment", "ApartmentID")
            //    .WithColumn("MeterID").AsInt32().Nullable().ForeignKey("FK_UserAction_Meter", "dbo", "Meter", "MeterID")
            //    .WithColumn("UserTypeID").AsInt32().Nullable().ForeignKey("FK_UserAction_UserType", "dbo", "UserType", "UserTypeID")
            //    .WithColumn("UserID").AsInt32().Nullable().ForeignKey("FK_UserAction_ActionType", "dbo", "User", "UserID")
            //    .WithColumn("Date").AsDateTime().NotNullable()
            //    .WithColumn("Details").AsString(int.MaxValue).Nullable();

            #endregion

        }
    }
}