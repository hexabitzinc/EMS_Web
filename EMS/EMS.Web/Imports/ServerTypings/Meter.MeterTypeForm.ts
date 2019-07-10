namespace EMS.Meter {
    export interface MeterTypeForm {
        Name: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class MeterTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Meter.MeterType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeterTypeForm.init)  {
                MeterTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(MeterTypeForm, [
                    'Name', w0,
                    'Deleted', w1
                ]);
            }
        }
    }
}
