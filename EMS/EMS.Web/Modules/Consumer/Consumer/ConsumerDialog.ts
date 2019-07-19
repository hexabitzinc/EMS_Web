
namespace EMS.Consumer {

    @Serenity.Decorators.registerClass()
    export class ConsumerDialog extends Serenity.EntityDialog<ConsumerRow, any> {
        protected getFormKey() { return ConsumerForm.formKey; }
        protected getIdProperty() { return ConsumerRow.idProperty; }
        protected getLocalTextPrefix() { return ConsumerRow.localTextPrefix; }
        protected getNameProperty() { return ConsumerRow.nameProperty; }
        protected getService() { return ConsumerService.baseUrl; }

        protected form = new ConsumerForm(this.idPrefix);

    }
}