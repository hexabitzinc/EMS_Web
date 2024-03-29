﻿namespace EMS.Parameter {
    export interface ParameterTypeRow {
        ParameterTypeId?: number;
        Name?: string;
        Deleted?: boolean;
    }

    export namespace ParameterTypeRow {
        export const idProperty = 'ParameterTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Parameter.ParameterType';
        export const lookupKey = 'Parameter.ParameterType';

        export function getLookup(): Q.Lookup<ParameterTypeRow> {
            return Q.getLookup<ParameterTypeRow>('Parameter.ParameterType');
        }

        export declare const enum Fields {
            ParameterTypeId = "ParameterTypeId",
            Name = "Name",
            Deleted = "Deleted"
        }
    }
}
