namespace EMS.EMSDevice {
    export interface EmsDeviceRow {
        EmsDeviceId?: number;
        BuildingId?: number;
        EmsParameterId?: number;
        EmsSettingId?: number;
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
        BuildingCityId?: number;
        BuildingName?: string;
        BuildingZipCode?: string;
        BuildingAddress?: string;
        BuildingStreetAddress?: string;
        BuildingDescription?: string;
        BuildingDeleted?: boolean;
        EmsParameterParameterTypeId?: number;
        EmsParameterName?: string;
        EmsParameterValue?: string;
        EmsParameterAddress?: string;
        EmsParameterNotes?: string;
        EmsParameterDeleted?: boolean;
        EmsSettingParameterTypeId?: number;
        EmsSettingName?: string;
        EmsSettingValue?: string;
        EmsSettingAddress?: string;
        EmsSettingNotes?: string;
        EmsSettingDeleted?: boolean;
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

    export namespace EmsDeviceRow {
        export const idProperty = 'EmsDeviceId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'EMSDevice.EmsDevice';

        export declare const enum Fields {
            EmsDeviceId = "EmsDeviceId",
            BuildingId = "BuildingId",
            EmsParameterId = "EmsParameterId",
            EmsSettingId = "EmsSettingId",
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
            BuildingCityId = "BuildingCityId",
            BuildingName = "BuildingName",
            BuildingZipCode = "BuildingZipCode",
            BuildingAddress = "BuildingAddress",
            BuildingStreetAddress = "BuildingStreetAddress",
            BuildingDescription = "BuildingDescription",
            BuildingDeleted = "BuildingDeleted",
            EmsParameterParameterTypeId = "EmsParameterParameterTypeId",
            EmsParameterName = "EmsParameterName",
            EmsParameterValue = "EmsParameterValue",
            EmsParameterAddress = "EmsParameterAddress",
            EmsParameterNotes = "EmsParameterNotes",
            EmsParameterDeleted = "EmsParameterDeleted",
            EmsSettingParameterTypeId = "EmsSettingParameterTypeId",
            EmsSettingName = "EmsSettingName",
            EmsSettingValue = "EmsSettingValue",
            EmsSettingAddress = "EmsSettingAddress",
            EmsSettingNotes = "EmsSettingNotes",
            EmsSettingDeleted = "EmsSettingDeleted",
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
