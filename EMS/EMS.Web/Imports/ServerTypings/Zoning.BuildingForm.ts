namespace EMS.Zoning {
    export interface BuildingForm {
        ZipCode: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        StreetAddress: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        CityId: Serenity.IntegerEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(BuildingForm, [
                    'ZipCode', w0,
                    'Address', w0,
                    'StreetAddress', w0,
                    'Description', w0,
                    'CityId', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
