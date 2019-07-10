
namespace EMS.Meter {

    @Serenity.Decorators.registerClass()
    export class MeterDialog extends Serenity.EntityDialog<MeterRow, any> {
        protected getFormKey() { return MeterForm.formKey; }
        protected getIdProperty() { return MeterRow.idProperty; }
        protected getLocalTextPrefix() { return MeterRow.localTextPrefix; }
        protected getNameProperty() { return MeterRow.nameProperty; }
        protected getService() { return MeterService.baseUrl; }

        protected form = new MeterForm(this.idPrefix);

    }
}