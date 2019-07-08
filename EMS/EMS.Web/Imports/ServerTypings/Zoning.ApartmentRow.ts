namespace EMS.Zoning {
    export interface ApartmentRow {
        ApartmentId?: number;
        Name?: string;
        Type?: string;
        Address?: string;
        RoomNumber?: string;
        Describtion?: string;
        SectionId?: number;
        Deleted?: boolean;
        SectionName?: string;
        SectionDescribtion?: string;
        SectionFloorId?: number;
        SectionDeleted?: boolean;
    }

    export namespace ApartmentRow {
        export const idProperty = 'ApartmentId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.Apartment';

        export declare const enum Fields {
            ApartmentId = "ApartmentId",
            Name = "Name",
            Type = "Type",
            Address = "Address",
            RoomNumber = "RoomNumber",
            Describtion = "Describtion",
            SectionId = "SectionId",
            Deleted = "Deleted",
            SectionName = "SectionName",
            SectionDescribtion = "SectionDescribtion",
            SectionFloorId = "SectionFloorId",
            SectionDeleted = "SectionDeleted"
        }
    }
}
