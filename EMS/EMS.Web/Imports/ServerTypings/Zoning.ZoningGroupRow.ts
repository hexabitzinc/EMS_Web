namespace EMS.Zoning {
    export interface ZoningGroupRow {
        ZoningGroupId?: number;
        Name?: string;
        Deleted?: boolean;
    }

    export namespace ZoningGroupRow {
        export const idProperty = 'ZoningGroupId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.ZoningGroup';

        export declare const enum Fields {
            ZoningGroupId = "ZoningGroupId",
            Name = "Name",
            Deleted = "Deleted"
        }
    }
}
