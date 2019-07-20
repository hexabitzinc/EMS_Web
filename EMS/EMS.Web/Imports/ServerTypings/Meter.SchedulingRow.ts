namespace EMS.Meter {
    export interface SchedulingRow {
        SchedulingId?: number;
        Year?: string;
        Month?: string;
        Day?: string;
        Time?: string;
        FullDate?: string;
        Deleted?: boolean;
    }

    export namespace SchedulingRow {
        export const idProperty = 'SchedulingId';
        export const nameProperty = 'Year';
        export const localTextPrefix = 'Meter.Scheduling';
        export const lookupKey = 'Meter.Scheduling';

        export function getLookup(): Q.Lookup<SchedulingRow> {
            return Q.getLookup<SchedulingRow>('Meter.Scheduling');
        }

        export declare const enum Fields {
            SchedulingId = "SchedulingId",
            Year = "Year",
            Month = "Month",
            Day = "Day",
            Time = "Time",
            FullDate = "FullDate",
            Deleted = "Deleted"
        }
    }
}
