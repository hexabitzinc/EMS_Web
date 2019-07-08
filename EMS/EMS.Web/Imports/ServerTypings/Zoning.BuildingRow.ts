namespace EMS.Zoning {
    export interface BuildingRow {
        BuildingId?: number;
        ZipCode?: string;
        Address?: string;
        StreetAddress?: string;
        Description?: string;
        CityId?: number;
        Deleted?: boolean;
        CityName?: string;
        CityDeleted?: boolean;
    }

    export namespace BuildingRow {
        export const idProperty = 'BuildingId';
        export const nameProperty = 'ZipCode';
        export const localTextPrefix = 'Zoning.Building';

        export declare const enum Fields {
            BuildingId = "BuildingId",
            ZipCode = "ZipCode",
            Address = "Address",
            StreetAddress = "StreetAddress",
            Description = "Description",
            CityId = "CityId",
            Deleted = "Deleted",
            CityName = "CityName",
            CityDeleted = "CityDeleted"
        }
    }
}
