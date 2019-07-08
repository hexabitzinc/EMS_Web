namespace EMS.Meters {
    export interface MeterRow {
        MeterId?: number;
        ApartmentId?: number;
        ConsumerId?: number;
        Deleted?: boolean;
        ApartmentName?: string;
        ApartmentType?: string;
        ApartmentAddress?: string;
        ApartmentRoomNumber?: string;
        ApartmentDescribtion?: string;
        ApartmentSectionId?: number;
        ApartmentDeleted?: boolean;
        ConsumerUsername?: string;
        ConsumerDisplayName?: string;
        ConsumerEmail?: string;
        ConsumerSource?: string;
        ConsumerPasswordHash?: string;
        ConsumerPasswordSalt?: string;
        ConsumerLastDirectoryUpdate?: string;
        ConsumerUserImage?: string;
        ConsumerInsertDate?: string;
        ConsumerInsertUserId?: number;
        ConsumerUpdateDate?: string;
        ConsumerUpdateUserId?: number;
        ConsumerIsActive?: number;
    }

    export namespace MeterRow {
        export const idProperty = 'MeterId';
        export const localTextPrefix = 'Meters.Meter';

        export declare const enum Fields {
            MeterId = "MeterId",
            ApartmentId = "ApartmentId",
            ConsumerId = "ConsumerId",
            Deleted = "Deleted",
            ApartmentName = "ApartmentName",
            ApartmentType = "ApartmentType",
            ApartmentAddress = "ApartmentAddress",
            ApartmentRoomNumber = "ApartmentRoomNumber",
            ApartmentDescribtion = "ApartmentDescribtion",
            ApartmentSectionId = "ApartmentSectionId",
            ApartmentDeleted = "ApartmentDeleted",
            ConsumerUsername = "ConsumerUsername",
            ConsumerDisplayName = "ConsumerDisplayName",
            ConsumerEmail = "ConsumerEmail",
            ConsumerSource = "ConsumerSource",
            ConsumerPasswordHash = "ConsumerPasswordHash",
            ConsumerPasswordSalt = "ConsumerPasswordSalt",
            ConsumerLastDirectoryUpdate = "ConsumerLastDirectoryUpdate",
            ConsumerUserImage = "ConsumerUserImage",
            ConsumerInsertDate = "ConsumerInsertDate",
            ConsumerInsertUserId = "ConsumerInsertUserId",
            ConsumerUpdateDate = "ConsumerUpdateDate",
            ConsumerUpdateUserId = "ConsumerUpdateUserId",
            ConsumerIsActive = "ConsumerIsActive"
        }
    }
}
