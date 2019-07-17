namespace EMS.Zoning {
    export interface ApartmentForm {
        SectionId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Type: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        RoomNumber: Serenity.StringEditor;
        Describtion: Serenity.StringEditor;
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
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(ApartmentForm, [
                    'SectionId', w0,
                    'Name', w1,
                    'Type', w1,
                    'Address', w1,
                    'RoomNumber', w1,
                    'Describtion', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
