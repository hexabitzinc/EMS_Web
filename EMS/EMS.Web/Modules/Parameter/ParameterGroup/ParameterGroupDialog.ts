
namespace EMS.Parameter {

    @Serenity.Decorators.registerClass()
    export class ParameterGroupDialog extends Serenity.EntityDialog<ParameterGroupRow, any> {
        protected getFormKey() { return ParameterGroupForm.formKey; }
        protected getIdProperty() { return ParameterGroupRow.idProperty; }
        protected getLocalTextPrefix() { return ParameterGroupRow.localTextPrefix; }
        protected getNameProperty() { return ParameterGroupRow.nameProperty; }
        protected getService() { return ParameterGroupService.baseUrl; }

        protected form = new ParameterGroupForm(this.idPrefix);

    }
}