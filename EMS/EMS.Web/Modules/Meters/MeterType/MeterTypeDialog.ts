
namespace EMS.Meters {

    @Serenity.Decorators.registerClass()
    export class MeterTypeDialog extends Serenity.EntityDialog<MeterTypeRow, any> {
        protected getFormKey() { return MeterTypeForm.formKey; }
        protected getIdProperty() { return MeterTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MeterTypeRow.localTextPrefix; }
        protected getNameProperty() { return MeterTypeRow.nameProperty; }
        protected getService() { return MeterTypeService.baseUrl; }

        protected form = new MeterTypeForm(this.idPrefix);

    }
}