namespace EMS.Parameter {
    export interface ParameterForm {
        ParameterTypeId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class ParameterForm extends Serenity.PrefixedContext {
        static formKey = 'Parameter.Parameter';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ParameterForm.init)  {
                ParameterForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(ParameterForm, [
                    'ParameterTypeId', w0,
                    'Name', w1,
                    'Address', w1,
                    'Notes', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
