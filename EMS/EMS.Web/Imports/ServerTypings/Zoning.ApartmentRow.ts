﻿namespace EMS.Zoning {
    export interface ApartmentRow {
        ApartmentId?: number;
        SectionId?: number;
        Name?: string;
        Type?: string;
        Address?: string;
        RoomNumber?: string;
        Description?: string;
        Deleted?: boolean;
        SectionFloorId?: number;
        SectionName?: string;
        SectionDescription?: string;
        SectionDeleted?: boolean;
    }

    export namespace ApartmentRow {
        export const idProperty = 'ApartmentId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.Apartment';
        export const lookupKey = 'Zoning.Apartment';

        export function getLookup(): Q.Lookup<ApartmentRow> {
            return Q.getLookup<ApartmentRow>('Zoning.Apartment');
        }

        export declare const enum Fields {
            ApartmentId = "ApartmentId",
            SectionId = "SectionId",
            Name = "Name",
            Type = "Type",
            Address = "Address",
            RoomNumber = "RoomNumber",
            Description = "Description",
            Deleted = "Deleted",
            SectionFloorId = "SectionFloorId",
            SectionName = "SectionName",
            SectionDescription = "SectionDescription",
            SectionDeleted = "SectionDeleted"
        }
    }
}
