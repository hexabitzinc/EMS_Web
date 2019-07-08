namespace EMS.Zoning {
    export interface SectionRow {
        SectionId?: number;
        Name?: string;
        Describtion?: string;
        FloorId?: number;
        Deleted?: boolean;
        FloorFloorNumber?: number;
        FloorName?: string;
        FloorDescribtion?: string;
        FloorBuildingId?: number;
        FloorDeleted?: boolean;
    }

    export namespace SectionRow {
        export const idProperty = 'SectionId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.Section';

        export declare const enum Fields {
            SectionId = "SectionId",
            Name = "Name",
            Describtion = "Describtion",
            FloorId = "FloorId",
            Deleted = "Deleted",
            FloorFloorNumber = "FloorFloorNumber",
            FloorName = "FloorName",
            FloorDescribtion = "FloorDescribtion",
            FloorBuildingId = "FloorBuildingId",
            FloorDeleted = "FloorDeleted"
        }
    }
}
