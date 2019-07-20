namespace EMS.Zoning {
    export interface FloorForm {
        BuildingId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        FloorNumber: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }

    export class FloorForm extends Serenity.PrefixedContext {
        static formKey = 'Zoning.Floor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FloorForm.init)  {
                FloorForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(FloorForm, [
                    'BuildingId', w0,
                    'Name', w1,
                    'FloorNumber', w2,
                    'Description', w1,
                    'Deleted', w3
                ]);
            }
        }
    }
}
