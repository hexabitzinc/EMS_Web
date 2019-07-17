namespace EMS.Zoning {
    export interface SectionRow {
        SectionId?: number;
        FloorId?: number;
        Name?: string;
        Describtion?: string;
        Deleted?: boolean;
        FloorBuildingId?: number;
        FloorName?: string;
        FloorFloorNumber?: number;
        FloorDescribtion?: string;
        FloorDeleted?: boolean;
    }

    export namespace SectionRow {
        export const idProperty = 'SectionId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.Section';
        export const lookupKey = 'Zoning.Section';

        export function getLookup(): Q.Lookup<SectionRow> {
            return Q.getLookup<SectionRow>('Zoning.Section');
        }

        export declare const enum Fields {
            SectionId = "SectionId",
            FloorId = "FloorId",
            Name = "Name",
            Describtion = "Describtion",
            Deleted = "Deleted",
            FloorBuildingId = "FloorBuildingId",
            FloorName = "FloorName",
            FloorFloorNumber = "FloorFloorNumber",
            FloorDescribtion = "FloorDescribtion",
            FloorDeleted = "FloorDeleted"
        }
    }
}
