namespace EMS.Meters {
    export interface MeterParameterForm {
        BuildingId: Serenity.StringEditor;
    }

    export class MeterParameterForm extends Serenity.PrefixedContext {
        static formKey = 'Meters.MeterParameter';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeterParameterForm.init)  {
                MeterParameterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MeterParameterForm, [
                    'BuildingId', w0
                ]);
            }
        }
    }
}
