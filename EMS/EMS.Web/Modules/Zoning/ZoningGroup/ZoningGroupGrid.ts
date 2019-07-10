
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class ZoningGroupGrid extends Serenity.EntityGrid<ZoningGroupRow, any> {
        protected getColumnsKey() { return 'Zoning.ZoningGroup'; }
        protected getDialogType() { return ZoningGroupDialog; }
        protected getIdProperty() { return ZoningGroupRow.idProperty; }
        protected getLocalTextPrefix() { return ZoningGroupRow.localTextPrefix; }
        protected getService() { return ZoningGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}