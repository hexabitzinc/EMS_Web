
namespace EMS.EMSDevice {

    @Serenity.Decorators.registerClass()
    export class EmsSettingGrid extends Serenity.EntityGrid<EmsSettingRow, any> {
        protected getColumnsKey() { return 'EMSDevice.EmsSetting'; }
        protected getDialogType() { return EmsSettingDialog; }
        protected getIdProperty() { return EmsSettingRow.idProperty; }
        protected getLocalTextPrefix() { return EmsSettingRow.localTextPrefix; }
        protected getService() { return EmsSettingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}