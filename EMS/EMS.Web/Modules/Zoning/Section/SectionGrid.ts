
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class SectionGrid extends Serenity.EntityGrid<SectionRow, any> {
        protected getColumnsKey() { return 'Zoning.Section'; }
        protected getDialogType() { return SectionDialog; }
        protected getIdProperty() { return SectionRow.idProperty; }
        protected getLocalTextPrefix() { return SectionRow.localTextPrefix; }
        protected getService() { return SectionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}