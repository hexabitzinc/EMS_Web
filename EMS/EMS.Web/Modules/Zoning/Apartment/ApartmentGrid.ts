
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class ApartmentGrid extends Serenity.EntityGrid<ApartmentRow, any> {
        protected getColumnsKey() { return 'Zoning.Apartment'; }
        protected getDialogType() { return ApartmentDialog; }
        protected getIdProperty() { return ApartmentRow.idProperty; }
        protected getLocalTextPrefix() { return ApartmentRow.localTextPrefix; }
        protected getService() { return ApartmentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}