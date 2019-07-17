namespace EMS.Zoning {
    export interface BuildingRow {
        BuildingId?: number;
        CityId?: number;
        Name?: string;
        ZipCode?: string;
        Address?: string;
        StreetAddress?: string;
        Description?: string;
        Deleted?: boolean;
        CityName?: string;
        CityDescription?: string;
        CityDeleted?: boolean;
    }

    export namespace BuildingRow {
        export const idProperty = 'BuildingId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.Building';
        export const lookupKey = 'Zoning.Building';

        export function getLookup(): Q.Lookup<BuildingRow> {
            return Q.getLookup<BuildingRow>('Zoning.Building');
        }

        export declare const enum Fields {
            BuildingId = "BuildingId",
            CityId = "CityId",
            Name = "Name",
            ZipCode = "ZipCode",
            Address = "Address",
            StreetAddress = "StreetAddress",
            Description = "Description",
            Deleted = "Deleted",
            CityName = "CityName",
            CityDescription = "CityDescription",
            CityDeleted = "CityDeleted"
        }
    }
}
