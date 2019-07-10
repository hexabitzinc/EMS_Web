namespace EMS.Meter {
    export interface MeterParametersForm {
        ParameterGroupId: Serenity.IntegerEditor;
        ParameterId: Serenity.IntegerEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class MeterParametersForm extends Serenity.PrefixedContext {
        static formKey = 'Meter.MeterParameters';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeterParametersForm.init)  {
                MeterParametersForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(MeterParametersForm, [
                    'ParameterGroupId', w0,
                    'ParameterId', w0,
                    'Deleted', w1
                ]);
            }
        }
    }
}
