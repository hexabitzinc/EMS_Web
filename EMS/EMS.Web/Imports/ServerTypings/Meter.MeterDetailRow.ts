namespace EMS.Meter {
    export interface MeterDetailRow {
        MeterDetailId?: number;
        ParameterGroupId?: number;
        ParameterId?: number;
        SchedulingId?: number;
        ApartmentId?: number;
        CommonLocationId?: number;
        Value?: string;
        Deleted?: boolean;
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

        export declare const enum Fields {
            MeterDetailId = "MeterDetailId",
            ParameterGroupId = "ParameterGroupId",
            ParameterId = "ParameterId",
            SchedulingId = "SchedulingId",
            ApartmentId = "ApartmentId",
            CommonLocationId = "CommonLocationId",
            Value = "Value",
            Deleted = "Deleted",
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
