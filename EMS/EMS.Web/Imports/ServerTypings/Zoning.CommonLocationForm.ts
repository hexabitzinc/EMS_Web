namespace EMS.Zoning {
    export interface CommonLocationForm {
        BuildingId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class CommonLocationForm extends Serenity.PrefixedContext {
        static formKey = 'Zoning.CommonLocation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CommonLocationForm.init)  {
                CommonLocationForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(CommonLocationForm, [
                    'BuildingId', w0,
                    'Name', w1,
                    'Description', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
