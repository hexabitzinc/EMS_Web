namespace EMS.Parameter {
    export interface ParameterTypeForm {
        Name: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class ParameterTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Parameter.ParameterType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ParameterTypeForm.init)  {
                ParameterTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(ParameterTypeForm, [
                    'Name', w0,
                    'Deleted', w1
                ]);
            }
        }
    }
}
