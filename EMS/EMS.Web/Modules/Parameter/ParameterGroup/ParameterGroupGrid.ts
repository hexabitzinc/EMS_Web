
namespace EMS.Parameter {

    @Serenity.Decorators.registerClass()
    export class ParameterGroupGrid extends Serenity.EntityGrid<ParameterGroupRow, any> {
        protected getColumnsKey() { return 'Parameter.ParameterGroup'; }
        protected getDialogType() { return ParameterGroupDialog; }
        protected getIdProperty() { return ParameterGroupRow.idProperty; }
        protected getLocalTextPrefix() { return ParameterGroupRow.localTextPrefix; }
        protected getService() { return ParameterGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}