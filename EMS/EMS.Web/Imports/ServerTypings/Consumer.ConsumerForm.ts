namespace EMS.Consumer {
    export interface ConsumerForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Gender: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        OtherInformation: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class ConsumerForm extends Serenity.PrefixedContext {
        static formKey = 'Consumer.Consumer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ConsumerForm.init)  {
                ConsumerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(ConsumerForm, [
                    'FirstName', w0,
                    'LastName', w0,
                    'Gender', w0,
                    'Address', w0,
                    'Phone', w0,
                    'OtherInformation', w0,
                    'Mobile', w0,
                    'Email', w0,
                    'Deleted', w1
                ]);
            }
        }
    }
}
