namespace EMS.Parameter {
    export interface ParameterGroupRow {
        ParameterGroupId?: number;
        Name?: string;
        Deleted?: boolean;
    }

    export namespace ParameterGroupRow {
        export const idProperty = 'ParameterGroupId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Parameter.ParameterGroup';

        export declare const enum Fields {
            ParameterGroupId = "ParameterGroupId",
            Name = "Name",
            Deleted = "Deleted"
        }
    }
}
