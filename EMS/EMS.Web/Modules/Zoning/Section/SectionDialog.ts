﻿
namespace EMS.Zoning {

    @Serenity.Decorators.registerClass()
    export class SectionDialog extends Serenity.EntityDialog<SectionRow, any> {
        protected getFormKey() { return SectionForm.formKey; }
        protected getIdProperty() { return SectionRow.idProperty; }
        protected getLocalTextPrefix() { return SectionRow.localTextPrefix; }
        protected getNameProperty() { return SectionRow.nameProperty; }
        protected getService() { return SectionService.baseUrl; }

        protected form = new SectionForm(this.idPrefix);

    }
}