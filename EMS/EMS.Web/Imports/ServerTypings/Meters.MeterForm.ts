namespace EMS.Meters {
    export interface MeterForm {
        ApartmentId: Serenity.IntegerEditor;
        ConsumerId: Serenity.IntegerEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class MeterForm extends Serenity.PrefixedContext {
        static formKey = 'Meters.Meter';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeterForm.init)  {
                MeterForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(MeterForm, [
                    'ApartmentId', w0,
                    'ConsumerId', w0,
                    'Deleted', w1
                ]);
            }
        }
    }
}
