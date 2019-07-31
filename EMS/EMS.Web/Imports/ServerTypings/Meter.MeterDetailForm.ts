namespace EMS.Meter {
    export interface MeterDetailForm {
        MeterId: Serenity.LookupEditor;
        ParameterGroupId: Serenity.LookupEditor;
        ParameterId: Serenity.LookupEditor;
        SchedulingId: Serenity.IntegerEditor;
        ApartmentId: Serenity.IntegerEditor;
        CommonLocationId: Serenity.IntegerEditor;
        Value: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class MeterDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Meter.MeterDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeterDetailForm.init)  {
                MeterDetailForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(MeterDetailForm, [
                    'MeterId', w0,
                    'ParameterGroupId', w0,
                    'ParameterId', w0,
                    'SchedulingId', w1,
                    'ApartmentId', w1,
                    'CommonLocationId', w1,
                    'Value', w2,
                    'Deleted', w3
                ]);
            }
        }
    }
}
