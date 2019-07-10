
namespace EMS.Parameter {

    @Serenity.Decorators.registerClass()
    export class ParameterTypeDialog extends Serenity.EntityDialog<ParameterTypeRow, any> {
        protected getFormKey() { return ParameterTypeForm.formKey; }
        protected getIdProperty() { return ParameterTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ParameterTypeRow.localTextPrefix; }
        protected getNameProperty() { return ParameterTypeRow.nameProperty; }
        protected getService() { return ParameterTypeService.baseUrl; }

        protected form = new ParameterTypeForm(this.idPrefix);

    }
}