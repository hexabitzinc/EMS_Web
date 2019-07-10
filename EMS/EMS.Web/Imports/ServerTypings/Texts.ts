namespace EMS.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace EMSDevice {

            namespace EmsDevice {
                export const AssignedLocation: string;
                export const BuildingAddress: string;
                export const BuildingCityId: string;
                export const BuildingDeleted: string;
                export const BuildingDescription: string;
                export const BuildingId: string;
                export const BuildingName: string;
                export const BuildingStreetAddress: string;
                export const BuildingZipCode: string;
                export const CommunicationMethod: string;
                export const ConsumerAddress: string;
                export const ConsumerDeleted: string;
                export const ConsumerEmail: string;
                export const ConsumerFirstName: string;
                export const ConsumerGender: string;
                export const ConsumerId: string;
                export const ConsumerLastName: string;
                export const ConsumerMobile: string;
                export const ConsumerOtherInformation: string;
                export const ConsumerPhone: string;
                export const Deleted: string;
                export const EmsDeviceId: string;
                export const EmsParameterAddress: string;
                export const EmsParameterDeleted: string;
                export const EmsParameterId: string;
                export const EmsParameterName: string;
                export const EmsParameterNotes: string;
                export const EmsParameterParameterTypeId: string;
                export const EmsParameterValue: string;
                export const EmsSettingAddress: string;
                export const EmsSettingDeleted: string;
                export const EmsSettingId: string;
                export const EmsSettingName: string;
                export const EmsSettingNotes: string;
                export const EmsSettingParameterTypeId: string;
                export const EmsSettingValue: string;
                export const Make: string;
                export const Name: string;
                export const Notes: string;
                export const PhysicalLocation: string;
                export const RegistrationDate: string;
                export const SerialCommunicationSetting: string;
                export const SerialNumber: string;
            }

            namespace EmsParameter {
                export const Address: string;
                export const Deleted: string;
                export const EmsParameterId: string;
                export const Name: string;
                export const Notes: string;
                export const ParameterTypeDeleted: string;
                export const ParameterTypeId: string;
                export const ParameterTypeName: string;
                export const Value: string;
            }

            namespace EmsSetting {
                export const Address: string;
                export const Deleted: string;
                export const EmsSettingId: string;
                export const Name: string;
                export const Notes: string;
                export const ParameterTypeDeleted: string;
                export const ParameterTypeId: string;
                export const ParameterTypeName: string;
                export const Value: string;
            }
        }

        namespace Meter {

            namespace Meter {
                export const ApartmentAddress: string;
                export const ApartmentDeleted: string;
                export const ApartmentDescribtion: string;
                export const ApartmentId: string;
                export const ApartmentName: string;
                export const ApartmentRoomNumber: string;
                export const ApartmentSectionId: string;
                export const ApartmentType: string;
                export const AssignedLocation: string;
                export const CommonLocationBuildingId: string;
                export const CommonLocationDeleted: string;
                export const CommonLocationDescription: string;
                export const CommonLocationId: string;
                export const CommonLocationName: string;
                export const CommunicationMethod: string;
                export const ConsumerAddress: string;
                export const ConsumerDeleted: string;
                export const ConsumerEmail: string;
                export const ConsumerFirstName: string;
                export const ConsumerGender: string;
                export const ConsumerId: string;
                export const ConsumerLastName: string;
                export const ConsumerMobile: string;
                export const ConsumerOtherInformation: string;
                export const ConsumerPhone: string;
                export const Deleted: string;
                export const Make: string;
                export const MeterId: string;
                export const MeterTypeDeleted: string;
                export const MeterTypeId: string;
                export const MeterTypeName: string;
                export const Name: string;
                export const Notes: string;
                export const PhysicalLocation: string;
                export const RegistrationDate: string;
                export const SerialCommunicationSetting: string;
                export const SerialNumber: string;
            }

            namespace MeterParameters {
                export const Deleted: string;
                export const MeterParameterId: string;
                export const ParameterAddress: string;
                export const ParameterDeleted: string;
                export const ParameterGroupDeleted: string;
                export const ParameterGroupId: string;
                export const ParameterGroupName: string;
                export const ParameterId: string;
                export const ParameterName: string;
                export const ParameterNotes: string;
                export const ParameterParameterTypeId: string;
                export const ParameterValue: string;
            }

            namespace MeterType {
                export const Deleted: string;
                export const MeterTypeId: string;
                export const Name: string;
            }
        }

        namespace Parameter {

            namespace Parameter {
                export const Address: string;
                export const Deleted: string;
                export const Name: string;
                export const Notes: string;
                export const ParameterId: string;
                export const ParameterTypeDeleted: string;
                export const ParameterTypeId: string;
                export const ParameterTypeName: string;
                export const Value: string;
            }

            namespace ParameterGroup {
                export const Deleted: string;
                export const Name: string;
                export const ParameterGroupId: string;
            }

            namespace ParameterType {
                export const Deleted: string;
                export const Name: string;
                export const ParameterTypeId: string;
            }
        }

        namespace Zoning {

            namespace Apartment {
                export const Address: string;
                export const ApartmentId: string;
                export const Deleted: string;
                export const Describtion: string;
                export const Name: string;
                export const RoomNumber: string;
                export const SectionDeleted: string;
                export const SectionDescribtion: string;
                export const SectionFloorId: string;
                export const SectionId: string;
                export const SectionName: string;
                export const Type: string;
            }

            namespace Building {
                export const Address: string;
                export const BuildingId: string;
                export const CityDeleted: string;
                export const CityDescription: string;
                export const CityId: string;
                export const CityName: string;
                export const Deleted: string;
                export const Description: string;
                export const Name: string;
                export const StreetAddress: string;
                export const ZipCode: string;
            }

            namespace City {
                export const CityId: string;
                export const Deleted: string;
                export const Description: string;
                export const Name: string;
            }

            namespace CommonLocation {
                export const BuildingAddress: string;
                export const BuildingCityId: string;
                export const BuildingDeleted: string;
                export const BuildingDescription: string;
                export const BuildingId: string;
                export const BuildingName: string;
                export const BuildingStreetAddress: string;
                export const BuildingZipCode: string;
                export const CommonLocationId: string;
                export const Deleted: string;
                export const Description: string;
                export const Name: string;
            }

            namespace Floor {
                export const BuildingAddress: string;
                export const BuildingCityId: string;
                export const BuildingDeleted: string;
                export const BuildingDescription: string;
                export const BuildingId: string;
                export const BuildingName: string;
                export const BuildingStreetAddress: string;
                export const BuildingZipCode: string;
                export const Deleted: string;
                export const Describtion: string;
                export const FloorId: string;
                export const FloorNumber: string;
                export const Name: string;
            }

            namespace ZoningGroup {
                export const Deleted: string;
                export const Name: string;
                export const ZoningGroupId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    EMS['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},EMSDevice:{EmsDevice:{AssignedLocation:1,BuildingAddress:1,BuildingCityId:1,BuildingDeleted:1,BuildingDescription:1,BuildingId:1,BuildingName:1,BuildingStreetAddress:1,BuildingZipCode:1,CommunicationMethod:1,ConsumerAddress:1,ConsumerDeleted:1,ConsumerEmail:1,ConsumerFirstName:1,ConsumerGender:1,ConsumerId:1,ConsumerLastName:1,ConsumerMobile:1,ConsumerOtherInformation:1,ConsumerPhone:1,Deleted:1,EmsDeviceId:1,EmsParameterAddress:1,EmsParameterDeleted:1,EmsParameterId:1,EmsParameterName:1,EmsParameterNotes:1,EmsParameterParameterTypeId:1,EmsParameterValue:1,EmsSettingAddress:1,EmsSettingDeleted:1,EmsSettingId:1,EmsSettingName:1,EmsSettingNotes:1,EmsSettingParameterTypeId:1,EmsSettingValue:1,Make:1,Name:1,Notes:1,PhysicalLocation:1,RegistrationDate:1,SerialCommunicationSetting:1,SerialNumber:1},EmsParameter:{Address:1,Deleted:1,EmsParameterId:1,Name:1,Notes:1,ParameterTypeDeleted:1,ParameterTypeId:1,ParameterTypeName:1,Value:1},EmsSetting:{Address:1,Deleted:1,EmsSettingId:1,Name:1,Notes:1,ParameterTypeDeleted:1,ParameterTypeId:1,ParameterTypeName:1,Value:1}},Meter:{Meter:{ApartmentAddress:1,ApartmentDeleted:1,ApartmentDescribtion:1,ApartmentId:1,ApartmentName:1,ApartmentRoomNumber:1,ApartmentSectionId:1,ApartmentType:1,AssignedLocation:1,CommonLocationBuildingId:1,CommonLocationDeleted:1,CommonLocationDescription:1,CommonLocationId:1,CommonLocationName:1,CommunicationMethod:1,ConsumerAddress:1,ConsumerDeleted:1,ConsumerEmail:1,ConsumerFirstName:1,ConsumerGender:1,ConsumerId:1,ConsumerLastName:1,ConsumerMobile:1,ConsumerOtherInformation:1,ConsumerPhone:1,Deleted:1,Make:1,MeterId:1,MeterTypeDeleted:1,MeterTypeId:1,MeterTypeName:1,Name:1,Notes:1,PhysicalLocation:1,RegistrationDate:1,SerialCommunicationSetting:1,SerialNumber:1},MeterParameters:{Deleted:1,MeterParameterId:1,ParameterAddress:1,ParameterDeleted:1,ParameterGroupDeleted:1,ParameterGroupId:1,ParameterGroupName:1,ParameterId:1,ParameterName:1,ParameterNotes:1,ParameterParameterTypeId:1,ParameterValue:1},MeterType:{Deleted:1,MeterTypeId:1,Name:1}},Parameter:{Parameter:{Address:1,Deleted:1,Name:1,Notes:1,ParameterId:1,ParameterTypeDeleted:1,ParameterTypeId:1,ParameterTypeName:1,Value:1},ParameterGroup:{Deleted:1,Name:1,ParameterGroupId:1},ParameterType:{Deleted:1,Name:1,ParameterTypeId:1}},Zoning:{Apartment:{Address:1,ApartmentId:1,Deleted:1,Describtion:1,Name:1,RoomNumber:1,SectionDeleted:1,SectionDescribtion:1,SectionFloorId:1,SectionId:1,SectionName:1,Type:1},Building:{Address:1,BuildingId:1,CityDeleted:1,CityDescription:1,CityId:1,CityName:1,Deleted:1,Description:1,Name:1,StreetAddress:1,ZipCode:1},City:{CityId:1,Deleted:1,Description:1,Name:1},CommonLocation:{BuildingAddress:1,BuildingCityId:1,BuildingDeleted:1,BuildingDescription:1,BuildingId:1,BuildingName:1,BuildingStreetAddress:1,BuildingZipCode:1,CommonLocationId:1,Deleted:1,Description:1,Name:1},Floor:{BuildingAddress:1,BuildingCityId:1,BuildingDeleted:1,BuildingDescription:1,BuildingId:1,BuildingName:1,BuildingStreetAddress:1,BuildingZipCode:1,Deleted:1,Describtion:1,FloorId:1,FloorNumber:1,Name:1},ZoningGroup:{Deleted:1,Name:1,ZoningGroupId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
