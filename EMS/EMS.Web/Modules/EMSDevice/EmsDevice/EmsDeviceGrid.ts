
namespace EMS.EMSDevice {

    @Serenity.Decorators.registerClass()
    export class EmsDeviceGrid extends Serenity.EntityGrid<EmsDeviceRow, any> {
        protected getColumnsKey() { return 'EMSDevice.EmsDevice'; }
        protected getDialogType() { return EmsDeviceDialog; }
        protected getIdProperty() { return EmsDeviceRow.idProperty; }
        protected getLocalTextPrefix() { return EmsDeviceRow.localTextPrefix; }
        protected getService() { return EmsDeviceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}