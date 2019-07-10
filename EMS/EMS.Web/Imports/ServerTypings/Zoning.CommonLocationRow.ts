namespace EMS.Zoning {
    export interface CommonLocationRow {
        CommonLocationId?: number;
        BuildingId?: number;
        Name?: string;
        Description?: string;
        Deleted?: boolean;
        BuildingCityId?: number;
        BuildingName?: string;
        BuildingZipCode?: string;
        BuildingAddress?: string;
        BuildingStreetAddress?: string;
        BuildingDescription?: string;
        BuildingDeleted?: boolean;
    }

    export namespace CommonLocationRow {
        export const idProperty = 'CommonLocationId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.CommonLocation';

        export declare const enum Fields {
            CommonLocationId = "CommonLocationId",
            BuildingId = "BuildingId",
            Name = "Name",
            Description = "Description",
            Deleted = "Deleted",
            BuildingCityId = "BuildingCityId",
            BuildingName = "BuildingName",
            BuildingZipCode = "BuildingZipCode",
            BuildingAddress = "BuildingAddress",
            BuildingStreetAddress = "BuildingStreetAddress",
            BuildingDescription = "BuildingDescription",
            BuildingDeleted = "BuildingDeleted"
        }
    }
}
