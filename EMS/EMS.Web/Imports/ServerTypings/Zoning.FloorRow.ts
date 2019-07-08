namespace EMS.Zoning {
    export interface FloorRow {
        FloorId?: number;
        FloorNumber?: number;
        Name?: string;
        Describtion?: string;
        BuildingId?: number;
        Deleted?: boolean;
        BuildingZipCode?: string;
        BuildingAddress?: string;
        BuildingStreetAddress?: string;
        BuildingDescription?: string;
        BuildingCityId?: number;
        BuildingDeleted?: boolean;
    }

    export namespace FloorRow {
        export const idProperty = 'FloorId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.Floor';

        export declare const enum Fields {
            FloorId = "FloorId",
            FloorNumber = "FloorNumber",
            Name = "Name",
            Describtion = "Describtion",
            BuildingId = "BuildingId",
            Deleted = "Deleted",
            BuildingZipCode = "BuildingZipCode",
            BuildingAddress = "BuildingAddress",
            BuildingStreetAddress = "BuildingStreetAddress",
            BuildingDescription = "BuildingDescription",
            BuildingCityId = "BuildingCityId",
            BuildingDeleted = "BuildingDeleted"
        }
    }
}
