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
               .WithColumn("Descrition").AsString(1000).Nullable()
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

            #region parameters

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
                .WithColumn("CommonLocationID").AsInt32().Nullable().ForeignKey("FK_Meter_CommonLocation", "dbo", "CommonLocation", "CommonLocationID")
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
                .WithColumn("Value").AsString(200).Nullable()
                .WithColumn("Deleted").AsBoolean().NotNullable().WithDefaultValue(false);

            #endregion

            #region EMSDevices

            Create.Table("EMSParameter")
               .WithColumn("EMSParameterID").AsInt32().Identity().PrimaryKey()
               .WithColumn("ParameterTypeID").AsInt32().Nullable().ForeignKey("FK_EMSParameter_ParameterType", "dbo", "ParameterType", "ParameterTypeID")
               .WithColumn("Name").AsString(200).NotNullable()
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

            #region inserting data

            Insert.IntoTable("City")
                .Row(new
                {
                    Name = "Aleppo",
                    Description = "Aleppo is a city in Syria, serving as the capital of the Aleppo Governorate, the most populous Syrian governorate."
                })
                .Row(new
                {
                    Name = "Damascus",
                    Description = "Damascus is the capital of the Syrian Arab Republic; it is also the country's largest city, following the decline in population of Aleppo due to the battle for the city. It is colloquially known in Syria as aš-Šām and titled the \"City of Jasmine\"."
                })
                .Row(new
                {
                    Name = "Homs",
                    Description = "Homs, previously known as Emisa or Emesa, is a city in western Syria and the capital of the Homs Governorate. It is 501 metres above sea level and is located 162 kilometres north of Damascus. Located on the Orontes River, Homs is also the central link between the interior cities and the Mediterranean coast."
                })
                .Row(new
                {
                    Name = "Hama",
                    Description = "Hama is a city on the banks of the Orontes River in west-central Syria. It is located 213 km north of Damascus and 46 kilometres north of Homs. It is the provincial capital of the Hama Governorate. With a population of 854,000, Hama is the fourth-largest city in Syria after Damascus, Aleppo and Homs."
                })
                .Row(new
                {
                    Name = "Latakia",
                    Description = "Latakia is the principal port city of Syria, as well as the capital of the Latakia Governorate. Historically, it has also been known as Laodicea in Syria or Laodicea ad Mare. In addition to serving as a port, the city is a manufacturing center for surrounding agricultural towns and villages."
                })
                .Row(new
                {
                    Name = "Tartus‎",
                    Description = "Tartus is a city on the Mediterranean coast of Syria. It is the second largest port city in Syria, and the largest city in Tartus Governorate. The population is 115,769. In the summer it is a vacation spot for many Syrians. Many vacation compounds and resorts are located in the region."
                })
                .Row(new
                {
                    Name = "As-Suwayda",
                    Description = "Al-Suwayda Governorate is one of the fourteen governorates of Syria. It is the southernmost governorate and has an area of 5,550 km² and forms part of the historic Hawran region. Its capital and major city is al-Suwayda. A large majority of the population are Druze."
                })
                .Row(new
                {
                    Name = "Al Hasakah",
                    Description = "Al-Hasakah also known as Al-Hasakeh, Al-Hasaka or simply Hasakah, is the capital city of the Al-Hasakah Governorate and it is located in the far northeastern corner of Syria. With a population of 188,160 residents in 2004, Al-Hasakah is among the ten largest cities in Syria and the largest in the governorate."
                })
                .Row(new
                {
                    Name = "Ar Raqqah",
                    Description = "Raqqa, also called Raqa, Rakka and ar-Raqqah, is a city in Syria located on the northeast bank of the Euphrates River, about 160 kilometres east of Aleppo. It is located 40 kilometres east of the Tabqa Dam, Syria's largest dam."
                })
                .Row(new
                {
                    Name = "Deir ez-Zur",
                    Description = "Deir ez-Zor is the largest city in eastern Syria and the seventh largest in the country. Located 450 km to the northeast of the capital Damascus on the banks of the Euphrates River, Deir ez-Zor is the capital of the Deir ez-Zor Governorate. In the 2004 census, it had a population of 211,857 people."
                });



            Insert.IntoTable("Building")
                .Row(new
                {
                    Name = "The HQ building",
                    CityID = "1",
                    ZipCode = "+9846",
                    Address = "The Address",
                    StreetAddress = "Street address",
                    Description = "Description"
                });

            Insert.IntoTable("MeterType")
                .Row(new
                {
                    Name = "Electricity",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "Water",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "Gas",
                    Deleted = false
                });

            Insert.IntoTable("ParameterType")
                .Row(new
                {
                    Name = "UINT8",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "UINT16",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "Float",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "Long",
                    Deleted = false
                });

            Insert.IntoTable("Parameter")
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current average",
                    Value = "",
                    Address = "3913",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current, phase 1",
                    Value = "",
                    Address = "3929",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current, phase 2",
                    Value = "",
                    Address = "3943",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current, phase 3",
                    Value = "",
                    Address = "3957",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Line to line average voltage",
                    Value = "",
                    Address = "3909",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Line to neutral voltage",
                    Value = "",
                    Address = "3911",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 1 to phase 2",
                    Value = "",
                    Address = "3925",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 2 to phase 3",
                    Value = "",
                    Address = "3939",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 3 to phase 1",
                    Value = "",
                    Address = "3939",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 1 to neutral",
                    Value = "",
                    Address = "3927",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 2 to neutral",
                    Value = "",
                    Address = "3941",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 3 to neutral",
                    Value = "",
                    Address = "3955",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Active power, total",
                    Value = "",
                    Address = "3903",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Active power, phase 1",
                    Value = "",
                    Address = "3919",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Active power, phase 2",
                    Value = "",
                    Address = "3933",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Active power, phase 3",
                    Value = "",
                    Address = "3947",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reactive power, total",
                    Value = "",
                    Address = "3905",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reactive power, phase 1",
                    Value = "",
                    Address = "3921",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reactive power, phase 2",
                    Value = "",
                    Address = "3935",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reactive power, phase 3",
                    Value = "",
                    Address = "3949",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Apparent power, total",
                    Value = "",
                    Address = "3901",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Apparent power, phase 1",
                    Value = "",
                    Address = "3917",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Apparent power, phase 2",
                    Value = "",
                    Address = "3931",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Apparent power, phase 3",
                    Value = "",
                    Address = "3945",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Power factor average",
                    Value = "",
                    Address = "3907",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Power factor, phase 1",
                    Value = "",
                    Address = "3923",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Power factor, phase 2",
                    Value = "",
                    Address = "3937",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Power factor, phase 3",
                    Value = "",
                    Address = "3951",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Frequency, Hz",
                    Value = "",
                    Address = "3915",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage THD, phase 1",
                    Value = "",
                    Address = "3861",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage THD, phase 2",
                    Value = "",
                    Address = "3863",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage THD, phase 3",
                    Value = "",
                    Address = "3865",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current THD, phase 1",
                    Value = "",
                    Address = "3867",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current THD, phase 2",
                    Value = "",
                    Address = "3869",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current THD, phase 3",
                    Value = "",
                    Address = "3871",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Forward apparent energy",
                    Value = "",
                    Address = "3959",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Forward active energy",
                    Value = "",
                    Address = "3961",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Forward reactive inductive energy",
                    Value = "",
                    Address = "3963",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Forward reactive capacitive energy",
                    Value = "",
                    Address = "3965",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reverse apparent energy",
                    Value = "",
                    Address = "3967",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reverse active energy",
                    Value = "",
                    Address = "3969",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reverse reactive inductive energy",
                    Value = "",
                    Address = "3971",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reverse reactive capacitive energy",
                    Value = "",
                    Address = "3973",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "On hours",
                    Value = "",
                    Address = "3993",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Forward run seconds",
                    Value = "",
                    Address = "3995",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Reverse run seconds",
                    Value = "",
                    Address = "3997",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Number of power interruptions",
                    Value = "",
                    Address = "3999",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Present demand",
                    Value = "",
                    Address = "3975",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Rising demand",
                    Value = "",
                    Address = "3977",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Maximum demand",
                    Value = "",
                    Address = "3979",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Maximum demand occurrence time",
                    Value = "",
                    Address = "3981",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Average load percentage",
                    Value = "",
                    Address = "3881",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Percentage of phase 1 load",
                    Value = "",
                    Address = "3883",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Percentage of phase 2 load",
                    Value = "",
                    Address = "3885",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Percentage of phase 3 load",
                    Value = "",
                    Address = "3887",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Unbalanced % load",
                    Value = "",
                    Address = "3889",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Unbalanced % voltage",
                    Value = "",
                    Address = "3891",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Model, Options and version numbers",
                    Value = "",
                    Address = "0085",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "EMS hardware ID",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 2,
                    Name = "EMS hardware model",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS hardware version",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware version major",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware version minor",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware version patch",
                    Value = "",
                    Address = "3969",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (YY)",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (MM)",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (DD)",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (HH)",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (MM)",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (mm)",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (SS)",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 2,
                    Name = "Database version",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "Number of meters",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Polling frequency, Hz",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Upload frequency, Hz",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 2,
                    Name = "Number of stored samples",
                    Value = "",
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current primary",
                    Value = "",
                    Address = "0101",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current secondary",
                    Value = "",
                    Address = "0103",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage primary",
                    Value = "",
                    Address = "0105",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage secondary",
                    Value = "",
                    Address = "0107",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "System Configuration",
                    Value = "",
                    Address = "0109",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Phase Labeling",
                    Value = "",
                    Address = "0111",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "VA Function selection",
                    Value = "",
                    Address = "0113",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Demand Selection",
                    Value = "",
                    Address = "0115",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Demand parameter",
                    Value = "",
                    Address = "0117",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Demand period",
                    Value = "",
                    Address = "0119",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Baud rate",
                    Value = "",
                    Address = "0121",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Parity and stop bit",
                    Value = "",
                    Address = "0123",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Unit ID",
                    Value = "",
                    Address = "0125",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "% Full scale",
                    Value = "",
                    Address = "0127",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Overflow parameter selection",
                    Value = "",
                    Address = "0129",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Password",
                    Value = "",
                    Address = "0133",
                    Notes = "",
                    Deleted = false
                });

            Insert.IntoTable("ParameterGroup")
                .Row(new
                {
                    Name = "Default Prameters of Electricity Meter",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "Default Prameters of Water Meter",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "Default Prameters of Gas Meter",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "Schneider Prameters of Electricity Meter",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "Schneider Prameters of Water Meter",
                    Deleted = false
                })
                .Row(new
                {
                    Name = "Schneider Prameters of Gas Meter",
                    Deleted = false
                });


            #endregion
        }
    }
}