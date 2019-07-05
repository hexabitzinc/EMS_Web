using FluentMigrator;

namespace EMS.Migrations.DefaultDB
{
    [Migration(20190101130000)]
    public class DefaultDB_20190101_130000_EMS : AutoReversingMigration
    {
        public override void Up()
        {
            // EMS Migrations

            #region zoning

            Create.Table("City")
                   .WithColumn("CityID").AsInt32().Identity().PrimaryKey().NotNullable()
                   .WithColumn("Name").AsString(200).NotNullable();

            Create.Table("Building")
                    .WithColumn("BuildingID").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("Name").AsString(200).NotNullable();

            #endregion
        }
    }
}