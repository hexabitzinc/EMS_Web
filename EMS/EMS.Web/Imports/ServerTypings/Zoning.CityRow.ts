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
        export const lookupKey = 'Zoning.City';

        export function getLookup(): Q.Lookup<CityRow> {
            return Q.getLookup<CityRow>('Zoning.City');
        }

        export declare const enum Fields {
            CityId = "CityId",
            Name = "Name",
            Description = "Description",
            Deleted = "Deleted"
        }
    }
}
