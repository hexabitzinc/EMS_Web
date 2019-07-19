namespace EMS.Zoning {
    export interface SectionForm {
        FloorId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
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
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(SectionForm, [
                    'FloorId', w0,
                    'Name', w1,
                    'Description', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
