namespace EMS.Meter {
    export interface MeterRow {
        MeterId?: number;
        ApartmentId?: number;
        CommonLocationId?: number;
        MeterTypeId?: number;
        ConsumerId?: number;
        Name?: string;
        SerialNumber?: string;
        Make?: string;
        PhysicalLocation?: string;
        AssignedLocation?: string;
        CommunicationMethod?: string;
        SerialCommunicationSetting?: string;
        RegistrationDate?: string;
        Notes?: string;
        Deleted?: boolean;
        ApartmentSectionId?: number;
        ApartmentName?: string;
        ApartmentType?: string;
        ApartmentAddress?: string;
        ApartmentRoomNumber?: string;
        ApartmentDescribtion?: string;
        ApartmentDeleted?: boolean;
        CommonLocationBuildingId?: number;
        CommonLocationName?: string;
        CommonLocationDescription?: string;
        CommonLocationDeleted?: boolean;
        MeterTypeName?: string;
        MeterTypeDeleted?: boolean;
        ConsumerFirstName?: string;
        ConsumerLastName?: string;
        ConsumerGender?: string;
        ConsumerAddress?: string;
        ConsumerPhone?: string;
        ConsumerOtherInformation?: string;
        ConsumerMobile?: string;
        ConsumerEmail?: string;
        ConsumerDeleted?: boolean;
    }

    export namespace MeterRow {
        export const idProperty = 'MeterId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Meter.Meter';
        export const lookupKey = 'Zoning.Meter';

        export function getLookup(): Q.Lookup<MeterRow> {
            return Q.getLookup<MeterRow>('Zoning.Meter');
        }

        export declare const enum Fields {
            MeterId = "MeterId",
            ApartmentId = "ApartmentId",
            CommonLocationId = "CommonLocationId",
            MeterTypeId = "MeterTypeId",
            ConsumerId = "ConsumerId",
            Name = "Name",
            SerialNumber = "SerialNumber",
            Make = "Make",
            PhysicalLocation = "PhysicalLocation",
            AssignedLocation = "AssignedLocation",
            CommunicationMethod = "CommunicationMethod",
            SerialCommunicationSetting = "SerialCommunicationSetting",
            RegistrationDate = "RegistrationDate",
            Notes = "Notes",
            Deleted = "Deleted",
            ApartmentSectionId = "ApartmentSectionId",
            ApartmentName = "ApartmentName",
            ApartmentType = "ApartmentType",
            ApartmentAddress = "ApartmentAddress",
            ApartmentRoomNumber = "ApartmentRoomNumber",
            ApartmentDescribtion = "ApartmentDescribtion",
            ApartmentDeleted = "ApartmentDeleted",
            CommonLocationBuildingId = "CommonLocationBuildingId",
            CommonLocationName = "CommonLocationName",
            CommonLocationDescription = "CommonLocationDescription",
            CommonLocationDeleted = "CommonLocationDeleted",
            MeterTypeName = "MeterTypeName",
            MeterTypeDeleted = "MeterTypeDeleted",
            ConsumerFirstName = "ConsumerFirstName",
            ConsumerLastName = "ConsumerLastName",
            ConsumerGender = "ConsumerGender",
            ConsumerAddress = "ConsumerAddress",
            ConsumerPhone = "ConsumerPhone",
            ConsumerOtherInformation = "ConsumerOtherInformation",
            ConsumerMobile = "ConsumerMobile",
            ConsumerEmail = "ConsumerEmail",
            ConsumerDeleted = "ConsumerDeleted"
        }
    }
}
