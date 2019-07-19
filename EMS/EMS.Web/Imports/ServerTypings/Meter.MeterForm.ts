namespace EMS.Meter {
    export interface MeterForm {
        ApartmentId: Serenity.LookupEditor;
        CommonLocationId: Serenity.LookupEditor;
        MeterTypeId: Serenity.LookupEditor;
        ConsumerId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        Make: Serenity.StringEditor;
        PhysicalLocation: Serenity.StringEditor;
        AssignedLocation: Serenity.StringEditor;
        CommunicationMethod: Serenity.StringEditor;
        SerialCommunicationSetting: Serenity.StringEditor;
        RegistrationDate: Serenity.DateEditor;
        Notes: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class MeterForm extends Serenity.PrefixedContext {
        static formKey = 'Meter.Meter';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeterForm.init)  {
                MeterForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(MeterForm, [
                    'ApartmentId', w0,
                    'CommonLocationId', w0,
                    'MeterTypeId', w0,
                    'ConsumerId', w1,
                    'Name', w2,
                    'SerialNumber', w2,
                    'Make', w2,
                    'PhysicalLocation', w2,
                    'AssignedLocation', w2,
                    'CommunicationMethod', w2,
                    'SerialCommunicationSetting', w2,
                    'RegistrationDate', w3,
                    'Notes', w2,
                    'Deleted', w4
                ]);
            }
        }
    }
}
