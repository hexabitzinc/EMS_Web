namespace EMS.Zoning {
    export interface SectionForm {
        Name: Serenity.StringEditor;
        Describtion: Serenity.StringEditor;
        FloorId: Serenity.IntegerEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(SectionForm, [
                    'Name', w0,
                    'Describtion', w0,
                    'FloorId', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
