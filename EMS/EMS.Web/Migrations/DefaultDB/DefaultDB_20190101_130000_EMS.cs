using FluentMigrator;

namespace EMS.Migrations.DefaultDB
{
    [Migration(20190101130000)]
    public class DefaultDB_20190101_130000_EMS : AutoReversingMigration
    {
        public override void Up()
        {
            // EMS Migrations

            #region Zoning

            Create.Table("City")
                   .WithColumn("CityID").AsInt32().Identity().PrimaryKey()
                   .WithColumn("Name").AsString(200).NotNullable()
                   .WithColumn("Deleted").AsBoolean().Nullable();

            Create.Table("Building")
                    .WithColumn("BuildingID").AsInt32().Identity().PrimaryKey()
                    .WithColumn("ZipCode").AsString(200).Nullable()
                    .WithColumn("Address").AsString(200).Nullable()
                    .WithColumn("StreetAddress").AsString(200).Nullable()
                    .WithColumn("Description").AsString(200).Nullable()
                    .WithColumn("CityID").AsInt32().Nullable().ForeignKey("FK_Building_City", "dbo", "City", "CityID")
                    .WithColumn("Deleted").AsBoolean().Nullable();

            Create.Table("Floor")
                    .WithColumn("FloorID").AsInt32().Identity().PrimaryKey()
                    .WithColumn("FloorNumber").AsInt32().Nullable()
                    .WithColumn("Name").AsString(200).Nullable()
                    .WithColumn("Describtion").AsString(200).Nullable()
                    .WithColumn("BuildingID").AsInt32().Nullable().ForeignKey("FK_Floor_Building", "dbo", "Building", "BuildingID")
                    .WithColumn("Deleted").AsBoolean().Nullable();

            Create.Table("Section")
                    .WithColumn("SectionID").AsInt32().Identity().PrimaryKey()
                    .WithColumn("Name").AsString(200).Nullable()
                    .WithColumn("Describtion").AsString(200).Nullable()
                    .WithColumn("FloorID").AsInt32().Nullable().ForeignKey("FK_Section_Floor", "dbo", "Floor", "FloorID")
                    .WithColumn("Deleted").AsBoolean().Nullable();
            
            Create.Table("Apartment")
                    .WithColumn("ApartmentID").AsInt32().Identity().PrimaryKey()
                    .WithColumn("Name").AsString(200).Nullable()
                    .WithColumn("Type").AsString(200).Nullable()
                    .WithColumn("Address").AsString(200).Nullable()
                    .WithColumn("RoomNumber").AsString(200).Nullable()
                    .WithColumn("Describtion").AsString(200).Nullable()
                    .WithColumn("SectionID").AsInt32().Nullable().ForeignKey("FK_Apartment_Section", "dbo", "Section", "SectionID")
                    .WithColumn("Deleted").AsBoolean().Nullable();

            #endregion

            #region meters

            Create.Table("Meter")
                    .WithColumn("MeterID").AsInt32().Identity().PrimaryKey()
                    .WithColumn("ApartmentID").AsInt32().Nullable().ForeignKey("FK_Meter_Apartment", "dbo", "Apartment", "ApartmentID")
                    .WithColumn("ConsumerID").AsInt32().Nullable().ForeignKey("FK_Meter_Consumer", "dbo", "Users", "UserId")
                    .WithColumn("Deleted").AsBoolean().Nullable();

            Create.Table("MeterType")
                    .WithColumn("FloorID").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("BuildingID").AsString(200).NotNullable();

            Create.Table("MeterParameter")
                    .WithColumn("MeterParameterID").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("BuildingID").AsString(200).NotNullable();

            #endregion

            #region EMS_Devices


            #endregion
        }
    }
}