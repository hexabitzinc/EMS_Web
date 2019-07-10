namespace EMS.EMSDevice {
    export interface EmsDeviceForm {
        BuildingId: Serenity.IntegerEditor;
        EmsParameterId: Serenity.IntegerEditor;
        EmsSettingId: Serenity.IntegerEditor;
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
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(EmsDeviceForm, [
                    'BuildingId', w0,
                    'EmsParameterId', w0,
                    'EmsSettingId', w0,
                    'ConsumerId', w0,
                    'Name', w1,
                    'SerialNumber', w1,
                    'Make', w1,
                    'PhysicalLocation', w1,
                    'AssignedLocation', w1,
                    'CommunicationMethod', w1,
                    'SerialCommunicationSetting', w1,
                    'RegistrationDate', w2,
                    'Notes', w1,
                    'Deleted', w3
                ]);
            }
        }
    }
}
