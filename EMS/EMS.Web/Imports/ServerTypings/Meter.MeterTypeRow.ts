namespace EMS.Meter {
    export interface MeterTypeRow {
        MeterTypeId?: number;
        Name?: string;
        Deleted?: boolean;
    }

    export namespace MeterTypeRow {
        export const idProperty = 'MeterTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Meter.MeterType';
        export const lookupKey = 'Meter.MeterType';

        export function getLookup(): Q.Lookup<MeterTypeRow> {
            return Q.getLookup<MeterTypeRow>('Meter.MeterType');
        }

        export declare const enum Fields {
            MeterTypeId = "MeterTypeId",
            Name = "Name",
            Deleted = "Deleted"
        }
    }
}
