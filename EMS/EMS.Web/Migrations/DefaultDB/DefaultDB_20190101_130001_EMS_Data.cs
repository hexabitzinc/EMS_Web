using FluentMigrator;
using System;

namespace EMS.Migrations.DefaultDB
{
    [Migration(20190101130001)]
    public class DefaultDB_20190101_130001_EMS_Data : AutoReversingMigration     // this file for inserting data
    {
        public override void Up()
        {


            #region Zooning Data

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

            Insert.IntoTable("City")
                .Row(new
                {
                    Name = "City 1",
                    Description = "Description"
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

            Insert.IntoTable("Floor")
                .Row(new
                {
                    Name = "Floor 1",
                    BuildingID = "1"
                });

            Insert.IntoTable("Section")
                .Row(new
                {
                    Name = "Section",
                    FloorID = "1",
                    Description = "Description"
                });

            Insert.IntoTable("Apartment")
                .Row(new
                {
                    Name = "Apartment ID 1",
                    SectionID = "1"
                });

            #endregion

            #region Meter Data

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
                    
                    Address = "3913",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current, phase 1",
                    
                    Address = "3929",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current, phase 2",
                    
                    Address = "3943",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current, phase 3",
                    
                    Address = "3957",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Line to line average voltage",
                    
                    Address = "3909",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Line to neutral voltage",
                    
                    Address = "3911",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 1 to phase 2",
                    
                    Address = "3925",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 2 to phase 3",
                    
                    Address = "3939",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 3 to phase 1",
                    
                    Address = "3939",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 1 to neutral",
                    
                    Address = "3927",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 2 to neutral",
                    
                    Address = "3941",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage phase 3 to neutral",
                    
                    Address = "3955",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Active power, total",
                    
                    Address = "3903",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Active power, phase 1",
                    
                    Address = "3919",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Active power, phase 2",
                    
                    Address = "3933",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Active power, phase 3",
                    
                    Address = "3947",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reactive power, total",
                    
                    Address = "3905",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reactive power, phase 1",
                    
                    Address = "3921",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reactive power, phase 2",
                    
                    Address = "3935",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reactive power, phase 3",
                    
                    Address = "3949",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Apparent power, total",
                    
                    Address = "3901",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Apparent power, phase 1",
                    
                    Address = "3917",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Apparent power, phase 2",
                    
                    Address = "3931",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Apparent power, phase 3",
                    
                    Address = "3945",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Power factor average",
                    
                    Address = "3907",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Power factor, phase 1",
                    
                    Address = "3923",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Power factor, phase 2",
                    
                    Address = "3937",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Power factor, phase 3",
                    
                    Address = "3951",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Frequency, Hz",
                    
                    Address = "3915",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage THD, phase 1",
                    
                    Address = "3861",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage THD, phase 2",
                    
                    Address = "3863",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage THD, phase 3",
                    
                    Address = "3865",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current THD, phase 1",
                    
                    Address = "3867",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current THD, phase 2",
                    
                    Address = "3869",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current THD, phase 3",
                    
                    Address = "3871",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Forward apparent energy",
                    
                    Address = "3959",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Forward active energy",
                    
                    Address = "3961",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Forward reactive inductive energy",
                    
                    Address = "3963",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Forward reactive capacitive energy",
                    
                    Address = "3965",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reverse apparent energy",
                    
                    Address = "3967",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reverse active energy",
                    
                    Address = "3969",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reverse reactive inductive energy",
                    
                    Address = "3971",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Reverse reactive capacitive energy",
                    
                    Address = "3973",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "On hours",
                    
                    Address = "3993",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Forward run seconds",
                    
                    Address = "3995",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Reverse run seconds",
                    
                    Address = "3997",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Number of power interruptions",
                    
                    Address = "3999",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Present demand",
                    
                    Address = "3975",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Rising demand",
                    
                    Address = "3977",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Maximum demand",
                    
                    Address = "3979",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Maximum demand occurrence time",
                    
                    Address = "3981",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Average load percentage",
                    
                    Address = "3881",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Percentage of phase 1 load",
                    
                    Address = "3883",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Percentage of phase 2 load",
                    
                    Address = "3885",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Percentage of phase 3 load",
                    
                    Address = "3887",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Unbalanced % load",
                    
                    Address = "3889",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Unbalanced % voltage",
                    
                    Address = "3891",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "Model, Options and version numbers",
                    
                    Address = "0085",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 4,
                    Name = "EMS hardware ID",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 2,
                    Name = "EMS hardware model",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS hardware version",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware version major",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware version minor",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware version patch",
                    
                    Address = "3969",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (YY)",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (MM)",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (DD)",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (HH)",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (MM)",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (mm)",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "EMS firmware date (SS)",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 2,
                    Name = "Database version",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 1,
                    Name = "Number of meters",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Polling frequency, Hz",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Upload frequency, Hz",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 2,
                    Name = "Number of stored samples",
                    
                    Address = "",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current primary",
                    
                    Address = "0101",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Current secondary",
                    
                    Address = "0103",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage primary",
                    
                    Address = "0105",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Voltage secondary",
                    
                    Address = "0107",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "System Configuration",
                    
                    Address = "0109",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Phase Labeling",
                    
                    Address = "0111",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "VA Function selection",
                    
                    Address = "0113",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Demand Selection",
                    
                    Address = "0115",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Demand parameter",
                    
                    Address = "0117",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Demand period",
                    
                    Address = "0119",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Baud rate",
                    
                    Address = "0121",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Parity and stop bit",
                    
                    Address = "0123",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Unit ID",
                    
                    Address = "0125",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "% Full scale",
                    
                    Address = "0127",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Overflow parameter selection",
                    
                    Address = "0129",
                    Notes = "",
                    Deleted = false
                })
                .Row(new
                {
                    ParameterTypeID = 3,
                    Name = "Password",
                    
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

            Insert.IntoTable("Scheduling")
                .Row(new
                {
                    Year = "2019",
                    Month = "7",
                    Day = "1",
                    FullDate = DateTime.Now,
                })
                .Row(new
                {
                    Year = "2019",
                    Month = "7",
                    Day = "2",
                    FullDate = DateTime.Now,
                })
                .Row(new
                {
                    Year = "2019",
                    Month = "7",
                    Day = "3",
                    FullDate = DateTime.Now,
                })
                .Row(new
                {
                    Year = "2019",
                    Month = "7",
                    Day = "4",
                    FullDate = DateTime.Now,
                })
                .Row(new
                {
                    Year = "2019",
                    Month = "7",
                    Day = "5",
                    FullDate = DateTime.Now,
                });

            #endregion

            #region Parameter Values

            Insert.IntoTable("MeterDetail")
                .Row(new
                {
                    ParameterGroupID = 1,
                    ParameterID = 1,
                    SchedulingID = 1,
                    ApartmentID = 1,
                    Value = "55",
                    Deleted = false
                });

            #endregion
        }
    }
}