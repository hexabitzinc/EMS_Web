namespace EMS.Zoning {
    export interface FloorForm {
        BuildingId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        FloorNumber: Serenity.IntegerEditor;
        Describtion: Serenity.StringEditor;
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
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(FloorForm, [
                    'BuildingId', w0,
                    'Name', w1,
                    'FloorNumber', w0,
                    'Describtion', w1,
                    'Deleted', w2
                ]);
            }
        }
    }
}
