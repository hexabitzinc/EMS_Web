namespace EMS.EMSDevice {
    export interface EmsDeviceForm {
        BuildingId: Serenity.LookupEditor;
        EmsParameterId: Serenity.LookupEditor;
        EmsSettingId: Serenity.LookupEditor;
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

    export class EmsDeviceForm extends Serenity.PrefixedContext {
        static formKey = 'EMSDevice.EmsDevice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmsDeviceForm.init)  {
                EmsDeviceForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(EmsDeviceForm, [
                    'BuildingId', w0,
                    'EmsParameterId', w0,
                    'EmsSettingId', w0,
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
