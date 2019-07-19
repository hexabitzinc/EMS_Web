namespace EMS.EMSDevice {
    export interface EmsSettingRow {
        EmsSettingId?: number;
        ParameterTypeId?: number;
        Name?: string;
        Value?: string;
        Address?: string;
        Notes?: string;
        Deleted?: boolean;
        ParameterTypeName?: string;
        ParameterTypeDeleted?: boolean;
    }

    export namespace EmsSettingRow {
        export const idProperty = 'EmsSettingId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'EMSDevice.EmsSetting';

        export declare const enum Fields {
            EmsSettingId = "EmsSettingId",
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
