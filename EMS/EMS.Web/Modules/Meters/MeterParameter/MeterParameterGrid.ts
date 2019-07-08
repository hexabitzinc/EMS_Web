
namespace EMS.Meters {

    @Serenity.Decorators.registerClass()
    export class MeterParameterGrid extends Serenity.EntityGrid<MeterParameterRow, any> {
        protected getColumnsKey() { return 'Meters.MeterParameter'; }
        protected getDialogType() { return MeterParameterDialog; }
        protected getIdProperty() { return MeterParameterRow.idProperty; }
        protected getLocalTextPrefix() { return MeterParameterRow.localTextPrefix; }
        protected getService() { return MeterParameterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}