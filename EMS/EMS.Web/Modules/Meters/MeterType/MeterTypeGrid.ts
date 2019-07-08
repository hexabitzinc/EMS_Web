
namespace EMS.Meters {

    @Serenity.Decorators.registerClass()
    export class MeterTypeGrid extends Serenity.EntityGrid<MeterTypeRow, any> {
        protected getColumnsKey() { return 'Meters.MeterType'; }
        protected getDialogType() { return MeterTypeDialog; }
        protected getIdProperty() { return MeterTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MeterTypeRow.localTextPrefix; }
        protected getService() { return MeterTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}