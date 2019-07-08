
namespace EMS.Meters {

    @Serenity.Decorators.registerClass()
    export class MeterParameterDialog extends Serenity.EntityDialog<MeterParameterRow, any> {
        protected getFormKey() { return MeterParameterForm.formKey; }
        protected getIdProperty() { return MeterParameterRow.idProperty; }
        protected getLocalTextPrefix() { return MeterParameterRow.localTextPrefix; }
        protected getNameProperty() { return MeterParameterRow.nameProperty; }
        protected getService() { return MeterParameterService.baseUrl; }

        protected form = new MeterParameterForm(this.idPrefix);

    }
}