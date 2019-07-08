namespace EMS.Meters {
    export interface MeterParameterRow {
        MeterParameterId?: number;
        BuildingId?: string;
    }

    export namespace MeterParameterRow {
        export const idProperty = 'MeterParameterId';
        export const nameProperty = 'BuildingId';
        export const localTextPrefix = 'Meters.MeterParameter';

        export declare const enum Fields {
            MeterParameterId = "MeterParameterId",
            BuildingId = "BuildingId"
        }
    }
}
