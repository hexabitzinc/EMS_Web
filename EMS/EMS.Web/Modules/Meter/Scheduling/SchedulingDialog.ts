
namespace EMS.Meter {

    @Serenity.Decorators.registerClass()
    export class SchedulingDialog extends Serenity.EntityDialog<SchedulingRow, any> {
        protected getFormKey() { return SchedulingForm.formKey; }
        protected getIdProperty() { return SchedulingRow.idProperty; }
        protected getLocalTextPrefix() { return SchedulingRow.localTextPrefix; }
        protected getNameProperty() { return SchedulingRow.nameProperty; }
        protected getService() { return SchedulingService.baseUrl; }

        protected form = new SchedulingForm(this.idPrefix);

    }
}