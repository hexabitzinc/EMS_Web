
namespace EMS.Parameter {

    @Serenity.Decorators.registerClass()
    export class ParameterTypeGrid extends Serenity.EntityGrid<ParameterTypeRow, any> {
        protected getColumnsKey() { return 'Parameter.ParameterType'; }
        protected getDialogType() { return ParameterTypeDialog; }
        protected getIdProperty() { return ParameterTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ParameterTypeRow.localTextPrefix; }
        protected getService() { return ParameterTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}