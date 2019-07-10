namespace EMS.Zoning {
    export interface CityRow {
        CityId?: number;
        Name?: string;
        Description?: string;
        Deleted?: boolean;
    }

    export namespace CityRow {
        export const idProperty = 'CityId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Zoning.City';

        export declare const enum Fields {
            CityId = "CityId",
            Name = "Name",
            Description = "Description",
            Deleted = "Deleted"
        }
    }
}
