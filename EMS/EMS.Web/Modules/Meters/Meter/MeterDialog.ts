
namespace EMS.Meters {

    @Serenity.Decorators.registerClass()
    export class MeterDialog extends Serenity.EntityDialog<MeterRow, any> {
        protected getFormKey() { return MeterForm.formKey; }
        protected getIdProperty() { return MeterRow.idProperty; }
        protected getLocalTextPrefix() { return MeterRow.localTextPrefix; }
        protected getService() { return MeterService.baseUrl; }

        protected form = new MeterForm(this.idPrefix);

    }
}