
namespace EMS.Meter {

    @Serenity.Decorators.registerClass()
    export class MeterDetailGrid extends Serenity.EntityGrid<MeterDetailRow, any> {
        protected getColumnsKey() { return 'Meter.MeterDetail'; }
        protected getDialogType() { return MeterDetailDialog; }
        protected getIdProperty() { return MeterDetailRow.idProperty; }
        protected getLocalTextPrefix() { return MeterDetailRow.localTextPrefix; }
        protected getService() { return MeterDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}