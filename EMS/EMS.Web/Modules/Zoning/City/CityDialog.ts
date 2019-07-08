﻿
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class CityDialog extends Serenity.EntityDialog<CityRow, any> {
        protected getFormKey() { return CityForm.formKey; }
        protected getIdProperty() { return CityRow.idProperty; }
        protected getLocalTextPrefix() { return CityRow.localTextPrefix; }
        protected getNameProperty() { return CityRow.nameProperty; }
        protected getService() { return CityService.baseUrl; }

        protected form = new CityForm(this.idPrefix);

    }
}