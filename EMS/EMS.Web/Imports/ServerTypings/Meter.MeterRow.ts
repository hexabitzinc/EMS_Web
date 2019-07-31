namespace EMS.Meter {
    export interface MeterRow {
        MeterId?: number;
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

        export declare const enum Fields {
            MeterId = "MeterId",
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
