namespace EMS.Zoning {
    export interface CityRow {
        CityId?: number;
        Name?: string;
        Deleted?: boolean;
    }

    export namespace CityRow {
        export const idProperty = 'CityId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.City';

        export declare const enum Fields {
            CityId = "CityId",
            Name = "Name",
            Deleted = "Deleted"
        }
    }
}
