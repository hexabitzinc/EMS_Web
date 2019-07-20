/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace EMS.Administration {
}
declare namespace EMS.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace EMS.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace EMS.Administration {
}
declare namespace EMS.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace EMS.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace EMS.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace EMS.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace EMS.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace EMS.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace EMS.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace EMS.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace EMS.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace EMS.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace EMS.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace EMS.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace EMS.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace EMS.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace EMS.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace EMS.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace EMS.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace EMS.Administration {
}
declare namespace EMS.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace EMS.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace EMS.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace EMS.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace EMS.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace EMS.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace EMS.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace EMS.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace EMS.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace EMS.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace EMS.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace EMS.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace EMS.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace EMS.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace EMS.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace EMS.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace EMS.Consumer {
}
declare namespace EMS.Consumer {
    interface ConsumerForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Gender: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        OtherInformation: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class ConsumerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Consumer {
    interface ConsumerRow {
        ConsumerId?: number;
        FirstName?: string;
        LastName?: string;
        Gender?: string;
        Address?: string;
        Phone?: string;
        OtherInformation?: string;
        Mobile?: string;
        Email?: string;
        Deleted?: boolean;
    }
    namespace ConsumerRow {
        const idProperty = "ConsumerId";
        const nameProperty = "FirstName";
        const localTextPrefix = "Consumer.Consumer";
        const lookupKey = "Consumer.Consumer";
        function getLookup(): Q.Lookup<ConsumerRow>;
        const enum Fields {
            ConsumerId = "ConsumerId",
            FirstName = "FirstName",
            LastName = "LastName",
            Gender = "Gender",
            Address = "Address",
            Phone = "Phone",
            OtherInformation = "OtherInformation",
            Mobile = "Mobile",
            Email = "Email",
            Deleted = "Deleted"
        }
    }
}
declare namespace EMS.Consumer {
    namespace ConsumerService {
        const baseUrl = "Consumer/Consumer";
        function Create(request: Serenity.SaveRequest<ConsumerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConsumerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsumerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsumerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Consumer/Consumer/Create",
            Update = "Consumer/Consumer/Update",
            Delete = "Consumer/Consumer/Delete",
            Retrieve = "Consumer/Consumer/Retrieve",
            List = "Consumer/Consumer/List"
        }
    }
}
declare namespace EMS.EMSDevice {
}
declare namespace EMS.EMSDevice {
    interface EmsDeviceForm {
        BuildingId: Serenity.LookupEditor;
        EmsParameterId: Serenity.LookupEditor;
        EmsSettingId: Serenity.LookupEditor;
        ConsumerId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        Make: Serenity.StringEditor;
        PhysicalLocation: Serenity.StringEditor;
        AssignedLocation: Serenity.StringEditor;
        CommunicationMethod: Serenity.StringEditor;
        SerialCommunicationSetting: Serenity.StringEditor;
        RegistrationDate: Serenity.DateEditor;
        Notes: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class EmsDeviceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.EMSDevice {
    interface EmsDeviceRow {
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
    namespace EmsDeviceRow {
        const idProperty = "EmsDeviceId";
        const nameProperty = "Name";
        const localTextPrefix = "EMSDevice.EmsDevice";
        const lookupKey = "EMSDevice.EMSDevice";
        function getLookup(): Q.Lookup<EmsDeviceRow>;
        const enum Fields {
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
declare namespace EMS.EMSDevice {
    namespace EmsDeviceService {
        const baseUrl = "EMSDevice/EmsDevice";
        function Create(request: Serenity.SaveRequest<EmsDeviceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmsDeviceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmsDeviceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmsDeviceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EMSDevice/EmsDevice/Create",
            Update = "EMSDevice/EmsDevice/Update",
            Delete = "EMSDevice/EmsDevice/Delete",
            Retrieve = "EMSDevice/EmsDevice/Retrieve",
            List = "EMSDevice/EmsDevice/List"
        }
    }
}
declare namespace EMS.EMSDevice {
}
declare namespace EMS.EMSDevice {
    interface EmsParameterForm {
        ParameterTypeId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class EmsParameterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.EMSDevice {
    interface EmsParameterRow {
        EmsParameterId?: number;
        ParameterTypeId?: number;
        Name?: string;
        Value?: string;
        Address?: string;
        Notes?: string;
        Deleted?: boolean;
        ParameterTypeName?: string;
        ParameterTypeDeleted?: boolean;
    }
    namespace EmsParameterRow {
        const idProperty = "EmsParameterId";
        const nameProperty = "Name";
        const localTextPrefix = "EMSDevice.EmsParameter";
        const lookupKey = "EMSDevice.EMSParameter";
        function getLookup(): Q.Lookup<EmsParameterRow>;
        const enum Fields {
            EmsParameterId = "EmsParameterId",
            ParameterTypeId = "ParameterTypeId",
            Name = "Name",
            Value = "Value",
            Address = "Address",
            Notes = "Notes",
            Deleted = "Deleted",
            ParameterTypeName = "ParameterTypeName",
            ParameterTypeDeleted = "ParameterTypeDeleted"
        }
    }
}
declare namespace EMS.EMSDevice {
    namespace EmsParameterService {
        const baseUrl = "EMSDevice/EmsParameter";
        function Create(request: Serenity.SaveRequest<EmsParameterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmsParameterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmsParameterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmsParameterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EMSDevice/EmsParameter/Create",
            Update = "EMSDevice/EmsParameter/Update",
            Delete = "EMSDevice/EmsParameter/Delete",
            Retrieve = "EMSDevice/EmsParameter/Retrieve",
            List = "EMSDevice/EmsParameter/List"
        }
    }
}
declare namespace EMS.EMSDevice {
}
declare namespace EMS.EMSDevice {
    interface EmsSettingForm {
        ParameterTypeId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class EmsSettingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.EMSDevice {
    interface EmsSettingRow {
        EmsSettingId?: number;
        ParameterTypeId?: number;
        Name?: string;
        Value?: string;
        Address?: string;
        Notes?: string;
        Deleted?: boolean;
        ParameterTypeName?: string;
        ParameterTypeDeleted?: boolean;
    }
    namespace EmsSettingRow {
        const idProperty = "EmsSettingId";
        const nameProperty = "Name";
        const localTextPrefix = "EMSDevice.EmsSetting";
        const lookupKey = "EMSDevice.EMSSetting";
        function getLookup(): Q.Lookup<EmsSettingRow>;
        const enum Fields {
            EmsSettingId = "EmsSettingId",
            ParameterTypeId = "ParameterTypeId",
            Name = "Name",
            Value = "Value",
            Address = "Address",
            Notes = "Notes",
            Deleted = "Deleted",
            ParameterTypeName = "ParameterTypeName",
            ParameterTypeDeleted = "ParameterTypeDeleted"
        }
    }
}
declare namespace EMS.EMSDevice {
    namespace EmsSettingService {
        const baseUrl = "EMSDevice/EmsSetting";
        function Create(request: Serenity.SaveRequest<EmsSettingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmsSettingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmsSettingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmsSettingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "EMSDevice/EmsSetting/Create",
            Update = "EMSDevice/EmsSetting/Update",
            Delete = "EMSDevice/EmsSetting/Delete",
            Retrieve = "EMSDevice/EmsSetting/Retrieve",
            List = "EMSDevice/EmsSetting/List"
        }
    }
}
declare namespace EMS {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace EMS {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace EMS {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace EMS {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace EMS.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace EMS.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace EMS.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace EMS.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace EMS.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace EMS.Meter {
}
declare namespace EMS.Meter {
}
declare namespace EMS.Meter {
    interface MeterDetailForm {
        ParameterGroupId: Serenity.LookupEditor;
        ParameterId: Serenity.LookupEditor;
        SchedulingId: Serenity.LookupEditor;
        ApartmentId: Serenity.LookupEditor;
        CommonLocationId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class MeterDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Meter {
    interface MeterDetailRow {
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
    namespace MeterDetailRow {
        const idProperty = "MeterDetailId";
        const nameProperty = "Value";
        const localTextPrefix = "Meter.MeterDetail";
        const lookupKey = "Meter.MeterDetail";
        function getLookup(): Q.Lookup<MeterDetailRow>;
        const enum Fields {
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
declare namespace EMS.Meter {
    namespace MeterDetailService {
        const baseUrl = "Meter/MeterDetail";
        function Create(request: Serenity.SaveRequest<MeterDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeterDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeterDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeterDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meter/MeterDetail/Create",
            Update = "Meter/MeterDetail/Update",
            Delete = "Meter/MeterDetail/Delete",
            Retrieve = "Meter/MeterDetail/Retrieve",
            List = "Meter/MeterDetail/List"
        }
    }
}
declare namespace EMS.Meter {
    interface MeterForm {
        MeterTypeId: Serenity.LookupEditor;
        ConsumerId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        Make: Serenity.StringEditor;
        PhysicalLocation: Serenity.StringEditor;
        AssignedLocation: Serenity.StringEditor;
        CommunicationMethod: Serenity.StringEditor;
        SerialCommunicationSetting: Serenity.StringEditor;
        RegistrationDate: Serenity.DateEditor;
        Notes: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class MeterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Meter {
    interface MeterRow {
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
    namespace MeterRow {
        const idProperty = "MeterId";
        const nameProperty = "Name";
        const localTextPrefix = "Meter.Meter";
        const lookupKey = "Meter.Meter";
        function getLookup(): Q.Lookup<MeterRow>;
        const enum Fields {
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
declare namespace EMS.Meter {
    namespace MeterService {
        const baseUrl = "Meter/Meter";
        function Create(request: Serenity.SaveRequest<MeterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meter/Meter/Create",
            Update = "Meter/Meter/Update",
            Delete = "Meter/Meter/Delete",
            Retrieve = "Meter/Meter/Retrieve",
            List = "Meter/Meter/List"
        }
    }
}
declare namespace EMS.Meter {
}
declare namespace EMS.Meter {
    interface MeterTypeForm {
        Name: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class MeterTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Meter {
    interface MeterTypeRow {
        MeterTypeId?: number;
        Name?: string;
        Deleted?: boolean;
    }
    namespace MeterTypeRow {
        const idProperty = "MeterTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Meter.MeterType";
        const lookupKey = "Meter.MeterType";
        function getLookup(): Q.Lookup<MeterTypeRow>;
        const enum Fields {
            MeterTypeId = "MeterTypeId",
            Name = "Name",
            Deleted = "Deleted"
        }
    }
}
declare namespace EMS.Meter {
    namespace MeterTypeService {
        const baseUrl = "Meter/MeterType";
        function Create(request: Serenity.SaveRequest<MeterTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeterTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeterTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeterTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meter/MeterType/Create",
            Update = "Meter/MeterType/Update",
            Delete = "Meter/MeterType/Delete",
            Retrieve = "Meter/MeterType/Retrieve",
            List = "Meter/MeterType/List"
        }
    }
}
declare namespace EMS.Meter {
}
declare namespace EMS.Meter {
    interface SchedulingForm {
        Year: Serenity.StringEditor;
        Month: Serenity.StringEditor;
        Day: Serenity.StringEditor;
        Time: Serenity.StringEditor;
        FullDate: Serenity.DateEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class SchedulingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Meter {
    interface SchedulingRow {
        SchedulingId?: number;
        Year?: string;
        Month?: string;
        Day?: string;
        Time?: string;
        FullDate?: string;
        Deleted?: boolean;
    }
    namespace SchedulingRow {
        const idProperty = "SchedulingId";
        const nameProperty = "Year";
        const localTextPrefix = "Meter.Scheduling";
        const lookupKey = "Meter.Scheduling";
        function getLookup(): Q.Lookup<SchedulingRow>;
        const enum Fields {
            SchedulingId = "SchedulingId",
            Year = "Year",
            Month = "Month",
            Day = "Day",
            Time = "Time",
            FullDate = "FullDate",
            Deleted = "Deleted"
        }
    }
}
declare namespace EMS.Meter {
    namespace SchedulingService {
        const baseUrl = "Meter/Scheduling";
        function Create(request: Serenity.SaveRequest<SchedulingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SchedulingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SchedulingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SchedulingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Meter/Scheduling/Create",
            Update = "Meter/Scheduling/Update",
            Delete = "Meter/Scheduling/Delete",
            Retrieve = "Meter/Scheduling/Retrieve",
            List = "Meter/Scheduling/List"
        }
    }
}
declare namespace EMS.Parameter {
}
declare namespace EMS.Parameter {
    interface ParameterForm {
        ParameterTypeId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class ParameterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Parameter {
}
declare namespace EMS.Parameter {
    interface ParameterGroupForm {
        Name: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class ParameterGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Parameter {
    interface ParameterGroupRow {
        ParameterGroupId?: number;
        Name?: string;
        Deleted?: boolean;
    }
    namespace ParameterGroupRow {
        const idProperty = "ParameterGroupId";
        const nameProperty = "Name";
        const localTextPrefix = "Parameter.ParameterGroup";
        const lookupKey = "Parameter.ParameterGroup";
        function getLookup(): Q.Lookup<ParameterGroupRow>;
        const enum Fields {
            ParameterGroupId = "ParameterGroupId",
            Name = "Name",
            Deleted = "Deleted"
        }
    }
}
declare namespace EMS.Parameter {
    namespace ParameterGroupService {
        const baseUrl = "Parameter/ParameterGroup";
        function Create(request: Serenity.SaveRequest<ParameterGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ParameterGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ParameterGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ParameterGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Parameter/ParameterGroup/Create",
            Update = "Parameter/ParameterGroup/Update",
            Delete = "Parameter/ParameterGroup/Delete",
            Retrieve = "Parameter/ParameterGroup/Retrieve",
            List = "Parameter/ParameterGroup/List"
        }
    }
}
declare namespace EMS.Parameter {
    interface ParameterRow {
        ParameterId?: number;
        ParameterTypeId?: number;
        Name?: string;
        Address?: string;
        Notes?: string;
        Deleted?: boolean;
        ParameterTypeName?: string;
        ParameterTypeDeleted?: boolean;
    }
    namespace ParameterRow {
        const idProperty = "ParameterId";
        const nameProperty = "Name";
        const localTextPrefix = "Parameter.Parameter";
        const lookupKey = "Parameter.Parameter";
        function getLookup(): Q.Lookup<ParameterRow>;
        const enum Fields {
            ParameterId = "ParameterId",
            ParameterTypeId = "ParameterTypeId",
            Name = "Name",
            Address = "Address",
            Notes = "Notes",
            Deleted = "Deleted",
            ParameterTypeName = "ParameterTypeName",
            ParameterTypeDeleted = "ParameterTypeDeleted"
        }
    }
}
declare namespace EMS.Parameter {
    namespace ParameterService {
        const baseUrl = "Parameter/Parameter";
        function Create(request: Serenity.SaveRequest<ParameterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ParameterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ParameterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ParameterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Parameter/Parameter/Create",
            Update = "Parameter/Parameter/Update",
            Delete = "Parameter/Parameter/Delete",
            Retrieve = "Parameter/Parameter/Retrieve",
            List = "Parameter/Parameter/List"
        }
    }
}
declare namespace EMS.Parameter {
}
declare namespace EMS.Parameter {
    interface ParameterTypeForm {
        Name: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class ParameterTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Parameter {
    interface ParameterTypeRow {
        ParameterTypeId?: number;
        Name?: string;
        Deleted?: boolean;
    }
    namespace ParameterTypeRow {
        const idProperty = "ParameterTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Parameter.ParameterType";
        const lookupKey = "Parameter.ParameterType";
        function getLookup(): Q.Lookup<ParameterTypeRow>;
        const enum Fields {
            ParameterTypeId = "ParameterTypeId",
            Name = "Name",
            Deleted = "Deleted"
        }
    }
}
declare namespace EMS.Parameter {
    namespace ParameterTypeService {
        const baseUrl = "Parameter/ParameterType";
        function Create(request: Serenity.SaveRequest<ParameterTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ParameterTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ParameterTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ParameterTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Parameter/ParameterType/Create",
            Update = "Parameter/ParameterType/Update",
            Delete = "Parameter/ParameterType/Delete",
            Retrieve = "Parameter/ParameterType/Retrieve",
            List = "Parameter/ParameterType/List"
        }
    }
}
declare namespace EMS {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace EMS.Texts {
}
declare namespace EMS.Zoning {
}
declare namespace EMS.Zoning {
    interface ApartmentForm {
        SectionId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Type: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        RoomNumber: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class ApartmentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Zoning {
    interface ApartmentRow {
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
    namespace ApartmentRow {
        const idProperty = "ApartmentId";
        const nameProperty = "Name";
        const localTextPrefix = "Zoning.Apartment";
        const lookupKey = "Zoning.Apartment";
        function getLookup(): Q.Lookup<ApartmentRow>;
        const enum Fields {
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
declare namespace EMS.Zoning {
    namespace ApartmentService {
        const baseUrl = "Zoning/Apartment";
        function Create(request: Serenity.SaveRequest<ApartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ApartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Zoning/Apartment/Create",
            Update = "Zoning/Apartment/Update",
            Delete = "Zoning/Apartment/Delete",
            Retrieve = "Zoning/Apartment/Retrieve",
            List = "Zoning/Apartment/List"
        }
    }
}
declare namespace EMS.Zoning {
}
declare namespace EMS.Zoning {
    interface BuildingForm {
        CityId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        StreetAddress: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class BuildingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Zoning {
    interface BuildingRow {
        BuildingId?: number;
        CityId?: number;
        Name?: string;
        ZipCode?: string;
        Address?: string;
        StreetAddress?: string;
        Description?: string;
        Deleted?: boolean;
        CityName?: string;
        CityDescription?: string;
        CityDeleted?: boolean;
    }
    namespace BuildingRow {
        const idProperty = "BuildingId";
        const nameProperty = "Name";
        const localTextPrefix = "Zoning.Building";
        const lookupKey = "Zoning.Building";
        function getLookup(): Q.Lookup<BuildingRow>;
        const enum Fields {
            BuildingId = "BuildingId",
            CityId = "CityId",
            Name = "Name",
            ZipCode = "ZipCode",
            Address = "Address",
            StreetAddress = "StreetAddress",
            Description = "Description",
            Deleted = "Deleted",
            CityName = "CityName",
            CityDescription = "CityDescription",
            CityDeleted = "CityDeleted"
        }
    }
}
declare namespace EMS.Zoning {
    namespace BuildingService {
        const baseUrl = "Zoning/Building";
        function Create(request: Serenity.SaveRequest<BuildingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BuildingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BuildingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BuildingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Zoning/Building/Create",
            Update = "Zoning/Building/Update",
            Delete = "Zoning/Building/Delete",
            Retrieve = "Zoning/Building/Retrieve",
            List = "Zoning/Building/List"
        }
    }
}
declare namespace EMS.Zoning {
}
declare namespace EMS.Zoning {
    interface CityForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class CityForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Zoning {
    interface CityRow {
        CityId?: number;
        Name?: string;
        Description?: string;
        Deleted?: boolean;
    }
    namespace CityRow {
        const idProperty = "CityId";
        const nameProperty = "Name";
        const localTextPrefix = "Zoning.City";
        const lookupKey = "Zoning.City";
        function getLookup(): Q.Lookup<CityRow>;
        const enum Fields {
            CityId = "CityId",
            Name = "Name",
            Description = "Description",
            Deleted = "Deleted"
        }
    }
}
declare namespace EMS.Zoning {
    namespace CityService {
        const baseUrl = "Zoning/City";
        function Create(request: Serenity.SaveRequest<CityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Zoning/City/Create",
            Update = "Zoning/City/Update",
            Delete = "Zoning/City/Delete",
            Retrieve = "Zoning/City/Retrieve",
            List = "Zoning/City/List"
        }
    }
}
declare namespace EMS.Zoning {
}
declare namespace EMS.Zoning {
    interface CommonLocationForm {
        BuildingId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class CommonLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Zoning {
    interface CommonLocationRow {
        CommonLocationId?: number;
        BuildingId?: number;
        Name?: string;
        Description?: string;
        Deleted?: boolean;
        BuildingCityId?: number;
        BuildingName?: string;
        BuildingZipCode?: string;
        BuildingAddress?: string;
        BuildingStreetAddress?: string;
        BuildingDescription?: string;
        BuildingDeleted?: boolean;
    }
    namespace CommonLocationRow {
        const idProperty = "CommonLocationId";
        const nameProperty = "Name";
        const localTextPrefix = "Zoning.CommonLocation";
        const lookupKey = "Zoning.CommonLocation";
        function getLookup(): Q.Lookup<CommonLocationRow>;
        const enum Fields {
            CommonLocationId = "CommonLocationId",
            BuildingId = "BuildingId",
            Name = "Name",
            Description = "Description",
            Deleted = "Deleted",
            BuildingCityId = "BuildingCityId",
            BuildingName = "BuildingName",
            BuildingZipCode = "BuildingZipCode",
            BuildingAddress = "BuildingAddress",
            BuildingStreetAddress = "BuildingStreetAddress",
            BuildingDescription = "BuildingDescription",
            BuildingDeleted = "BuildingDeleted"
        }
    }
}
declare namespace EMS.Zoning {
    namespace CommonLocationService {
        const baseUrl = "Zoning/CommonLocation";
        function Create(request: Serenity.SaveRequest<CommonLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CommonLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommonLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommonLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Zoning/CommonLocation/Create",
            Update = "Zoning/CommonLocation/Update",
            Delete = "Zoning/CommonLocation/Delete",
            Retrieve = "Zoning/CommonLocation/Retrieve",
            List = "Zoning/CommonLocation/List"
        }
    }
}
declare namespace EMS.Zoning {
}
declare namespace EMS.Zoning {
    interface FloorForm {
        BuildingId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        FloorNumber: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class FloorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Zoning {
    interface FloorRow {
        FloorId?: number;
        BuildingId?: number;
        Name?: string;
        FloorNumber?: number;
        Description?: string;
        Deleted?: boolean;
        BuildingCityId?: number;
        BuildingName?: string;
        BuildingZipCode?: string;
        BuildingAddress?: string;
        BuildingStreetAddress?: string;
        BuildingDescription?: string;
        BuildingDeleted?: boolean;
    }
    namespace FloorRow {
        const idProperty = "FloorId";
        const nameProperty = "Name";
        const localTextPrefix = "Zoning.Floor";
        const lookupKey = "Zoning.Floor";
        function getLookup(): Q.Lookup<FloorRow>;
        const enum Fields {
            FloorId = "FloorId",
            BuildingId = "BuildingId",
            Name = "Name",
            FloorNumber = "FloorNumber",
            Description = "Description",
            Deleted = "Deleted",
            BuildingCityId = "BuildingCityId",
            BuildingName = "BuildingName",
            BuildingZipCode = "BuildingZipCode",
            BuildingAddress = "BuildingAddress",
            BuildingStreetAddress = "BuildingStreetAddress",
            BuildingDescription = "BuildingDescription",
            BuildingDeleted = "BuildingDeleted"
        }
    }
}
declare namespace EMS.Zoning {
    namespace FloorService {
        const baseUrl = "Zoning/Floor";
        function Create(request: Serenity.SaveRequest<FloorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FloorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FloorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FloorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Zoning/Floor/Create",
            Update = "Zoning/Floor/Update",
            Delete = "Zoning/Floor/Delete",
            Retrieve = "Zoning/Floor/Retrieve",
            List = "Zoning/Floor/List"
        }
    }
}
declare namespace EMS.Zoning {
}
declare namespace EMS.Zoning {
    interface SectionForm {
        FloorId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class SectionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Zoning {
    interface SectionRow {
        SectionId?: number;
        FloorId?: number;
        Name?: string;
        Description?: string;
        Deleted?: boolean;
        FloorBuildingId?: number;
        FloorName?: string;
        FloorFloorNumber?: number;
        FloorDescription?: string;
        FloorDeleted?: boolean;
    }
    namespace SectionRow {
        const idProperty = "SectionId";
        const nameProperty = "Name";
        const localTextPrefix = "Zoning.Section";
        const lookupKey = "Zoning.Section";
        function getLookup(): Q.Lookup<SectionRow>;
        const enum Fields {
            SectionId = "SectionId",
            FloorId = "FloorId",
            Name = "Name",
            Description = "Description",
            Deleted = "Deleted",
            FloorBuildingId = "FloorBuildingId",
            FloorName = "FloorName",
            FloorFloorNumber = "FloorFloorNumber",
            FloorDescription = "FloorDescription",
            FloorDeleted = "FloorDeleted"
        }
    }
}
declare namespace EMS.Zoning {
    namespace SectionService {
        const baseUrl = "Zoning/Section";
        function Create(request: Serenity.SaveRequest<SectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Zoning/Section/Create",
            Update = "Zoning/Section/Update",
            Delete = "Zoning/Section/Delete",
            Retrieve = "Zoning/Section/Retrieve",
            List = "Zoning/Section/List"
        }
    }
}
declare namespace EMS.Zoning {
}
declare namespace EMS.Zoning {
    interface ZoningGroupForm {
        Name: Serenity.StringEditor;
        Deleted: Serenity.BooleanEditor;
    }
    class ZoningGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace EMS.Zoning {
    interface ZoningGroupRow {
        ZoningGroupId?: number;
        Name?: string;
        Deleted?: boolean;
    }
    namespace ZoningGroupRow {
        const idProperty = "ZoningGroupId";
        const nameProperty = "Name";
        const localTextPrefix = "Zoning.ZoningGroup";
        const enum Fields {
            ZoningGroupId = "ZoningGroupId",
            Name = "Name",
            Deleted = "Deleted"
        }
    }
}
declare namespace EMS.Zoning {
    namespace ZoningGroupService {
        const baseUrl = "Zoning/ZoningGroup";
        function Create(request: Serenity.SaveRequest<ZoningGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ZoningGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ZoningGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ZoningGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Zoning/ZoningGroup/Create",
            Update = "Zoning/ZoningGroup/Update",
            Delete = "Zoning/ZoningGroup/Delete",
            Retrieve = "Zoning/ZoningGroup/Retrieve",
            List = "Zoning/ZoningGroup/List"
        }
    }
}
declare namespace EMS.LanguageList {
    function getValue(): string[][];
}
declare namespace EMS.ScriptInitialization {
}
declare namespace EMS.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace EMS.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace EMS.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace EMS.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace EMS.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace EMS.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace EMS.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace EMS.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace EMS.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace EMS.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace EMS.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace EMS.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace EMS.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace EMS {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace EMS.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace EMS.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace EMS.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace EMS.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace EMS.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace EMS.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace EMS {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace EMS.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace EMS.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace EMS.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace EMS.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace EMS.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace EMS.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace EMS.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace EMS.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace EMS.Consumer {
    class ConsumerDialog extends Serenity.EntityDialog<ConsumerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ConsumerForm;
    }
}
declare namespace EMS.Consumer {
    class ConsumerGrid extends Serenity.EntityGrid<ConsumerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsumerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.EMSDevice {
    class EmsDeviceDialog extends Serenity.EntityDialog<EmsDeviceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmsDeviceForm;
    }
}
declare namespace EMS.EMSDevice {
    class EmsDeviceGrid extends Serenity.EntityGrid<EmsDeviceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmsDeviceDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.EMSDevice {
    class EmsParameterDialog extends Serenity.EntityDialog<EmsParameterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmsParameterForm;
    }
}
declare namespace EMS.EMSDevice {
    class EmsParameterGrid extends Serenity.EntityGrid<EmsParameterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmsParameterDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.EMSDevice {
    class EmsSettingDialog extends Serenity.EntityDialog<EmsSettingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmsSettingForm;
    }
}
declare namespace EMS.EMSDevice {
    class EmsSettingGrid extends Serenity.EntityGrid<EmsSettingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmsSettingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Meter {
    class MeterDialog extends Serenity.EntityDialog<MeterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeterForm;
    }
}
declare namespace EMS.Meter {
    class MeterGrid extends Serenity.EntityGrid<MeterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeterDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Meter {
    class MeterDetailDialog extends Serenity.EntityDialog<MeterDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeterDetailForm;
    }
}
declare namespace EMS.Meter {
    class MeterDetailGrid extends Serenity.EntityGrid<MeterDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeterDetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Meter {
    class MeterTypeDialog extends Serenity.EntityDialog<MeterTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeterTypeForm;
    }
}
declare namespace EMS.Meter {
    class MeterTypeGrid extends Serenity.EntityGrid<MeterTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeterTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Meter {
    class SchedulingDialog extends Serenity.EntityDialog<SchedulingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SchedulingForm;
    }
}
declare namespace EMS.Meter {
    class SchedulingGrid extends Serenity.EntityGrid<SchedulingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SchedulingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Parameter {
    class ParameterDialog extends Serenity.EntityDialog<ParameterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ParameterForm;
    }
}
declare namespace EMS.Parameter {
    class ParameterGrid extends Serenity.EntityGrid<ParameterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ParameterDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Parameter {
    class ParameterGroupDialog extends Serenity.EntityDialog<ParameterGroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ParameterGroupForm;
    }
}
declare namespace EMS.Parameter {
    class ParameterGroupGrid extends Serenity.EntityGrid<ParameterGroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ParameterGroupDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Parameter {
    class ParameterTypeDialog extends Serenity.EntityDialog<ParameterTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ParameterTypeForm;
    }
}
declare namespace EMS.Parameter {
    class ParameterTypeGrid extends Serenity.EntityGrid<ParameterTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ParameterTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Zoning {
    class ApartmentDialog extends Serenity.EntityDialog<ApartmentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ApartmentForm;
    }
}
declare namespace EMS.Zoning {
    class ApartmentGrid extends Serenity.EntityGrid<ApartmentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ApartmentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Zoning {
    class BuildingDialog extends Serenity.EntityDialog<BuildingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BuildingForm;
    }
}
declare namespace EMS.Zoning {
    class BuildingGrid extends Serenity.EntityGrid<BuildingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BuildingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Zoning {
    class CityDialog extends Serenity.EntityDialog<CityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CityForm;
    }
}
declare namespace EMS.Zoning {
    class CityGrid extends Serenity.EntityGrid<CityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CityDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Zoning {
    class CommonLocationDialog extends Serenity.EntityDialog<CommonLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CommonLocationForm;
    }
}
declare namespace EMS.Zoning {
    class CommonLocationGrid extends Serenity.EntityGrid<CommonLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CommonLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Zoning {
    class FloorDialog extends Serenity.EntityDialog<FloorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FloorForm;
    }
}
declare namespace EMS.Zoning {
    class FloorGrid extends Serenity.EntityGrid<FloorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FloorDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Zoning {
    class SectionDialog extends Serenity.EntityDialog<SectionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SectionForm;
    }
}
declare namespace EMS.Zoning {
    class SectionGrid extends Serenity.EntityGrid<SectionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SectionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Zoning {
    class ZoningGroupDialog extends Serenity.EntityDialog<ZoningGroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ZoningGroupForm;
    }
}
declare namespace EMS.Zoning {
    class ZoningGroupGrid extends Serenity.EntityGrid<ZoningGroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ZoningGroupDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace EMS.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace EMS.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
