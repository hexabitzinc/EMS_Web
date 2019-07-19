
namespace EMS.Consumer {

    @Serenity.Decorators.registerClass()
    export class ConsumerGrid extends Serenity.EntityGrid<ConsumerRow, any> {
        protected getColumnsKey() { return 'Consumer.Consumer'; }
        protected getDialogType() { return ConsumerDialog; }
        protected getIdProperty() { return ConsumerRow.idProperty; }
        protected getLocalTextPrefix() { return ConsumerRow.localTextPrefix; }
        protected getService() { return ConsumerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}