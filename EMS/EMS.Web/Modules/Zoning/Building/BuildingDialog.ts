
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class BuildingDialog extends Serenity.EntityDialog<BuildingRow, any> {
        protected getFormKey() { return BuildingForm.formKey; }
        protected getIdProperty() { return BuildingRow.idProperty; }
        protected getLocalTextPrefix() { return BuildingRow.localTextPrefix; }
        protected getNameProperty() { return BuildingRow.nameProperty; }
        protected getService() { return BuildingService.baseUrl; }

        protected form = new BuildingForm(this.idPrefix);

    }
}