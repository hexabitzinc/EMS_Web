
namespace EMS.Meter {

    @Serenity.Decorators.registerClass()
    export class SchedulingGrid extends Serenity.EntityGrid<SchedulingRow, any> {
        protected getColumnsKey() { return 'Meter.Scheduling'; }
        protected getDialogType() { return SchedulingDialog; }
        protected getIdProperty() { return SchedulingRow.idProperty; }
        protected getLocalTextPrefix() { return SchedulingRow.localTextPrefix; }
        protected getService() { return SchedulingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}