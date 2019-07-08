
namespace EMS.Meters {

    @Serenity.Decorators.registerClass()
    export class MeterGrid extends Serenity.EntityGrid<MeterRow, any> {
        protected getColumnsKey() { return 'Meters.Meter'; }
        protected getDialogType() { return MeterDialog; }
        protected getIdProperty() { return MeterRow.idProperty; }
        protected getLocalTextPrefix() { return MeterRow.localTextPrefix; }
        protected getService() { return MeterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}