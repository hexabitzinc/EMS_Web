namespace EMS.Meter {
    export interface MeterParametersRow {
        MeterParameterId?: number;
        ParameterGroupId?: number;
        ParameterId?: number;
        Deleted?: boolean;
        ParameterGroupName?: string;
        ParameterGroupDeleted?: boolean;
        ParameterParameterTypeId?: number;
        ParameterName?: string;
        ParameterValue?: string;
        ParameterAddress?: string;
        ParameterNotes?: string;
        ParameterDeleted?: boolean;
    }

    export namespace MeterParametersRow {
        export const idProperty = 'MeterParameterId';
        export const localTextPrefix = 'Meter.MeterParameters';
        export const lookupKey = 'Meter.MeterParameters';

        export function getLookup(): Q.Lookup<MeterParametersRow> {
            return Q.getLookup<MeterParametersRow>('Meter.MeterParameters');
        }

        export declare const enum Fields {
            MeterParameterId = "MeterParameterId",
            ParameterGroupId = "ParameterGroupId",
            ParameterId = "ParameterId",
            Deleted = "Deleted",
            ParameterGroupName = "ParameterGroupName",
            ParameterGroupDeleted = "ParameterGroupDeleted",
            ParameterParameterTypeId = "ParameterParameterTypeId",
            ParameterName = "ParameterName",
            ParameterValue = "ParameterValue",
            ParameterAddress = "ParameterAddress",
            ParameterNotes = "ParameterNotes",
            ParameterDeleted = "ParameterDeleted"
        }
    }
}
