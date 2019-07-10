
namespace EMS.EMSDevice {

    @Serenity.Decorators.registerClass()
    export class EmsParameterGrid extends Serenity.EntityGrid<EmsParameterRow, any> {
        protected getColumnsKey() { return 'EMSDevice.EmsParameter'; }
        protected getDialogType() { return EmsParameterDialog; }
        protected getIdProperty() { return EmsParameterRow.idProperty; }
        protected getLocalTextPrefix() { return EmsParameterRow.localTextPrefix; }
        protected getService() { return EmsParameterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}