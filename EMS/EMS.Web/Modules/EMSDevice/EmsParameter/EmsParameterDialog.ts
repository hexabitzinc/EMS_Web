
namespace EMS.EMSDevice {

    @Serenity.Decorators.registerClass()
    export class EmsParameterDialog extends Serenity.EntityDialog<EmsParameterRow, any> {
        protected getFormKey() { return EmsParameterForm.formKey; }
        protected getIdProperty() { return EmsParameterRow.idProperty; }
        protected getLocalTextPrefix() { return EmsParameterRow.localTextPrefix; }
        protected getNameProperty() { return EmsParameterRow.nameProperty; }
        protected getService() { return EmsParameterService.baseUrl; }

        protected form = new EmsParameterForm(this.idPrefix);

    }
}