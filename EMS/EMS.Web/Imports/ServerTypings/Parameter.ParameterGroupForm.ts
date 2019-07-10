namespace EMS.Parameter {
    export interface ParameterGroupForm {
        Name: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class ParameterGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Parameter.ParameterGroup';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ParameterGroupForm.init)  {
                ParameterGroupForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(ParameterGroupForm, [
                    'Name', w0,
                    'Deleted', w1
                ]);
            }
        }
    }
}
