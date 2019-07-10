
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class CommonLocationDialog extends Serenity.EntityDialog<CommonLocationRow, any> {
        protected getFormKey() { return CommonLocationForm.formKey; }
        protected getIdProperty() { return CommonLocationRow.idProperty; }
        protected getLocalTextPrefix() { return CommonLocationRow.localTextPrefix; }
        protected getNameProperty() { return CommonLocationRow.nameProperty; }
        protected getService() { return CommonLocationService.baseUrl; }

        protected form = new CommonLocationForm(this.idPrefix);

    }
}