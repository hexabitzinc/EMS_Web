
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class FloorDialog extends Serenity.EntityDialog<FloorRow, any> {
        protected getFormKey() { return FloorForm.formKey; }
        protected getIdProperty() { return FloorRow.idProperty; }
        protected getLocalTextPrefix() { return FloorRow.localTextPrefix; }
        protected getNameProperty() { return FloorRow.nameProperty; }
        protected getService() { return FloorService.baseUrl; }

        protected form = new FloorForm(this.idPrefix);

    }
}