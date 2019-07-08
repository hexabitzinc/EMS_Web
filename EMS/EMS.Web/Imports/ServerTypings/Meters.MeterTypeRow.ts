namespace EMS.Meters {
    export interface MeterTypeRow {
        FloorId?: number;
        BuildingId?: string;
    }

    export namespace MeterTypeRow {
        export const idProperty = 'FloorId';
        export const nameProperty = 'BuildingId';
        export const localTextPrefix = 'Meters.MeterType';

        export declare const enum Fields {
            FloorId = "FloorId",
            BuildingId = "BuildingId"
        }
    }
}
