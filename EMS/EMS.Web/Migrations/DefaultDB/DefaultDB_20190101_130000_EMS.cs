using FluentMigrator;
using System;

namespace EMS.Migrations.DefaultDB
{
    [Migration(20190101130000)]
    public class DefaultDB_20190101_130000_EMS : AutoReversingMigration
    {
        public override void Up()
        {
            //// EMS Migrations

            //#region Zoning

            //Create.Table("City")
            //       .WithColumn("CityID").AsInt32().Identity().PrimaryKey()
            //       .WithColumn("Name").AsString(200).NotNullable()
            //       .WithColumn("Deleted").AsBoolean().Nullable();

            //Create.Table("Building")
            //        .WithColumn("BuildingID").AsInt32().Identity().PrimaryKey()
            //        .WithColumn("ZipCode").AsString(200).Nullable()
            //        .WithColumn("Address").AsString(200).Nullable()
            //        .WithColumn("StreetAddress").AsString(200).Nullable()
            //        .WithColumn("Description").AsString(200).Nullable()
            //        .WithColumn("CityID").AsInt32().Nullable().ForeignKey("FK_Building_City", "dbo", "City", "CityID")
            //        .WithColumn("Deleted").AsBoolean().Nullable();

            //Create.Table("Floor")
            //        .WithColumn("FloorID").AsInt32().Identity().PrimaryKey()
            //        .WithColumn("FloorNumber").AsInt32().Nullable()
            //        .WithColumn("Name").AsString(200).Nullable()
            //        .WithColumn("Describtion").AsString(200).Nullable()
            //        .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_Floor_Building", "dbo", "Building", "BuildingID")
            //        .WithColumn("Deleted").AsBoolean().Nullable();

            //Create.Table("Section")
            //        .WithColumn("SectionID").AsInt32().Identity().PrimaryKey()
            //        .WithColumn("Name").AsString(200).Nullable()
            //        .WithColumn("Describtion").AsString(200).Nullable()
            //        .WithColumn("FloorID").AsInt32().Nullable().ForeignKey("FK_Section_Floor", "dbo", "Floor", "FloorID")
            //        .WithColumn("Deleted").AsBoolean().Nullable();

            //Create.Table("Apartment")
            //        .WithColumn("ApartmentID").AsInt32().Identity().PrimaryKey()
            //        .WithColumn("Name").AsString(200).Nullable()
            //        .WithColumn("Type").AsString(200).Nullable()
            //        .WithColumn("Address").AsString(200).Nullable()
            //        .WithColumn("RoomNumber").AsString(200).Nullable()
            //        .WithColumn("Describtion").AsString(200).Nullable()
            //        .WithColumn("SectionID").AsInt32().Nullable().ForeignKey("FK_Apartment_Section", "dbo", "Section", "SectionID")
            //        .WithColumn("Deleted").AsBoolean().Nullable();

            //#endregion

            //#region meters

            //Create.Table("Meter")
            //        .WithColumn("MeterID").AsInt32().Identity().PrimaryKey()
            //        .WithColumn("ApartmentID").AsInt32().Nullable().ForeignKey("FK_Meter_Apartment", "dbo", "Apartment", "ApartmentID")
            //        .WithColumn("ConsumerID").AsInt32().Nullable().ForeignKey("FK_Meter_Consumer", "dbo", "Users", "UserId")
            //        .WithColumn("Deleted").AsBoolean().Nullable();

            //Create.Table("MeterType")
            //        .WithColumn("FloorID").AsInt32().Identity().PrimaryKey().NotNullable()
            //        .WithColumn("BuildingID").AsString(200).NotNullable();

            //Create.Table("MeterParameter")
            //        .WithColumn("MeterParameterID").AsInt32().Identity().PrimaryKey().NotNullable()
            //        .WithColumn("BuildingID").AsString(200).NotNullable();

            //#endregion

            //#region EMS_Devices


            //#endregion


            // EMS Migrations

            Create.Table("ActionTypes")
                .WithColumn("ActionTypeID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable();

            Create.Table("UserActions")
                .WithColumn("UserActionID").AsInt32().Identity().PrimaryKey()
                .WithColumn("ActionTypeID").AsInt32().Nullable().ForeignKey("FK_UserAction_ActionType", "dbo", "ActionTypes", "ActionTypeID")
                .WithColumn("AdvertisementTextID").AsInt32().Nullable().ForeignKey("FK_UserAction_AdvertisementText", "dbo", "AdvertisementTexts", "ActionTypeID")
                .WithColumn("AdvertisementID").AsInt32().Nullable().ForeignKey("FK_UserAction_Advertisement", "dbo", "Advertisements", "AdvertisementID")
                .WithColumn("AdvertisementImageID").AsInt32().Nullable().ForeignKey("FK_UserAction_AdvertisementImage", "dbo", "AdvertisementImages", "AdvertisementImageID")
                .WithColumn("CommonLocationID").AsInt32().Nullable().ForeignKey("FK_UserAction_CommonLocation", "dbo", "CommonLocations", "CommonLocationID")
                .WithColumn("EmsSettingID").AsInt32().Nullable().ForeignKey("FK_UserAction_EmsSetting", "dbo", "EmsSettings", "EmsSettingID")
                .WithColumn("ParameterGroupID").AsInt32().Nullable().ForeignKey("FK_UserAction_ParameterGroup", "dbo", "ParameterGroups", "ParameterGroupID")
                .WithColumn("MeterParameterID").AsInt32().Nullable().ForeignKey("FK_UserAction_MeterParameter", "dbo", "MeterParameters", "MeterParameterID")
                .WithColumn("ParameterID").AsInt32().Nullable().ForeignKey("FK_UserAction_Parameter", "dbo", "Parameters", "ParameterID")
                .WithColumn("ParameterTypeID").AsInt32().Nullable().ForeignKey("FK_UserAction_ParameterType", "dbo", "ParameterTypes", "ParameterTypeID")
                .WithColumn("EmsParameterID").AsInt32().Nullable().ForeignKey("FK_UserAction_EmsParameter", "dbo", "EmsParameters", "EmsParameterID")
                .WithColumn("EmsDeviceID").AsInt32().Nullable().ForeignKey("FK_UserAction_EmsDevice", "dbo", "EmsDevices", "EmsDeviceID")
                .WithColumn("ConsumerID").AsInt32().Nullable().ForeignKey("FK_UserAction_Consumer", "dbo", "Consumers", "ConsumerID")
                .WithColumn("FeedbackID").AsInt32().Nullable().ForeignKey("FK_UserAction_Feedback", "dbo", "Feedbacks", "FeedbackID")
                .WithColumn("LogID").AsInt32().Nullable().ForeignKey("FK_UserAction_Log", "dbo", "Logs", "LogID")
                .WithColumn("MemoID").AsInt32().Nullable().ForeignKey("FK_UserAction_Memo", "dbo", "Memos", "MemoID")
                .WithColumn("MeterTypeID").AsInt32().Nullable().ForeignKey("FK_UserAction_MeterType", "dbo", "MeterTypes", "MeterTypeID")
                .WithColumn("SettingID").AsInt32().Nullable().ForeignKey("FK_UserAction_Setting", "dbo", "Settings", "SettingID")
                .WithColumn("TemplateID").AsInt32().Nullable().ForeignKey("FK_UserAction_Template", "dbo", "Templates", "TemplateID")
                .WithColumn("ZoningGroupID").AsInt32().Nullable().ForeignKey("FK_UserAction_ZoningGroup", "dbo", "ZoningGroups", "ZoningGroupID")
                .WithColumn("CityID").AsInt32().Nullable().ForeignKey("FK_UserAction_City", "dbo", "Cities", "CityID")
                .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_UserAction_Building", "dbo", "Buildings", "BuildingID")
                .WithColumn("FloorID").AsInt32().Nullable().ForeignKey("FK_UserAction_Floor", "dbo", "Floors", "FloorID")
                .WithColumn("SectionID").AsInt32().Nullable().ForeignKey("FK_UserAction_Section", "dbo", "Sections", "SectionID")
                .WithColumn("ApartmentID").AsInt32().Nullable().ForeignKey("FK_UserAction_Apartment", "dbo", "Apartments", "ApartmentID")
                .WithColumn("MeterID").AsInt32().Nullable().ForeignKey("FK_UserAction_Meter", "dbo", "Meters", "MeterID")
                .WithColumn("UserTypeID").AsInt32().Nullable().ForeignKey("FK_UserAction_UserType", "dbo", "UserTypes", "UserTypeID")
                .WithColumn("UserID").AsInt32().Nullable().ForeignKey("FK_UserAction_ActionType", "dbo", "User", "ActionTypeID")
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Details").AsString(Int32.MaxValue).Nullable();

            Create.Table("UserTypes")
                .WithColumn("UserTypeID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Meters")
                .WithColumn("MeterID").AsInt32().Identity().PrimaryKey()
                .WithColumn("ApartmentID").AsInt32().Nullable().ForeignKey("FK_Meter_Apartment", "dbo", "Apartments", "ApartmentID")
                .WithColumn("CommonLocationID").AsInt32().Nullable().ForeignKey("FK_Meter_CommonLocation", "dbo", "CommonLocations", "CommonLocationID")
                .WithColumn("MeterTypeID").AsInt32().Nullable().ForeignKey("FK_Meter_MeterType", "dbo", "MeterTypes", "MeterTypeID")
                .WithColumn("ConsumerID").AsInt32().Nullable().ForeignKey("FK_Meter_Consumer", "dbo", "Consumers", "ConsumerID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("SerialNumber").AsString(200).Nullable()
                .WithColumn("Make").AsString(200).Nullable()
                .WithColumn("PhysicalLocation").AsString(1000).Nullable()
                .WithColumn("AssignedLocation").AsString(1000).Nullable()
                .WithColumn("CommunicationMethod").AsString(200).Nullable()
                .WithColumn("SerialCommunicationSetting").AsString(200).Nullable()
                .WithColumn("RegistrationDate").AsDateTime().NotNullable()
                .WithColumn("Notes").AsString(Int32.MaxValue).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Apartments")
                .WithColumn("ApartmentID").AsInt32().Identity().PrimaryKey()
                .WithColumn("SectionID").AsInt32().Nullable().ForeignKey("FK_Apartment_Section", "dbo", "Sections", "SectionID")
                .WithColumn("Name").AsString(200).Nullable()
                .WithColumn("Type").AsString(200).Nullable()
                .WithColumn("Address").AsString(1000).Nullable()
                .WithColumn("RoomNumber").AsString(200).Nullable()
                .WithColumn("Describtion").AsString(1000).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Sections")
                .WithColumn("SectionID").AsInt32().Identity().PrimaryKey()
                .WithColumn("FloorID").AsInt32().Nullable().ForeignKey("FK_Section_Floor", "dbo", "Floors", "FloorID")
                .WithColumn("Name").AsString(200).Nullable()
                .WithColumn("Describtion").AsString(200).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Floors")
                .WithColumn("FloorID").AsInt32().Identity().PrimaryKey()
                .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_Floor_Building", "dbo", "Buildings", "BuildingID")
                .WithColumn("Name").AsString(200).Nullable()
                .WithColumn("FloorNumber").AsInt32().Nullable()
                .WithColumn("Describtion").AsString(200).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Buildings")
                .WithColumn("BuildingID").AsInt32().Identity().PrimaryKey()
                .WithColumn("CityID").AsInt32().Nullable().ForeignKey("FK_Building_City", "dbo", "Cities", "CityID")
                .WithColumn("Name").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(200).Nullable()
                .WithColumn("Address").AsString(1000).Nullable()
                .WithColumn("StreetAddress").AsString(200).Nullable()
                .WithColumn("Description").AsString(200).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Cities")
                .WithColumn("CityID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("AdvertisementImages")
                .WithColumn("AdvertisementImageID").AsInt32().Identity().PrimaryKey()
                .WithColumn("AdvertisementID").AsInt32().Nullable().ForeignKey("FK_AdvertisementImage_Advertisement", "dbo", "Advertisements", "AdvertisementID")
                .WithColumn("RemainingSeconds").AsInt32().NotNullable()
                .WithColumn("Image").AsByte().NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Advertisements")
                .WithColumn("AdvertisementID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Source").AsString(1000).NotNullable()
                .WithColumn("RegistrationDate").AsDateTime().NotNullable()
                .WithColumn("RemainingSeconds").AsInt32().NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("AdvertisementTexts")
                .WithColumn("AdvertisementTextID").AsInt32().Identity().PrimaryKey()
                .WithColumn("AdvertisementID").AsInt32().Nullable().ForeignKey("FK_AdvertisementText_Advertisement", "dbo", "Advertisements", "AdvertisementID")
                .WithColumn("RemainingSeconds").AsInt32().NotNullable()
                .WithColumn("Text").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("CommonLocations")
                .WithColumn("CommonLocationID").AsInt32().Identity().PrimaryKey()
                .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_CommonLocation_Building", "dbo", "Buildings", "BuildingID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Consumers")
                .WithColumn("ConsumerID").AsInt32().Identity().PrimaryKey()
                .WithColumn("FirstName").AsString(200).NotNullable()
                .WithColumn("LastName").AsString(200).NotNullable()
                .WithColumn("Gender").AsString(200).NotNullable()
                .WithColumn("Address").AsString(1000).Nullable()
                .WithColumn("Phone").AsString(200).Nullable()
                .WithColumn("OtherInformation").AsString(1000).Nullable()
                .WithColumn("Mobile").AsString(200).Nullable()
                .WithColumn("Email").AsString().Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("EmsDevices")
                .WithColumn("EmsDeviceID").AsInt32().Identity().PrimaryKey()
                .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_EmsDevice_Building", "dbo", "Buildings", "BuildingID")
                .WithColumn("EmsParameterID").AsInt32().Nullable().ForeignKey("FK_EmsDevice_EmsParameter", "dbo", "EmsParameters", "EmsParameterID")
                .WithColumn("EmsSettingID").AsInt32().Nullable().ForeignKey("FK_EmsDevice_EmsSetting", "dbo", "EmsSettings", "EmsSettingID")
                .WithColumn("ConsumerID").AsInt32().Nullable().ForeignKey("FK_EmsDevice_Consumer", "dbo", "Consumers", "ConsumerID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("SerialNumber").AsString(200).Nullable()
                .WithColumn("Make").AsString(200).Nullable()
                .WithColumn("PhysicalLocation").AsString(1000).Nullable()
                .WithColumn("AssignedLocation").AsString(1000).Nullable()
                .WithColumn("CommunicationMethod").AsString(200).Nullable()
                .WithColumn("SerialCommunicationSetting").AsString(200).Nullable()
                .WithColumn("RegistrationDate").AsDateTime().NotNullable()
                .WithColumn("Notes").AsString(Int32.MaxValue).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("EmsParameters")
                .WithColumn("EmsParameterID").AsInt32().Identity().PrimaryKey()
                .WithColumn("ParameterTypeID").AsInt32().Nullable().ForeignKey("FK_EmsParameter_ParameterType", "dbo", "ParameterTypes", "ParameterTypeID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Value").AsString(200).Nullable()
                .WithColumn("Address").AsString(200).Nullable()
                .WithColumn("Notes").AsString(Int32.MaxValue).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("ParameterType")
                .WithColumn("ParameterTypeID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("EmsSettings")
                .WithColumn("EmsSettingID").AsInt32().Identity().PrimaryKey()
                .WithColumn("ParameterTypeID").AsInt32().Nullable().ForeignKey("FK_EmsSetting_ParameterType", "dbo", "ParameterTypes", "ParameterTypeID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Value").AsString(200).Nullable()
                .WithColumn("Address").AsString(200).Nullable()
                .WithColumn("Notes").AsString(Int32.MaxValue).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Parameters")
                .WithColumn("ParameterTypeID").AsInt32().Nullable().ForeignKey("FK_Parameter_ParameterType", "dbo", "ParameterTypes", "ParameterTypeID")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Value").AsString(200).Nullable()
                .WithColumn("Address").AsString(200).Nullable()
                .WithColumn("Notes").AsString(Int32.MaxValue).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("MeterParameters")
                .WithColumn("MeterParameterID").AsInt32().Identity().PrimaryKey()
                .WithColumn("ParameterGroupID").AsInt32().Nullable().ForeignKey("FK_MeterParameter_ParameterGroup", "dbo", "ParameterGroups", "ParameterGroupID")
                .WithColumn("ParameterID").AsInt32().Nullable().ForeignKey("FK_MeterParameter_Parameter", "dbo", "Parameters", "ParameterID")
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("ParameterGroups")
                .WithColumn("ParameterGroupID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Feedbacks")
                .WithColumn("FeedbackID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Type").AsString(200).NotNullable()
                .WithColumn("Text").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("screenshot").AsByte().Nullable()
                .WithColumn("Rating").AsString(200).Nullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("IsSent").AsBoolean().Nullable()
                .WithColumn("Reply").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Logs")
                .WithColumn("LogID").AsInt32().Identity().PrimaryKey()
                .WithColumn("EventName").AsString(200).NotNullable()
                .WithColumn("Time").AsDateTime().NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Memos")
                .WithColumn("MemoID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Text").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("MeterTypes")
                .WithColumn("MeterTypeID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Settings")
                .WithColumn("SettingID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Details").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("Value").AsString(1000).NotNullable()
                .WithColumn("Type").AsString(200).NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Templates")
                .WithColumn("TemplateID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Data").AsByte().NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("ZoningGroups")
                .WithColumn("ZoningGroupID").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("IsDeleted").AsBoolean().NotNullable().WithDefaultValue(false);
        }
    }
}