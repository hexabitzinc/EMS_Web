
namespace EMS.EMSDevice {

    @Serenity.Decorators.registerClass()
    export class EmsDeviceDialog extends Serenity.EntityDialog<EmsDeviceRow, any> {
        protected getFormKey() { return EmsDeviceForm.formKey; }
        protected getIdProperty() { return EmsDeviceRow.idProperty; }
        protected getLocalTextPrefix() { return EmsDeviceRow.localTextPrefix; }
        protected getNameProperty() { return EmsDeviceRow.nameProperty; }
        protected getService() { return EmsDeviceService.baseUrl; }

        protected form = new EmsDeviceForm(this.idPrefix);

    }
}