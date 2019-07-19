namespace EMS.Zoning {
    export interface FloorRow {
        FloorId?: number;
        BuildingId?: number;
        Name?: string;
        FloorNumber?: number;
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

    export namespace FloorRow {
        export const idProperty = 'FloorId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.Floor';

        export declare const enum Fields {
            FloorId = "FloorId",
            BuildingId = "BuildingId",
            Name = "Name",
            FloorNumber = "FloorNumber",
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
