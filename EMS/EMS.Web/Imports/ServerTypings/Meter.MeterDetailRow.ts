namespace EMS.Meter {
    export interface MeterDetailRow {
        MeterDetailId?: number;
        MeterId?: number;
        ParameterGroupId?: number;
        ParameterId?: number;
        SchedulingId?: number;
        ApartmentId?: number;
        CommonLocationId?: number;
        Value?: string;
        Deleted?: boolean;
        MeterMeterTypeId?: number;
        MeterConsumerId?: number;
        MeterName?: string;
        MeterSerialNumber?: string;
        MeterMake?: string;
        MeterPhysicalLocation?: string;
        MeterAssignedLocation?: string;
        MeterCommunicationMethod?: string;
        MeterSerialCommunicationSetting?: string;
        MeterRegistrationDate?: string;
        MeterNotes?: string;
        MeterDeleted?: boolean;
        ParameterGroupName?: string;
        ParameterGroupDeleted?: boolean;
        ParameterParameterTypeId?: number;
        ParameterName?: string;
        ParameterAddress?: string;
        ParameterNotes?: string;
        ParameterDeleted?: boolean;
        SchedulingYear?: string;
        SchedulingMonth?: string;
        SchedulingDay?: string;
        SchedulingTime?: string;
        SchedulingFullDate?: string;
        SchedulingDeleted?: boolean;
        ApartmentSectionId?: number;
        ApartmentName?: string;
        ApartmentType?: string;
        ApartmentAddress?: string;
        ApartmentRoomNumber?: string;
        ApartmentDescription?: string;
        ApartmentDeleted?: boolean;
        CommonLocationBuildingId?: number;
        CommonLocationName?: string;
        CommonLocationDescription?: string;
        CommonLocationDeleted?: boolean;
    }

    export namespace MeterDetailRow {
        export const idProperty = 'MeterDetailId';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'Meter.MeterDetail';
        export const lookupKey = 'Meter.MeterDetail';

        export function getLookup(): Q.Lookup<MeterDetailRow> {
            return Q.getLookup<MeterDetailRow>('Meter.MeterDetail');
        }

        export declare const enum Fields {
            MeterDetailId = "MeterDetailId",
            MeterId = "MeterId",
            ParameterGroupId = "ParameterGroupId",
            ParameterId = "ParameterId",
            SchedulingId = "SchedulingId",
            ApartmentId = "ApartmentId",
            CommonLocationId = "CommonLocationId",
            Value = "Value",
            Deleted = "Deleted",
            MeterMeterTypeId = "MeterMeterTypeId",
            MeterConsumerId = "MeterConsumerId",
            MeterName = "MeterName",
            MeterSerialNumber = "MeterSerialNumber",
            MeterMake = "MeterMake",
            MeterPhysicalLocation = "MeterPhysicalLocation",
            MeterAssignedLocation = "MeterAssignedLocation",
            MeterCommunicationMethod = "MeterCommunicationMethod",
            MeterSerialCommunicationSetting = "MeterSerialCommunicationSetting",
            MeterRegistrationDate = "MeterRegistrationDate",
            MeterNotes = "MeterNotes",
            MeterDeleted = "MeterDeleted",
            ParameterGroupName = "ParameterGroupName",
            ParameterGroupDeleted = "ParameterGroupDeleted",
            ParameterParameterTypeId = "ParameterParameterTypeId",
            ParameterName = "ParameterName",
            ParameterAddress = "ParameterAddress",
            ParameterNotes = "ParameterNotes",
            ParameterDeleted = "ParameterDeleted",
            SchedulingYear = "SchedulingYear",
            SchedulingMonth = "SchedulingMonth",
            SchedulingDay = "SchedulingDay",
            SchedulingTime = "SchedulingTime",
            SchedulingFullDate = "SchedulingFullDate",
            SchedulingDeleted = "SchedulingDeleted",
            ApartmentSectionId = "ApartmentSectionId",
            ApartmentName = "ApartmentName",
            ApartmentType = "ApartmentType",
            ApartmentAddress = "ApartmentAddress",
            ApartmentRoomNumber = "ApartmentRoomNumber",
            ApartmentDescription = "ApartmentDescription",
            ApartmentDeleted = "ApartmentDeleted",
            CommonLocationBuildingId = "CommonLocationBuildingId",
            CommonLocationName = "CommonLocationName",
            CommonLocationDescription = "CommonLocationDescription",
            CommonLocationDeleted = "CommonLocationDeleted"
        }
    }
}
