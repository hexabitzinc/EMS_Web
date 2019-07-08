namespace EMS.Meters {
    export interface MeterTypeForm {
        BuildingId: Serenity.StringEditor;
    }

    export class MeterTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Meters.MeterType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeterTypeForm.init)  {
                MeterTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MeterTypeForm, [
                    'BuildingId', w0
                ]);
            }
        }
    }
}
