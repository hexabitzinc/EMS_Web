
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class CommonLocationGrid extends Serenity.EntityGrid<CommonLocationRow, any> {
        protected getColumnsKey() { return 'Zoning.CommonLocation'; }
        protected getDialogType() { return CommonLocationDialog; }
        protected getIdProperty() { return CommonLocationRow.idProperty; }
        protected getLocalTextPrefix() { return CommonLocationRow.localTextPrefix; }
        protected getService() { return CommonLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}