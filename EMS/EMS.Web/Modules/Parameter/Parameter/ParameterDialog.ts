
namespace EMS.Parameter {

    @Serenity.Decorators.registerClass()
    export class ParameterDialog extends Serenity.EntityDialog<ParameterRow, any> {
        protected getFormKey() { return ParameterForm.formKey; }
        protected getIdProperty() { return ParameterRow.idProperty; }
        protected getLocalTextPrefix() { return ParameterRow.localTextPrefix; }
        protected getNameProperty() { return ParameterRow.nameProperty; }
        protected getService() { return ParameterService.baseUrl; }

        protected form = new ParameterForm(this.idPrefix);

    }
}