
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class BuildingGrid extends Serenity.EntityGrid<BuildingRow, any> {
        protected getColumnsKey() { return 'Zoning.Building'; }
        protected getDialogType() { return BuildingDialog; }
        protected getIdProperty() { return BuildingRow.idProperty; }
        protected getLocalTextPrefix() { return BuildingRow.localTextPrefix; }
        protected getService() { return BuildingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}