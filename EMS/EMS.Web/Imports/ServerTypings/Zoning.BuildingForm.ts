namespace EMS.Zoning {
    export interface BuildingForm {
        CityId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        StreetAddress: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class BuildingForm extends Serenity.PrefixedContext {
        static formKey = 'Zoning.Building';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BuildingForm.init)  {
                BuildingForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(BuildingForm, [
                    'CityId', w0,
                    'Name', w1,
                    'ZipCode', w1,
                    'Address', w1,
                    'StreetAddress', w1,
                    'Description', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
