namespace EMS.EMSDevice {
    export interface EmsParameterForm {
        ParameterTypeId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class EmsParameterForm extends Serenity.PrefixedContext {
        static formKey = 'EMSDevice.EmsParameter';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmsParameterForm.init)  {
                EmsParameterForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(EmsParameterForm, [
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
