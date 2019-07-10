
namespace EMS.Meter {

    @Serenity.Decorators.registerClass()
    export class MeterParametersDialog extends Serenity.EntityDialog<MeterParametersRow, any> {
        protected getFormKey() { return MeterParametersForm.formKey; }
        protected getIdProperty() { return MeterParametersRow.idProperty; }
        protected getLocalTextPrefix() { return MeterParametersRow.localTextPrefix; }
        protected getService() { return MeterParametersService.baseUrl; }

        protected form = new MeterParametersForm(this.idPrefix);

    }
}