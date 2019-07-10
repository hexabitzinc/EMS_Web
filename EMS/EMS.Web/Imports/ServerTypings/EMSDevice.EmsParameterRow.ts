namespace EMS.EMSDevice {
    export interface EmsParameterRow {
        EmsParameterId?: number;
        ParameterTypeId?: number;
        Name?: string;
        Value?: string;
        Address?: string;
        Notes?: string;
        Deleted?: boolean;
        ParameterTypeName?: string;
        ParameterTypeDeleted?: boolean;
    }

    export namespace EmsParameterRow {
        export const idProperty = 'EmsParameterId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'EMSDevice.EmsParameter';

        export declare const enum Fields {
            EmsParameterId = "EmsParameterId",
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
