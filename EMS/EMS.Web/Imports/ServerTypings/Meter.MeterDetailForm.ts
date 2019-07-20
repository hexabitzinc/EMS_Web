namespace EMS.Meter {
    export interface MeterDetailForm {
        ParameterGroupId: Serenity.LookupEditor;
        ParameterId: Serenity.LookupEditor;
        SchedulingId: Serenity.LookupEditor;
        ApartmentId: Serenity.LookupEditor;
        CommonLocationId: Serenity.LookupEditor;
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
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(MeterDetailForm, [
                    'ParameterGroupId', w0,
                    'ParameterId', w0,
                    'SchedulingId', w0,
                    'ApartmentId', w0,
                    'CommonLocationId', w0,
                    'Value', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
