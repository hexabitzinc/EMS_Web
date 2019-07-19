namespace EMS.Parameter {
    export interface ParameterRow {
        ParameterId?: number;
        ParameterTypeId?: number;
        Name?: string;
        Value?: string;
        Address?: string;
        Notes?: string;
        Deleted?: boolean;
        ParameterTypeName?: string;
        ParameterTypeDeleted?: boolean;
    }

    export namespace ParameterRow {
        export const idProperty = 'ParameterId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Parameter.Parameter';
        export const lookupKey = 'Parameter.Parameter';

        export function getLookup(): Q.Lookup<ParameterRow> {
            return Q.getLookup<ParameterRow>('Parameter.Parameter');
        }

        export declare const enum Fields {
            ParameterId = "ParameterId",
            ParameterTypeId = "ParameterTypeId",
            Name = "Name",
            Value = "Value",
            Address = "Address",
            Notes = "Notes",
            Deleted = "Deleted",
            ParameterTypeName = "ParameterTypeName",
            ParameterTypeDeleted = "ParameterTypeDeleted"
        }
    }
}
