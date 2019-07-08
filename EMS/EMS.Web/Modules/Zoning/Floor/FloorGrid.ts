
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class FloorGrid extends Serenity.EntityGrid<FloorRow, any> {
        protected getColumnsKey() { return 'Zoning.Floor'; }
        protected getDialogType() { return FloorDialog; }
        protected getIdProperty() { return FloorRow.idProperty; }
        protected getLocalTextPrefix() { return FloorRow.localTextPrefix; }
        protected getService() { return FloorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}