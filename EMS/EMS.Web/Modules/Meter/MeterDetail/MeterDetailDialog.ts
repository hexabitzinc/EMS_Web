
namespace EMS.Meter {

    @Serenity.Decorators.registerClass()
    export class MeterDetailDialog extends Serenity.EntityDialog<MeterDetailRow, any> {
        protected getFormKey() { return MeterDetailForm.formKey; }
        protected getIdProperty() { return MeterDetailRow.idProperty; }
        protected getLocalTextPrefix() { return MeterDetailRow.localTextPrefix; }
        protected getNameProperty() { return MeterDetailRow.nameProperty; }
        protected getService() { return MeterDetailService.baseUrl; }

        protected form = new MeterDetailForm(this.idPrefix);

    }
}