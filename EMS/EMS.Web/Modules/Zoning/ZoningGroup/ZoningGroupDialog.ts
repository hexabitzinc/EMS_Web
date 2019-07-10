
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class ZoningGroupDialog extends Serenity.EntityDialog<ZoningGroupRow, any> {
        protected getFormKey() { return ZoningGroupForm.formKey; }
        protected getIdProperty() { return ZoningGroupRow.idProperty; }
        protected getLocalTextPrefix() { return ZoningGroupRow.localTextPrefix; }
        protected getNameProperty() { return ZoningGroupRow.nameProperty; }
        protected getService() { return ZoningGroupService.baseUrl; }

        protected form = new ZoningGroupForm(this.idPrefix);

    }
}