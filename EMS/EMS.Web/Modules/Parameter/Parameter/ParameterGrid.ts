
namespace EMS.Parameter {

    @Serenity.Decorators.registerClass()
    export class ParameterGrid extends Serenity.EntityGrid<ParameterRow, any> {
        protected getColumnsKey() { return 'Parameter.Parameter'; }
        protected getDialogType() { return ParameterDialog; }
        protected getIdProperty() { return ParameterRow.idProperty; }
        protected getLocalTextPrefix() { return ParameterRow.localTextPrefix; }
        protected getService() { return ParameterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}