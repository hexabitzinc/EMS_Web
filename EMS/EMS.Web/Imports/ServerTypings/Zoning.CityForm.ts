namespace EMS.Zoning {
    export interface CityForm {
        Name: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class CityForm extends Serenity.PrefixedContext {
        static formKey = 'Zoning.City';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CityForm.init)  {
                CityForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(CityForm, [
                    'Name', w0,
                    'Deleted', w1
                ]);
            }
        }
    }
}
