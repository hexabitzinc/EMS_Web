
namespace EMS.EMSDevice {

    @Serenity.Decorators.registerClass()
    export class EmsSettingDialog extends Serenity.EntityDialog<EmsSettingRow, any> {
        protected getFormKey() { return EmsSettingForm.formKey; }
        protected getIdProperty() { return EmsSettingRow.idProperty; }
        protected getLocalTextPrefix() { return EmsSettingRow.localTextPrefix; }
        protected getNameProperty() { return EmsSettingRow.nameProperty; }
        protected getService() { return EmsSettingService.baseUrl; }

        protected form = new EmsSettingForm(this.idPrefix);

    }
}