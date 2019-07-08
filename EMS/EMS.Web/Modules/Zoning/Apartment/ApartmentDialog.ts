
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class ApartmentDialog extends Serenity.EntityDialog<ApartmentRow, any> {
        protected getFormKey() { return ApartmentForm.formKey; }
        protected getIdProperty() { return ApartmentRow.idProperty; }
        protected getLocalTextPrefix() { return ApartmentRow.localTextPrefix; }
        protected getNameProperty() { return ApartmentRow.nameProperty; }
        protected getService() { return ApartmentService.baseUrl; }

        protected form = new ApartmentForm(this.idPrefix);

    }
}