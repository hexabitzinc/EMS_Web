namespace EMS.EMSDevice {
    export interface EmsSettingForm {
        ParameterTypeId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class EmsSettingForm extends Serenity.PrefixedContext {
        static formKey = 'EMSDevice.EmsSetting';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmsSettingForm.init)  {
                EmsSettingForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(EmsSettingForm, [
                    'ParameterTypeId', w0,
                    'Name', w1,
                    'Value', w1,
                    'Address', w1,
                    'Notes', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
