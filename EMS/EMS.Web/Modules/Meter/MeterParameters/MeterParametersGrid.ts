
namespace EMS.Meter {

    @Serenity.Decorators.registerClass()
    export class MeterParametersGrid extends Serenity.EntityGrid<MeterParametersRow, any> {
        protected getColumnsKey() { return 'Meter.MeterParameters'; }
        protected getDialogType() { return MeterParametersDialog; }
        protected getIdProperty() { return MeterParametersRow.idProperty; }
        protected getLocalTextPrefix() { return MeterParametersRow.localTextPrefix; }
        protected getService() { return MeterParametersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}