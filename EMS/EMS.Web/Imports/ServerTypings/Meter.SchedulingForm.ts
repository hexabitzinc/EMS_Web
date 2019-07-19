namespace EMS.Meter {
    export interface SchedulingForm {
        Year: Serenity.StringEditor;
        Month: Serenity.StringEditor;
        Day: Serenity.StringEditor;
        Time: Serenity.StringEditor;
        FullDate: Serenity.DateEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class SchedulingForm extends Serenity.PrefixedContext {
        static formKey = 'Meter.Scheduling';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SchedulingForm.init)  {
                SchedulingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(SchedulingForm, [
                    'Year', w0,
                    'Month', w0,
                    'Day', w0,
                    'Time', w0,
                    'FullDate', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
