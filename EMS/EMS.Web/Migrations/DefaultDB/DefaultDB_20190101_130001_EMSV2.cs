using FluentMigrator;

namespace EMS.Migrations.DefaultDB
{
    [Migration(20190101130001)]
    public class DefaultDB_20190101_130001_EMSV2 : AutoReversingMigration
    {
        public override void Up()
        {
            // EMS Migrations

            #region zoning

            Create.Table("Floor")
                    .WithColumn("FloorID").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("BuildingID").AsString(200).NotNullable();

            #endregion
        }
    }
}