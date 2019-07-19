namespace EMS.Zoning {
    export interface SectionRow {
        SectionId?: number;
        FloorId?: number;
        Name?: string;
        Description?: string;
        Deleted?: boolean;
        FloorBuildingId?: number;
        FloorName?: string;
        FloorFloorNumber?: number;
        FloorDescription?: string;
        FloorDeleted?: boolean;
    }

    export namespace SectionRow {
        export const idProperty = 'SectionId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.Section';

        export declare const enum Fields {
            SectionId = "SectionId",
            FloorId = "FloorId",
            Name = "Name",
            Description = "Description",
            Deleted = "Deleted",
            FloorBuildingId = "FloorBuildingId",
            FloorName = "FloorName",
            FloorFloorNumber = "FloorFloorNumber",
            FloorDescription = "FloorDescription",
            FloorDeleted = "FloorDeleted"
        }
    }
}
