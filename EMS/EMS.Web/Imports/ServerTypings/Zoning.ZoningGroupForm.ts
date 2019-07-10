namespace EMS.Zoning {
    export interface ZoningGroupForm {
        Name: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class ZoningGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Zoning.ZoningGroup';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ZoningGroupForm.init)  {
                ZoningGroupForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(ZoningGroupForm, [
                    'Name', w0,
                    'Deleted', w1
                ]);
            }
        }
    }
}
