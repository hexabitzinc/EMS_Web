namespace EMS.Zoning {
    export interface SectionForm {
        FloorId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Describtion: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class SectionForm extends Serenity.PrefixedContext {
        static formKey = 'Zoning.Section';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SectionForm.init)  {
                SectionForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(SectionForm, [
                    'FloorId', w0,
                    'Name', w1,
                    'Describtion', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
