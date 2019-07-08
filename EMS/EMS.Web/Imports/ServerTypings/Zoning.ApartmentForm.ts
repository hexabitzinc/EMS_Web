namespace EMS.Zoning {
    export interface ApartmentForm {
        Name: Serenity.StringEditor;
        Type: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        RoomNumber: Serenity.StringEditor;
        Describtion: Serenity.StringEditor;
        SectionId: Serenity.IntegerEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class ApartmentForm extends Serenity.PrefixedContext {
        static formKey = 'Zoning.Apartment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ApartmentForm.init)  {
                ApartmentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(ApartmentForm, [
                    'Name', w0,
                    'Type', w0,
                    'Address', w0,
                    'RoomNumber', w0,
                    'Describtion', w0,
                    'SectionId', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
