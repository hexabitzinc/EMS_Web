namespace EMS.Zoning {
    export interface FloorForm {
        FloorNumber: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Describtion: Serenity.StringEditor;
        BuildingId: Serenity.IntegerEditor;
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
                    'FloorNumber', w0,
                    'Name', w1,
                    'Describtion', w1,
                    'BuildingId', w0,
                    'Deleted', w2
                ]);
            }
        }
    }
}
