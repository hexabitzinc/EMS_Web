﻿var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Consumer;
    (function (Consumer) {
        var ConsumerForm = /** @class */ (function (_super) {
            __extends(ConsumerForm, _super);
            function ConsumerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ConsumerForm.init) {
                    ConsumerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(ConsumerForm, [
                        'FirstName', w0,
                        'LastName', w0,
                        'Gender', w0,
                        'Address', w0,
                        'Phone', w0,
                        'OtherInformation', w0,
                        'Mobile', w0,
                        'Email', w0,
                        'Deleted', w1
                    ]);
                }
                return _this;
            }
            ConsumerForm.formKey = 'Consumer.Consumer';
            return ConsumerForm;
        }(Serenity.PrefixedContext));
        Consumer.ConsumerForm = ConsumerForm;
    })(Consumer = EMS.Consumer || (EMS.Consumer = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Consumer;
    (function (Consumer) {
        var ConsumerRow;
        (function (ConsumerRow) {
            ConsumerRow.idProperty = 'ConsumerId';
            ConsumerRow.nameProperty = 'FirstName';
            ConsumerRow.localTextPrefix = 'Consumer.Consumer';
            ConsumerRow.lookupKey = 'Consumer.Consumer';
            function getLookup() {
                return Q.getLookup('Consumer.Consumer');
            }
            ConsumerRow.getLookup = getLookup;
        })(ConsumerRow = Consumer.ConsumerRow || (Consumer.ConsumerRow = {}));
    })(Consumer = EMS.Consumer || (EMS.Consumer = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Consumer;
    (function (Consumer) {
        var ConsumerService;
        (function (ConsumerService) {
            ConsumerService.baseUrl = 'Consumer/Consumer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ConsumerService[x] = function (r, s, o) {
                    return Q.serviceRequest(ConsumerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ConsumerService = Consumer.ConsumerService || (Consumer.ConsumerService = {}));
    })(Consumer = EMS.Consumer || (EMS.Consumer = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsDeviceForm = /** @class */ (function (_super) {
            __extends(EmsDeviceForm, _super);
            function EmsDeviceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmsDeviceForm.init) {
                    EmsDeviceForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(EmsDeviceForm, [
                        'BuildingId', w0,
                        'EmsParameterId', w0,
                        'EmsSettingId', w0,
                        'ConsumerId', w0,
                        'Name', w1,
                        'SerialNumber', w1,
                        'Make', w1,
                        'PhysicalLocation', w1,
                        'AssignedLocation', w1,
                        'CommunicationMethod', w1,
                        'SerialCommunicationSetting', w1,
                        'RegistrationDate', w2,
                        'Notes', w1,
                        'Deleted', w3
                    ]);
                }
                return _this;
            }
            EmsDeviceForm.formKey = 'EMSDevice.EmsDevice';
            return EmsDeviceForm;
        }(Serenity.PrefixedContext));
        EMSDevice.EmsDeviceForm = EmsDeviceForm;
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsDeviceRow;
        (function (EmsDeviceRow) {
            EmsDeviceRow.idProperty = 'EmsDeviceId';
            EmsDeviceRow.nameProperty = 'Name';
            EmsDeviceRow.localTextPrefix = 'EMSDevice.EmsDevice';
            EmsDeviceRow.lookupKey = 'EMSDevice.EMSDevice';
            function getLookup() {
                return Q.getLookup('EMSDevice.EMSDevice');
            }
            EmsDeviceRow.getLookup = getLookup;
        })(EmsDeviceRow = EMSDevice.EmsDeviceRow || (EMSDevice.EmsDeviceRow = {}));
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsDeviceService;
        (function (EmsDeviceService) {
            EmsDeviceService.baseUrl = 'EMSDevice/EmsDevice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmsDeviceService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmsDeviceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmsDeviceService = EMSDevice.EmsDeviceService || (EMSDevice.EmsDeviceService = {}));
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsParameterForm = /** @class */ (function (_super) {
            __extends(EmsParameterForm, _super);
            function EmsParameterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmsParameterForm.init) {
                    EmsParameterForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(EmsParameterForm, [
                        'ParameterTypeId', w0,
                        'Name', w1,
                        'Value', w1,
                        'Address', w1,
                        'Notes', w1,
                        'Deleted', w2
                    ]);
                }
                return _this;
            }
            EmsParameterForm.formKey = 'EMSDevice.EmsParameter';
            return EmsParameterForm;
        }(Serenity.PrefixedContext));
        EMSDevice.EmsParameterForm = EmsParameterForm;
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsParameterRow;
        (function (EmsParameterRow) {
            EmsParameterRow.idProperty = 'EmsParameterId';
            EmsParameterRow.nameProperty = 'Name';
            EmsParameterRow.localTextPrefix = 'EMSDevice.EmsParameter';
            EmsParameterRow.lookupKey = 'EMSDevice.EMSParameter';
            function getLookup() {
                return Q.getLookup('EMSDevice.EMSParameter');
            }
            EmsParameterRow.getLookup = getLookup;
        })(EmsParameterRow = EMSDevice.EmsParameterRow || (EMSDevice.EmsParameterRow = {}));
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsParameterService;
        (function (EmsParameterService) {
            EmsParameterService.baseUrl = 'EMSDevice/EmsParameter';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmsParameterService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmsParameterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmsParameterService = EMSDevice.EmsParameterService || (EMSDevice.EmsParameterService = {}));
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsSettingForm = /** @class */ (function (_super) {
            __extends(EmsSettingForm, _super);
            function EmsSettingForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmsSettingForm.init) {
                    EmsSettingForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(EmsSettingForm, [
                        'ParameterTypeId', w0,
                        'Name', w1,
                        'Value', w1,
                        'Address', w1,
                        'Notes', w1,
                        'Deleted', w2
                    ]);
                }
                return _this;
            }
            EmsSettingForm.formKey = 'EMSDevice.EmsSetting';
            return EmsSettingForm;
        }(Serenity.PrefixedContext));
        EMSDevice.EmsSettingForm = EmsSettingForm;
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsSettingRow;
        (function (EmsSettingRow) {
            EmsSettingRow.idProperty = 'EmsSettingId';
            EmsSettingRow.nameProperty = 'Name';
            EmsSettingRow.localTextPrefix = 'EMSDevice.EmsSetting';
            EmsSettingRow.lookupKey = 'EMSDevice.EMSSetting';
            function getLookup() {
                return Q.getLookup('EMSDevice.EMSSetting');
            }
            EmsSettingRow.getLookup = getLookup;
        })(EmsSettingRow = EMSDevice.EmsSettingRow || (EMSDevice.EmsSettingRow = {}));
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsSettingService;
        (function (EmsSettingService) {
            EmsSettingService.baseUrl = 'EMSDevice/EmsSetting';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmsSettingService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmsSettingService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmsSettingService = EMSDevice.EmsSettingService || (EMSDevice.EmsSettingService = {}));
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = EMS.Membership || (EMS.Membership = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = EMS.Membership || (EMS.Membership = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = EMS.Membership || (EMS.Membership = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = EMS.Membership || (EMS.Membership = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = EMS.Membership || (EMS.Membership = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterDetailForm = /** @class */ (function (_super) {
            __extends(MeterDetailForm, _super);
            function MeterDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeterDetailForm.init) {
                    MeterDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(MeterDetailForm, [
                        'MeterId', w0,
                        'ParameterGroupId', w0,
                        'ParameterId', w0,
                        'SchedulingId', w1,
                        'ApartmentId', w1,
                        'CommonLocationId', w1,
                        'Value', w2,
                        'Deleted', w3
                    ]);
                }
                return _this;
            }
            MeterDetailForm.formKey = 'Meter.MeterDetail';
            return MeterDetailForm;
        }(Serenity.PrefixedContext));
        Meter.MeterDetailForm = MeterDetailForm;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterDetailRow;
        (function (MeterDetailRow) {
            MeterDetailRow.idProperty = 'MeterDetailId';
            MeterDetailRow.nameProperty = 'Value';
            MeterDetailRow.localTextPrefix = 'Meter.MeterDetail';
            MeterDetailRow.lookupKey = 'Meter.MeterDetail';
            function getLookup() {
                return Q.getLookup('Meter.MeterDetail');
            }
            MeterDetailRow.getLookup = getLookup;
        })(MeterDetailRow = Meter.MeterDetailRow || (Meter.MeterDetailRow = {}));
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterDetailService;
        (function (MeterDetailService) {
            MeterDetailService.baseUrl = 'Meter/MeterDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MeterDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeterDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeterDetailService = Meter.MeterDetailService || (Meter.MeterDetailService = {}));
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterForm = /** @class */ (function (_super) {
            __extends(MeterForm, _super);
            function MeterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeterForm.init) {
                    MeterForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(MeterForm, [
                        'MeterTypeId', w0,
                        'ConsumerId', w0,
                        'Name', w1,
                        'SerialNumber', w1,
                        'Make', w1,
                        'PhysicalLocation', w1,
                        'AssignedLocation', w1,
                        'CommunicationMethod', w1,
                        'SerialCommunicationSetting', w1,
                        'RegistrationDate', w2,
                        'Notes', w1,
                        'Deleted', w3
                    ]);
                }
                return _this;
            }
            MeterForm.formKey = 'Meter.Meter';
            return MeterForm;
        }(Serenity.PrefixedContext));
        Meter.MeterForm = MeterForm;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterRow;
        (function (MeterRow) {
            MeterRow.idProperty = 'MeterId';
            MeterRow.nameProperty = 'Name';
            MeterRow.localTextPrefix = 'Meter.Meter';
            MeterRow.lookupKey = 'Meter.Meter';
            function getLookup() {
                return Q.getLookup('Meter.Meter');
            }
            MeterRow.getLookup = getLookup;
        })(MeterRow = Meter.MeterRow || (Meter.MeterRow = {}));
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterService;
        (function (MeterService) {
            MeterService.baseUrl = 'Meter/Meter';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MeterService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeterService = Meter.MeterService || (Meter.MeterService = {}));
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterTypeForm = /** @class */ (function (_super) {
            __extends(MeterTypeForm, _super);
            function MeterTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeterTypeForm.init) {
                    MeterTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(MeterTypeForm, [
                        'Name', w0,
                        'Deleted', w1
                    ]);
                }
                return _this;
            }
            MeterTypeForm.formKey = 'Meter.MeterType';
            return MeterTypeForm;
        }(Serenity.PrefixedContext));
        Meter.MeterTypeForm = MeterTypeForm;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterTypeRow;
        (function (MeterTypeRow) {
            MeterTypeRow.idProperty = 'MeterTypeId';
            MeterTypeRow.nameProperty = 'Name';
            MeterTypeRow.localTextPrefix = 'Meter.MeterType';
            MeterTypeRow.lookupKey = 'Meter.MeterType';
            function getLookup() {
                return Q.getLookup('Meter.MeterType');
            }
            MeterTypeRow.getLookup = getLookup;
        })(MeterTypeRow = Meter.MeterTypeRow || (Meter.MeterTypeRow = {}));
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterTypeService;
        (function (MeterTypeService) {
            MeterTypeService.baseUrl = 'Meter/MeterType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MeterTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeterTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeterTypeService = Meter.MeterTypeService || (Meter.MeterTypeService = {}));
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var SchedulingForm = /** @class */ (function (_super) {
            __extends(SchedulingForm, _super);
            function SchedulingForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SchedulingForm.init) {
                    SchedulingForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(SchedulingForm, [
                        'Year', w0,
                        'Month', w0,
                        'Day', w0,
                        'Time', w0,
                        'FullDate', w1,
                        'Deleted', w2
                    ]);
                }
                return _this;
            }
            SchedulingForm.formKey = 'Meter.Scheduling';
            return SchedulingForm;
        }(Serenity.PrefixedContext));
        Meter.SchedulingForm = SchedulingForm;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var SchedulingRow;
        (function (SchedulingRow) {
            SchedulingRow.idProperty = 'SchedulingId';
            SchedulingRow.nameProperty = 'Year';
            SchedulingRow.localTextPrefix = 'Meter.Scheduling';
            SchedulingRow.lookupKey = 'Meter.Scheduling';
            function getLookup() {
                return Q.getLookup('Meter.Scheduling');
            }
            SchedulingRow.getLookup = getLookup;
        })(SchedulingRow = Meter.SchedulingRow || (Meter.SchedulingRow = {}));
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var SchedulingService;
        (function (SchedulingService) {
            SchedulingService.baseUrl = 'Meter/Scheduling';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SchedulingService[x] = function (r, s, o) {
                    return Q.serviceRequest(SchedulingService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SchedulingService = Meter.SchedulingService || (Meter.SchedulingService = {}));
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterForm = /** @class */ (function (_super) {
            __extends(ParameterForm, _super);
            function ParameterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ParameterForm.init) {
                    ParameterForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(ParameterForm, [
                        'ParameterTypeId', w0,
                        'Name', w1,
                        'Address', w1,
                        'Notes', w1,
                        'Deleted', w2
                    ]);
                }
                return _this;
            }
            ParameterForm.formKey = 'Parameter.Parameter';
            return ParameterForm;
        }(Serenity.PrefixedContext));
        Parameter.ParameterForm = ParameterForm;
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterGroupForm = /** @class */ (function (_super) {
            __extends(ParameterGroupForm, _super);
            function ParameterGroupForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ParameterGroupForm.init) {
                    ParameterGroupForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(ParameterGroupForm, [
                        'Name', w0,
                        'Deleted', w1
                    ]);
                }
                return _this;
            }
            ParameterGroupForm.formKey = 'Parameter.ParameterGroup';
            return ParameterGroupForm;
        }(Serenity.PrefixedContext));
        Parameter.ParameterGroupForm = ParameterGroupForm;
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterGroupRow;
        (function (ParameterGroupRow) {
            ParameterGroupRow.idProperty = 'ParameterGroupId';
            ParameterGroupRow.nameProperty = 'Name';
            ParameterGroupRow.localTextPrefix = 'Parameter.ParameterGroup';
            ParameterGroupRow.lookupKey = 'Parameter.ParameterGroup';
            function getLookup() {
                return Q.getLookup('Parameter.ParameterGroup');
            }
            ParameterGroupRow.getLookup = getLookup;
        })(ParameterGroupRow = Parameter.ParameterGroupRow || (Parameter.ParameterGroupRow = {}));
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterGroupService;
        (function (ParameterGroupService) {
            ParameterGroupService.baseUrl = 'Parameter/ParameterGroup';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ParameterGroupService[x] = function (r, s, o) {
                    return Q.serviceRequest(ParameterGroupService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ParameterGroupService = Parameter.ParameterGroupService || (Parameter.ParameterGroupService = {}));
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterRow;
        (function (ParameterRow) {
            ParameterRow.idProperty = 'ParameterId';
            ParameterRow.nameProperty = 'Name';
            ParameterRow.localTextPrefix = 'Parameter.Parameter';
            ParameterRow.lookupKey = 'Parameter.Parameter';
            function getLookup() {
                return Q.getLookup('Parameter.Parameter');
            }
            ParameterRow.getLookup = getLookup;
        })(ParameterRow = Parameter.ParameterRow || (Parameter.ParameterRow = {}));
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterService;
        (function (ParameterService) {
            ParameterService.baseUrl = 'Parameter/Parameter';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ParameterService[x] = function (r, s, o) {
                    return Q.serviceRequest(ParameterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ParameterService = Parameter.ParameterService || (Parameter.ParameterService = {}));
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterTypeForm = /** @class */ (function (_super) {
            __extends(ParameterTypeForm, _super);
            function ParameterTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ParameterTypeForm.init) {
                    ParameterTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(ParameterTypeForm, [
                        'Name', w0,
                        'Deleted', w1
                    ]);
                }
                return _this;
            }
            ParameterTypeForm.formKey = 'Parameter.ParameterType';
            return ParameterTypeForm;
        }(Serenity.PrefixedContext));
        Parameter.ParameterTypeForm = ParameterTypeForm;
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterTypeRow;
        (function (ParameterTypeRow) {
            ParameterTypeRow.idProperty = 'ParameterTypeId';
            ParameterTypeRow.nameProperty = 'Name';
            ParameterTypeRow.localTextPrefix = 'Parameter.ParameterType';
            ParameterTypeRow.lookupKey = 'Parameter.ParameterType';
            function getLookup() {
                return Q.getLookup('Parameter.ParameterType');
            }
            ParameterTypeRow.getLookup = getLookup;
        })(ParameterTypeRow = Parameter.ParameterTypeRow || (Parameter.ParameterTypeRow = {}));
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterTypeService;
        (function (ParameterTypeService) {
            ParameterTypeService.baseUrl = 'Parameter/ParameterType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ParameterTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(ParameterTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ParameterTypeService = Parameter.ParameterTypeService || (Parameter.ParameterTypeService = {}));
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Texts;
    (function (Texts) {
        EMS['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Consumer: { Consumer: { Address: 1, ConsumerId: 1, Deleted: 1, Email: 1, FirstName: 1, Gender: 1, LastName: 1, Mobile: 1, OtherInformation: 1, Phone: 1 } }, EMSDevice: { EmsDevice: { AssignedLocation: 1, BuildingAddress: 1, BuildingCityId: 1, BuildingDeleted: 1, BuildingDescription: 1, BuildingId: 1, BuildingName: 1, BuildingStreetAddress: 1, BuildingZipCode: 1, CommunicationMethod: 1, ConsumerAddress: 1, ConsumerDeleted: 1, ConsumerEmail: 1, ConsumerFirstName: 1, ConsumerGender: 1, ConsumerId: 1, ConsumerLastName: 1, ConsumerMobile: 1, ConsumerOtherInformation: 1, ConsumerPhone: 1, Deleted: 1, EmsDeviceId: 1, EmsParameterAddress: 1, EmsParameterDeleted: 1, EmsParameterId: 1, EmsParameterName: 1, EmsParameterNotes: 1, EmsParameterParameterTypeId: 1, EmsParameterValue: 1, EmsSettingAddress: 1, EmsSettingDeleted: 1, EmsSettingId: 1, EmsSettingName: 1, EmsSettingNotes: 1, EmsSettingParameterTypeId: 1, EmsSettingValue: 1, Make: 1, Name: 1, Notes: 1, PhysicalLocation: 1, RegistrationDate: 1, SerialCommunicationSetting: 1, SerialNumber: 1 }, EmsParameter: { Address: 1, Deleted: 1, EmsParameterId: 1, Name: 1, Notes: 1, ParameterTypeDeleted: 1, ParameterTypeId: 1, ParameterTypeName: 1, Value: 1 }, EmsSetting: { Address: 1, Deleted: 1, EmsSettingId: 1, Name: 1, Notes: 1, ParameterTypeDeleted: 1, ParameterTypeId: 1, ParameterTypeName: 1, Value: 1 } }, Meter: { Meter: { AssignedLocation: 1, CommunicationMethod: 1, ConsumerAddress: 1, ConsumerDeleted: 1, ConsumerEmail: 1, ConsumerFirstName: 1, ConsumerGender: 1, ConsumerId: 1, ConsumerLastName: 1, ConsumerMobile: 1, ConsumerOtherInformation: 1, ConsumerPhone: 1, Deleted: 1, Make: 1, MeterId: 1, MeterTypeDeleted: 1, MeterTypeId: 1, MeterTypeName: 1, Name: 1, Notes: 1, PhysicalLocation: 1, RegistrationDate: 1, SerialCommunicationSetting: 1, SerialNumber: 1 }, MeterDetail: { ApartmentAddress: 1, ApartmentDeleted: 1, ApartmentDescription: 1, ApartmentId: 1, ApartmentName: 1, ApartmentRoomNumber: 1, ApartmentSectionId: 1, ApartmentType: 1, CommonLocationBuildingId: 1, CommonLocationDeleted: 1, CommonLocationDescription: 1, CommonLocationId: 1, CommonLocationName: 1, Deleted: 1, MeterAssignedLocation: 1, MeterCommunicationMethod: 1, MeterConsumerId: 1, MeterDeleted: 1, MeterDetailId: 1, MeterId: 1, MeterMake: 1, MeterMeterTypeId: 1, MeterName: 1, MeterNotes: 1, MeterPhysicalLocation: 1, MeterRegistrationDate: 1, MeterSerialCommunicationSetting: 1, MeterSerialNumber: 1, ParameterAddress: 1, ParameterDeleted: 1, ParameterGroupDeleted: 1, ParameterGroupId: 1, ParameterGroupName: 1, ParameterId: 1, ParameterName: 1, ParameterNotes: 1, ParameterParameterTypeId: 1, SchedulingDay: 1, SchedulingDeleted: 1, SchedulingFullDate: 1, SchedulingId: 1, SchedulingMonth: 1, SchedulingTime: 1, SchedulingYear: 1, Value: 1 }, MeterType: { Deleted: 1, MeterTypeId: 1, Name: 1 }, Scheduling: { Day: 1, Deleted: 1, FullDate: 1, Month: 1, SchedulingId: 1, Time: 1, Year: 1 } }, Parameter: { Parameter: { Address: 1, Deleted: 1, Name: 1, Notes: 1, ParameterId: 1, ParameterTypeDeleted: 1, ParameterTypeId: 1, ParameterTypeName: 1 }, ParameterGroup: { Deleted: 1, Name: 1, ParameterGroupId: 1 }, ParameterType: { Deleted: 1, Name: 1, ParameterTypeId: 1 } }, Zoning: { Apartment: { Address: 1, ApartmentId: 1, Deleted: 1, Description: 1, Name: 1, RoomNumber: 1, SectionDeleted: 1, SectionDescription: 1, SectionFloorId: 1, SectionId: 1, SectionName: 1, Type: 1 }, Building: { Address: 1, BuildingId: 1, CityDeleted: 1, CityDescription: 1, CityId: 1, CityName: 1, Deleted: 1, Description: 1, Name: 1, StreetAddress: 1, ZipCode: 1 }, City: { CityId: 1, Deleted: 1, Description: 1, Name: 1 }, CommonLocation: { BuildingAddress: 1, BuildingCityId: 1, BuildingDeleted: 1, BuildingDescription: 1, BuildingId: 1, BuildingName: 1, BuildingStreetAddress: 1, BuildingZipCode: 1, CommonLocationId: 1, Deleted: 1, Description: 1, Name: 1 }, Floor: { BuildingAddress: 1, BuildingCityId: 1, BuildingDeleted: 1, BuildingDescription: 1, BuildingId: 1, BuildingName: 1, BuildingStreetAddress: 1, BuildingZipCode: 1, Deleted: 1, Description: 1, FloorId: 1, FloorNumber: 1, Name: 1 }, Section: { Deleted: 1, Description: 1, FloorBuildingId: 1, FloorDeleted: 1, FloorDescription: 1, FloorFloorNumber: 1, FloorId: 1, FloorName: 1, Name: 1, SectionId: 1 }, ZoningGroup: { Deleted: 1, Name: 1, ZoningGroupId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = EMS.Texts || (EMS.Texts = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ApartmentForm = /** @class */ (function (_super) {
            __extends(ApartmentForm, _super);
            function ApartmentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ApartmentForm.init) {
                    ApartmentForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(ApartmentForm, [
                        'SectionId', w0,
                        'Name', w1,
                        'Type', w1,
                        'Address', w1,
                        'RoomNumber', w1,
                        'Description', w1,
                        'Deleted', w2
                    ]);
                }
                return _this;
            }
            ApartmentForm.formKey = 'Zoning.Apartment';
            return ApartmentForm;
        }(Serenity.PrefixedContext));
        Zoning.ApartmentForm = ApartmentForm;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ApartmentRow;
        (function (ApartmentRow) {
            ApartmentRow.idProperty = 'ApartmentId';
            ApartmentRow.nameProperty = 'Name';
            ApartmentRow.localTextPrefix = 'Zoning.Apartment';
            ApartmentRow.lookupKey = 'Zoning.Apartment';
            function getLookup() {
                return Q.getLookup('Zoning.Apartment');
            }
            ApartmentRow.getLookup = getLookup;
        })(ApartmentRow = Zoning.ApartmentRow || (Zoning.ApartmentRow = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ApartmentService;
        (function (ApartmentService) {
            ApartmentService.baseUrl = 'Zoning/Apartment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ApartmentService[x] = function (r, s, o) {
                    return Q.serviceRequest(ApartmentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ApartmentService = Zoning.ApartmentService || (Zoning.ApartmentService = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var BuildingForm = /** @class */ (function (_super) {
            __extends(BuildingForm, _super);
            function BuildingForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BuildingForm.init) {
                    BuildingForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(BuildingForm, [
                        'CityId', w0,
                        'Name', w1,
                        'ZipCode', w1,
                        'Address', w1,
                        'StreetAddress', w1,
                        'Description', w1,
                        'Deleted', w2
                    ]);
                }
                return _this;
            }
            BuildingForm.formKey = 'Zoning.Building';
            return BuildingForm;
        }(Serenity.PrefixedContext));
        Zoning.BuildingForm = BuildingForm;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var BuildingRow;
        (function (BuildingRow) {
            BuildingRow.idProperty = 'BuildingId';
            BuildingRow.nameProperty = 'Name';
            BuildingRow.localTextPrefix = 'Zoning.Building';
            BuildingRow.lookupKey = 'Zoning.Building';
            function getLookup() {
                return Q.getLookup('Zoning.Building');
            }
            BuildingRow.getLookup = getLookup;
        })(BuildingRow = Zoning.BuildingRow || (Zoning.BuildingRow = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var BuildingService;
        (function (BuildingService) {
            BuildingService.baseUrl = 'Zoning/Building';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BuildingService[x] = function (r, s, o) {
                    return Q.serviceRequest(BuildingService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BuildingService = Zoning.BuildingService || (Zoning.BuildingService = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CityForm = /** @class */ (function (_super) {
            __extends(CityForm, _super);
            function CityForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CityForm.init) {
                    CityForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(CityForm, [
                        'Name', w0,
                        'Description', w0,
                        'Deleted', w1
                    ]);
                }
                return _this;
            }
            CityForm.formKey = 'Zoning.City';
            return CityForm;
        }(Serenity.PrefixedContext));
        Zoning.CityForm = CityForm;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CityRow;
        (function (CityRow) {
            CityRow.idProperty = 'CityId';
            CityRow.nameProperty = 'Name';
            CityRow.localTextPrefix = 'Zoning.City';
            CityRow.lookupKey = 'Zoning.City';
            function getLookup() {
                return Q.getLookup('Zoning.City');
            }
            CityRow.getLookup = getLookup;
        })(CityRow = Zoning.CityRow || (Zoning.CityRow = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CityService;
        (function (CityService) {
            CityService.baseUrl = 'Zoning/City';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CityService[x] = function (r, s, o) {
                    return Q.serviceRequest(CityService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CityService = Zoning.CityService || (Zoning.CityService = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CommonLocationForm = /** @class */ (function (_super) {
            __extends(CommonLocationForm, _super);
            function CommonLocationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CommonLocationForm.init) {
                    CommonLocationForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(CommonLocationForm, [
                        'BuildingId', w0,
                        'Name', w1,
                        'Description', w1,
                        'Deleted', w2
                    ]);
                }
                return _this;
            }
            CommonLocationForm.formKey = 'Zoning.CommonLocation';
            return CommonLocationForm;
        }(Serenity.PrefixedContext));
        Zoning.CommonLocationForm = CommonLocationForm;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CommonLocationRow;
        (function (CommonLocationRow) {
            CommonLocationRow.idProperty = 'CommonLocationId';
            CommonLocationRow.nameProperty = 'Name';
            CommonLocationRow.localTextPrefix = 'Zoning.CommonLocation';
            CommonLocationRow.lookupKey = 'Zoning.CommonLocation';
            function getLookup() {
                return Q.getLookup('Zoning.CommonLocation');
            }
            CommonLocationRow.getLookup = getLookup;
        })(CommonLocationRow = Zoning.CommonLocationRow || (Zoning.CommonLocationRow = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CommonLocationService;
        (function (CommonLocationService) {
            CommonLocationService.baseUrl = 'Zoning/CommonLocation';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CommonLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(CommonLocationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CommonLocationService = Zoning.CommonLocationService || (Zoning.CommonLocationService = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var FloorForm = /** @class */ (function (_super) {
            __extends(FloorForm, _super);
            function FloorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FloorForm.init) {
                    FloorForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(FloorForm, [
                        'BuildingId', w0,
                        'Name', w1,
                        'FloorNumber', w2,
                        'Description', w1,
                        'Deleted', w3
                    ]);
                }
                return _this;
            }
            FloorForm.formKey = 'Zoning.Floor';
            return FloorForm;
        }(Serenity.PrefixedContext));
        Zoning.FloorForm = FloorForm;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var FloorRow;
        (function (FloorRow) {
            FloorRow.idProperty = 'FloorId';
            FloorRow.nameProperty = 'Name';
            FloorRow.localTextPrefix = 'Zoning.Floor';
            FloorRow.lookupKey = 'Zoning.Floor';
            function getLookup() {
                return Q.getLookup('Zoning.Floor');
            }
            FloorRow.getLookup = getLookup;
        })(FloorRow = Zoning.FloorRow || (Zoning.FloorRow = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var FloorService;
        (function (FloorService) {
            FloorService.baseUrl = 'Zoning/Floor';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FloorService[x] = function (r, s, o) {
                    return Q.serviceRequest(FloorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FloorService = Zoning.FloorService || (Zoning.FloorService = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var SectionForm = /** @class */ (function (_super) {
            __extends(SectionForm, _super);
            function SectionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SectionForm.init) {
                    SectionForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(SectionForm, [
                        'FloorId', w0,
                        'Name', w1,
                        'Description', w1,
                        'Deleted', w2
                    ]);
                }
                return _this;
            }
            SectionForm.formKey = 'Zoning.Section';
            return SectionForm;
        }(Serenity.PrefixedContext));
        Zoning.SectionForm = SectionForm;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var SectionRow;
        (function (SectionRow) {
            SectionRow.idProperty = 'SectionId';
            SectionRow.nameProperty = 'Name';
            SectionRow.localTextPrefix = 'Zoning.Section';
            SectionRow.lookupKey = 'Zoning.Section';
            function getLookup() {
                return Q.getLookup('Zoning.Section');
            }
            SectionRow.getLookup = getLookup;
        })(SectionRow = Zoning.SectionRow || (Zoning.SectionRow = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var SectionService;
        (function (SectionService) {
            SectionService.baseUrl = 'Zoning/Section';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SectionService[x] = function (r, s, o) {
                    return Q.serviceRequest(SectionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SectionService = Zoning.SectionService || (Zoning.SectionService = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ZoningGroupForm = /** @class */ (function (_super) {
            __extends(ZoningGroupForm, _super);
            function ZoningGroupForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ZoningGroupForm.init) {
                    ZoningGroupForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(ZoningGroupForm, [
                        'Name', w0,
                        'Deleted', w1
                    ]);
                }
                return _this;
            }
            ZoningGroupForm.formKey = 'Zoning.ZoningGroup';
            return ZoningGroupForm;
        }(Serenity.PrefixedContext));
        Zoning.ZoningGroupForm = ZoningGroupForm;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ZoningGroupRow;
        (function (ZoningGroupRow) {
            ZoningGroupRow.idProperty = 'ZoningGroupId';
            ZoningGroupRow.nameProperty = 'Name';
            ZoningGroupRow.localTextPrefix = 'Zoning.ZoningGroup';
        })(ZoningGroupRow = Zoning.ZoningGroupRow || (Zoning.ZoningGroupRow = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ZoningGroupService;
        (function (ZoningGroupService) {
            ZoningGroupService.baseUrl = 'Zoning/ZoningGroup';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ZoningGroupService[x] = function (r, s, o) {
                    return Q.serviceRequest(ZoningGroupService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ZoningGroupService = Zoning.ZoningGroupService || (Zoning.ZoningGroupService = {}));
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = EMS.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = EMS.LanguageList || (EMS.LanguageList = {}));
})(EMS || (EMS = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var EMS;
(function (EMS) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('EMS');
        Serenity.EntityDialog.defaultLanguageList = EMS.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = EMS.ScriptInitialization || (EMS.ScriptInitialization = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = EMS.Administration || (EMS.Administration = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    EMS.BasicProgressDialog = BasicProgressDialog;
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new EMS.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = EMS.DialogUtils || (EMS.DialogUtils = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    EMS.StaticTextBlock = StaticTextBlock;
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = EMS.Common || (EMS.Common = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Consumer;
    (function (Consumer) {
        var ConsumerDialog = /** @class */ (function (_super) {
            __extends(ConsumerDialog, _super);
            function ConsumerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Consumer.ConsumerForm(_this.idPrefix);
                return _this;
            }
            ConsumerDialog.prototype.getFormKey = function () { return Consumer.ConsumerForm.formKey; };
            ConsumerDialog.prototype.getIdProperty = function () { return Consumer.ConsumerRow.idProperty; };
            ConsumerDialog.prototype.getLocalTextPrefix = function () { return Consumer.ConsumerRow.localTextPrefix; };
            ConsumerDialog.prototype.getNameProperty = function () { return Consumer.ConsumerRow.nameProperty; };
            ConsumerDialog.prototype.getService = function () { return Consumer.ConsumerService.baseUrl; };
            ConsumerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ConsumerDialog);
            return ConsumerDialog;
        }(Serenity.EntityDialog));
        Consumer.ConsumerDialog = ConsumerDialog;
    })(Consumer = EMS.Consumer || (EMS.Consumer = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Consumer;
    (function (Consumer) {
        var ConsumerGrid = /** @class */ (function (_super) {
            __extends(ConsumerGrid, _super);
            function ConsumerGrid(container) {
                return _super.call(this, container) || this;
            }
            ConsumerGrid.prototype.getColumnsKey = function () { return 'Consumer.Consumer'; };
            ConsumerGrid.prototype.getDialogType = function () { return Consumer.ConsumerDialog; };
            ConsumerGrid.prototype.getIdProperty = function () { return Consumer.ConsumerRow.idProperty; };
            ConsumerGrid.prototype.getLocalTextPrefix = function () { return Consumer.ConsumerRow.localTextPrefix; };
            ConsumerGrid.prototype.getService = function () { return Consumer.ConsumerService.baseUrl; };
            ConsumerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConsumerGrid);
            return ConsumerGrid;
        }(Serenity.EntityGrid));
        Consumer.ConsumerGrid = ConsumerGrid;
    })(Consumer = EMS.Consumer || (EMS.Consumer = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsDeviceDialog = /** @class */ (function (_super) {
            __extends(EmsDeviceDialog, _super);
            function EmsDeviceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new EMSDevice.EmsDeviceForm(_this.idPrefix);
                return _this;
            }
            EmsDeviceDialog.prototype.getFormKey = function () { return EMSDevice.EmsDeviceForm.formKey; };
            EmsDeviceDialog.prototype.getIdProperty = function () { return EMSDevice.EmsDeviceRow.idProperty; };
            EmsDeviceDialog.prototype.getLocalTextPrefix = function () { return EMSDevice.EmsDeviceRow.localTextPrefix; };
            EmsDeviceDialog.prototype.getNameProperty = function () { return EMSDevice.EmsDeviceRow.nameProperty; };
            EmsDeviceDialog.prototype.getService = function () { return EMSDevice.EmsDeviceService.baseUrl; };
            EmsDeviceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmsDeviceDialog);
            return EmsDeviceDialog;
        }(Serenity.EntityDialog));
        EMSDevice.EmsDeviceDialog = EmsDeviceDialog;
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsDeviceGrid = /** @class */ (function (_super) {
            __extends(EmsDeviceGrid, _super);
            function EmsDeviceGrid(container) {
                return _super.call(this, container) || this;
            }
            EmsDeviceGrid.prototype.getColumnsKey = function () { return 'EMSDevice.EmsDevice'; };
            EmsDeviceGrid.prototype.getDialogType = function () { return EMSDevice.EmsDeviceDialog; };
            EmsDeviceGrid.prototype.getIdProperty = function () { return EMSDevice.EmsDeviceRow.idProperty; };
            EmsDeviceGrid.prototype.getLocalTextPrefix = function () { return EMSDevice.EmsDeviceRow.localTextPrefix; };
            EmsDeviceGrid.prototype.getService = function () { return EMSDevice.EmsDeviceService.baseUrl; };
            EmsDeviceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmsDeviceGrid);
            return EmsDeviceGrid;
        }(Serenity.EntityGrid));
        EMSDevice.EmsDeviceGrid = EmsDeviceGrid;
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsParameterDialog = /** @class */ (function (_super) {
            __extends(EmsParameterDialog, _super);
            function EmsParameterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new EMSDevice.EmsParameterForm(_this.idPrefix);
                return _this;
            }
            EmsParameterDialog.prototype.getFormKey = function () { return EMSDevice.EmsParameterForm.formKey; };
            EmsParameterDialog.prototype.getIdProperty = function () { return EMSDevice.EmsParameterRow.idProperty; };
            EmsParameterDialog.prototype.getLocalTextPrefix = function () { return EMSDevice.EmsParameterRow.localTextPrefix; };
            EmsParameterDialog.prototype.getNameProperty = function () { return EMSDevice.EmsParameterRow.nameProperty; };
            EmsParameterDialog.prototype.getService = function () { return EMSDevice.EmsParameterService.baseUrl; };
            EmsParameterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmsParameterDialog);
            return EmsParameterDialog;
        }(Serenity.EntityDialog));
        EMSDevice.EmsParameterDialog = EmsParameterDialog;
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsParameterGrid = /** @class */ (function (_super) {
            __extends(EmsParameterGrid, _super);
            function EmsParameterGrid(container) {
                return _super.call(this, container) || this;
            }
            EmsParameterGrid.prototype.getColumnsKey = function () { return 'EMSDevice.EmsParameter'; };
            EmsParameterGrid.prototype.getDialogType = function () { return EMSDevice.EmsParameterDialog; };
            EmsParameterGrid.prototype.getIdProperty = function () { return EMSDevice.EmsParameterRow.idProperty; };
            EmsParameterGrid.prototype.getLocalTextPrefix = function () { return EMSDevice.EmsParameterRow.localTextPrefix; };
            EmsParameterGrid.prototype.getService = function () { return EMSDevice.EmsParameterService.baseUrl; };
            EmsParameterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmsParameterGrid);
            return EmsParameterGrid;
        }(Serenity.EntityGrid));
        EMSDevice.EmsParameterGrid = EmsParameterGrid;
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsSettingDialog = /** @class */ (function (_super) {
            __extends(EmsSettingDialog, _super);
            function EmsSettingDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new EMSDevice.EmsSettingForm(_this.idPrefix);
                return _this;
            }
            EmsSettingDialog.prototype.getFormKey = function () { return EMSDevice.EmsSettingForm.formKey; };
            EmsSettingDialog.prototype.getIdProperty = function () { return EMSDevice.EmsSettingRow.idProperty; };
            EmsSettingDialog.prototype.getLocalTextPrefix = function () { return EMSDevice.EmsSettingRow.localTextPrefix; };
            EmsSettingDialog.prototype.getNameProperty = function () { return EMSDevice.EmsSettingRow.nameProperty; };
            EmsSettingDialog.prototype.getService = function () { return EMSDevice.EmsSettingService.baseUrl; };
            EmsSettingDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmsSettingDialog);
            return EmsSettingDialog;
        }(Serenity.EntityDialog));
        EMSDevice.EmsSettingDialog = EmsSettingDialog;
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var EMSDevice;
    (function (EMSDevice) {
        var EmsSettingGrid = /** @class */ (function (_super) {
            __extends(EmsSettingGrid, _super);
            function EmsSettingGrid(container) {
                return _super.call(this, container) || this;
            }
            EmsSettingGrid.prototype.getColumnsKey = function () { return 'EMSDevice.EmsSetting'; };
            EmsSettingGrid.prototype.getDialogType = function () { return EMSDevice.EmsSettingDialog; };
            EmsSettingGrid.prototype.getIdProperty = function () { return EMSDevice.EmsSettingRow.idProperty; };
            EmsSettingGrid.prototype.getLocalTextPrefix = function () { return EMSDevice.EmsSettingRow.localTextPrefix; };
            EmsSettingGrid.prototype.getService = function () { return EMSDevice.EmsSettingService.baseUrl; };
            EmsSettingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmsSettingGrid);
            return EmsSettingGrid;
        }(Serenity.EntityGrid));
        EMSDevice.EmsSettingGrid = EmsSettingGrid;
    })(EMSDevice = EMS.EMSDevice || (EMS.EMSDevice = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterDialog = /** @class */ (function (_super) {
            __extends(MeterDialog, _super);
            function MeterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meter.MeterForm(_this.idPrefix);
                return _this;
            }
            MeterDialog.prototype.getFormKey = function () { return Meter.MeterForm.formKey; };
            MeterDialog.prototype.getIdProperty = function () { return Meter.MeterRow.idProperty; };
            MeterDialog.prototype.getLocalTextPrefix = function () { return Meter.MeterRow.localTextPrefix; };
            MeterDialog.prototype.getNameProperty = function () { return Meter.MeterRow.nameProperty; };
            MeterDialog.prototype.getService = function () { return Meter.MeterService.baseUrl; };
            MeterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeterDialog);
            return MeterDialog;
        }(Serenity.EntityDialog));
        Meter.MeterDialog = MeterDialog;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterGrid = /** @class */ (function (_super) {
            __extends(MeterGrid, _super);
            function MeterGrid(container) {
                return _super.call(this, container) || this;
            }
            MeterGrid.prototype.getColumnsKey = function () { return 'Meter.Meter'; };
            MeterGrid.prototype.getDialogType = function () { return Meter.MeterDialog; };
            MeterGrid.prototype.getIdProperty = function () { return Meter.MeterRow.idProperty; };
            MeterGrid.prototype.getLocalTextPrefix = function () { return Meter.MeterRow.localTextPrefix; };
            MeterGrid.prototype.getService = function () { return Meter.MeterService.baseUrl; };
            MeterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeterGrid);
            return MeterGrid;
        }(Serenity.EntityGrid));
        Meter.MeterGrid = MeterGrid;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterDetailDialog = /** @class */ (function (_super) {
            __extends(MeterDetailDialog, _super);
            function MeterDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meter.MeterDetailForm(_this.idPrefix);
                return _this;
            }
            MeterDetailDialog.prototype.getFormKey = function () { return Meter.MeterDetailForm.formKey; };
            MeterDetailDialog.prototype.getIdProperty = function () { return Meter.MeterDetailRow.idProperty; };
            MeterDetailDialog.prototype.getLocalTextPrefix = function () { return Meter.MeterDetailRow.localTextPrefix; };
            MeterDetailDialog.prototype.getNameProperty = function () { return Meter.MeterDetailRow.nameProperty; };
            MeterDetailDialog.prototype.getService = function () { return Meter.MeterDetailService.baseUrl; };
            MeterDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeterDetailDialog);
            return MeterDetailDialog;
        }(Serenity.EntityDialog));
        Meter.MeterDetailDialog = MeterDetailDialog;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterDetailGrid = /** @class */ (function (_super) {
            __extends(MeterDetailGrid, _super);
            function MeterDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            MeterDetailGrid.prototype.getColumnsKey = function () { return 'Meter.MeterDetail'; };
            MeterDetailGrid.prototype.getDialogType = function () { return Meter.MeterDetailDialog; };
            MeterDetailGrid.prototype.getIdProperty = function () { return Meter.MeterDetailRow.idProperty; };
            MeterDetailGrid.prototype.getLocalTextPrefix = function () { return Meter.MeterDetailRow.localTextPrefix; };
            MeterDetailGrid.prototype.getService = function () { return Meter.MeterDetailService.baseUrl; };
            MeterDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeterDetailGrid);
            return MeterDetailGrid;
        }(Serenity.EntityGrid));
        Meter.MeterDetailGrid = MeterDetailGrid;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterTypeDialog = /** @class */ (function (_super) {
            __extends(MeterTypeDialog, _super);
            function MeterTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meter.MeterTypeForm(_this.idPrefix);
                return _this;
            }
            MeterTypeDialog.prototype.getFormKey = function () { return Meter.MeterTypeForm.formKey; };
            MeterTypeDialog.prototype.getIdProperty = function () { return Meter.MeterTypeRow.idProperty; };
            MeterTypeDialog.prototype.getLocalTextPrefix = function () { return Meter.MeterTypeRow.localTextPrefix; };
            MeterTypeDialog.prototype.getNameProperty = function () { return Meter.MeterTypeRow.nameProperty; };
            MeterTypeDialog.prototype.getService = function () { return Meter.MeterTypeService.baseUrl; };
            MeterTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeterTypeDialog);
            return MeterTypeDialog;
        }(Serenity.EntityDialog));
        Meter.MeterTypeDialog = MeterTypeDialog;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var MeterTypeGrid = /** @class */ (function (_super) {
            __extends(MeterTypeGrid, _super);
            function MeterTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            MeterTypeGrid.prototype.getColumnsKey = function () { return 'Meter.MeterType'; };
            MeterTypeGrid.prototype.getDialogType = function () { return Meter.MeterTypeDialog; };
            MeterTypeGrid.prototype.getIdProperty = function () { return Meter.MeterTypeRow.idProperty; };
            MeterTypeGrid.prototype.getLocalTextPrefix = function () { return Meter.MeterTypeRow.localTextPrefix; };
            MeterTypeGrid.prototype.getService = function () { return Meter.MeterTypeService.baseUrl; };
            MeterTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeterTypeGrid);
            return MeterTypeGrid;
        }(Serenity.EntityGrid));
        Meter.MeterTypeGrid = MeterTypeGrid;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var SchedulingDialog = /** @class */ (function (_super) {
            __extends(SchedulingDialog, _super);
            function SchedulingDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meter.SchedulingForm(_this.idPrefix);
                return _this;
            }
            SchedulingDialog.prototype.getFormKey = function () { return Meter.SchedulingForm.formKey; };
            SchedulingDialog.prototype.getIdProperty = function () { return Meter.SchedulingRow.idProperty; };
            SchedulingDialog.prototype.getLocalTextPrefix = function () { return Meter.SchedulingRow.localTextPrefix; };
            SchedulingDialog.prototype.getNameProperty = function () { return Meter.SchedulingRow.nameProperty; };
            SchedulingDialog.prototype.getService = function () { return Meter.SchedulingService.baseUrl; };
            SchedulingDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SchedulingDialog);
            return SchedulingDialog;
        }(Serenity.EntityDialog));
        Meter.SchedulingDialog = SchedulingDialog;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Meter;
    (function (Meter) {
        var SchedulingGrid = /** @class */ (function (_super) {
            __extends(SchedulingGrid, _super);
            function SchedulingGrid(container) {
                return _super.call(this, container) || this;
            }
            SchedulingGrid.prototype.getColumnsKey = function () { return 'Meter.Scheduling'; };
            SchedulingGrid.prototype.getDialogType = function () { return Meter.SchedulingDialog; };
            SchedulingGrid.prototype.getIdProperty = function () { return Meter.SchedulingRow.idProperty; };
            SchedulingGrid.prototype.getLocalTextPrefix = function () { return Meter.SchedulingRow.localTextPrefix; };
            SchedulingGrid.prototype.getService = function () { return Meter.SchedulingService.baseUrl; };
            SchedulingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SchedulingGrid);
            return SchedulingGrid;
        }(Serenity.EntityGrid));
        Meter.SchedulingGrid = SchedulingGrid;
    })(Meter = EMS.Meter || (EMS.Meter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterDialog = /** @class */ (function (_super) {
            __extends(ParameterDialog, _super);
            function ParameterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Parameter.ParameterForm(_this.idPrefix);
                return _this;
            }
            ParameterDialog.prototype.getFormKey = function () { return Parameter.ParameterForm.formKey; };
            ParameterDialog.prototype.getIdProperty = function () { return Parameter.ParameterRow.idProperty; };
            ParameterDialog.prototype.getLocalTextPrefix = function () { return Parameter.ParameterRow.localTextPrefix; };
            ParameterDialog.prototype.getNameProperty = function () { return Parameter.ParameterRow.nameProperty; };
            ParameterDialog.prototype.getService = function () { return Parameter.ParameterService.baseUrl; };
            ParameterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ParameterDialog);
            return ParameterDialog;
        }(Serenity.EntityDialog));
        Parameter.ParameterDialog = ParameterDialog;
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterGrid = /** @class */ (function (_super) {
            __extends(ParameterGrid, _super);
            function ParameterGrid(container) {
                return _super.call(this, container) || this;
            }
            ParameterGrid.prototype.getColumnsKey = function () { return 'Parameter.Parameter'; };
            ParameterGrid.prototype.getDialogType = function () { return Parameter.ParameterDialog; };
            ParameterGrid.prototype.getIdProperty = function () { return Parameter.ParameterRow.idProperty; };
            ParameterGrid.prototype.getLocalTextPrefix = function () { return Parameter.ParameterRow.localTextPrefix; };
            ParameterGrid.prototype.getService = function () { return Parameter.ParameterService.baseUrl; };
            ParameterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ParameterGrid);
            return ParameterGrid;
        }(Serenity.EntityGrid));
        Parameter.ParameterGrid = ParameterGrid;
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterGroupDialog = /** @class */ (function (_super) {
            __extends(ParameterGroupDialog, _super);
            function ParameterGroupDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Parameter.ParameterGroupForm(_this.idPrefix);
                return _this;
            }
            ParameterGroupDialog.prototype.getFormKey = function () { return Parameter.ParameterGroupForm.formKey; };
            ParameterGroupDialog.prototype.getIdProperty = function () { return Parameter.ParameterGroupRow.idProperty; };
            ParameterGroupDialog.prototype.getLocalTextPrefix = function () { return Parameter.ParameterGroupRow.localTextPrefix; };
            ParameterGroupDialog.prototype.getNameProperty = function () { return Parameter.ParameterGroupRow.nameProperty; };
            ParameterGroupDialog.prototype.getService = function () { return Parameter.ParameterGroupService.baseUrl; };
            ParameterGroupDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ParameterGroupDialog);
            return ParameterGroupDialog;
        }(Serenity.EntityDialog));
        Parameter.ParameterGroupDialog = ParameterGroupDialog;
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterGroupGrid = /** @class */ (function (_super) {
            __extends(ParameterGroupGrid, _super);
            function ParameterGroupGrid(container) {
                return _super.call(this, container) || this;
            }
            ParameterGroupGrid.prototype.getColumnsKey = function () { return 'Parameter.ParameterGroup'; };
            ParameterGroupGrid.prototype.getDialogType = function () { return Parameter.ParameterGroupDialog; };
            ParameterGroupGrid.prototype.getIdProperty = function () { return Parameter.ParameterGroupRow.idProperty; };
            ParameterGroupGrid.prototype.getLocalTextPrefix = function () { return Parameter.ParameterGroupRow.localTextPrefix; };
            ParameterGroupGrid.prototype.getService = function () { return Parameter.ParameterGroupService.baseUrl; };
            ParameterGroupGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ParameterGroupGrid);
            return ParameterGroupGrid;
        }(Serenity.EntityGrid));
        Parameter.ParameterGroupGrid = ParameterGroupGrid;
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterTypeDialog = /** @class */ (function (_super) {
            __extends(ParameterTypeDialog, _super);
            function ParameterTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Parameter.ParameterTypeForm(_this.idPrefix);
                return _this;
            }
            ParameterTypeDialog.prototype.getFormKey = function () { return Parameter.ParameterTypeForm.formKey; };
            ParameterTypeDialog.prototype.getIdProperty = function () { return Parameter.ParameterTypeRow.idProperty; };
            ParameterTypeDialog.prototype.getLocalTextPrefix = function () { return Parameter.ParameterTypeRow.localTextPrefix; };
            ParameterTypeDialog.prototype.getNameProperty = function () { return Parameter.ParameterTypeRow.nameProperty; };
            ParameterTypeDialog.prototype.getService = function () { return Parameter.ParameterTypeService.baseUrl; };
            ParameterTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ParameterTypeDialog);
            return ParameterTypeDialog;
        }(Serenity.EntityDialog));
        Parameter.ParameterTypeDialog = ParameterTypeDialog;
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Parameter;
    (function (Parameter) {
        var ParameterTypeGrid = /** @class */ (function (_super) {
            __extends(ParameterTypeGrid, _super);
            function ParameterTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            ParameterTypeGrid.prototype.getColumnsKey = function () { return 'Parameter.ParameterType'; };
            ParameterTypeGrid.prototype.getDialogType = function () { return Parameter.ParameterTypeDialog; };
            ParameterTypeGrid.prototype.getIdProperty = function () { return Parameter.ParameterTypeRow.idProperty; };
            ParameterTypeGrid.prototype.getLocalTextPrefix = function () { return Parameter.ParameterTypeRow.localTextPrefix; };
            ParameterTypeGrid.prototype.getService = function () { return Parameter.ParameterTypeService.baseUrl; };
            ParameterTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ParameterTypeGrid);
            return ParameterTypeGrid;
        }(Serenity.EntityGrid));
        Parameter.ParameterTypeGrid = ParameterTypeGrid;
    })(Parameter = EMS.Parameter || (EMS.Parameter = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ApartmentDialog = /** @class */ (function (_super) {
            __extends(ApartmentDialog, _super);
            function ApartmentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Zoning.ApartmentForm(_this.idPrefix);
                return _this;
            }
            ApartmentDialog.prototype.getFormKey = function () { return Zoning.ApartmentForm.formKey; };
            ApartmentDialog.prototype.getIdProperty = function () { return Zoning.ApartmentRow.idProperty; };
            ApartmentDialog.prototype.getLocalTextPrefix = function () { return Zoning.ApartmentRow.localTextPrefix; };
            ApartmentDialog.prototype.getNameProperty = function () { return Zoning.ApartmentRow.nameProperty; };
            ApartmentDialog.prototype.getService = function () { return Zoning.ApartmentService.baseUrl; };
            ApartmentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ApartmentDialog);
            return ApartmentDialog;
        }(Serenity.EntityDialog));
        Zoning.ApartmentDialog = ApartmentDialog;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ApartmentGrid = /** @class */ (function (_super) {
            __extends(ApartmentGrid, _super);
            function ApartmentGrid(container) {
                return _super.call(this, container) || this;
            }
            ApartmentGrid.prototype.getColumnsKey = function () { return 'Zoning.Apartment'; };
            ApartmentGrid.prototype.getDialogType = function () { return Zoning.ApartmentDialog; };
            ApartmentGrid.prototype.getIdProperty = function () { return Zoning.ApartmentRow.idProperty; };
            ApartmentGrid.prototype.getLocalTextPrefix = function () { return Zoning.ApartmentRow.localTextPrefix; };
            ApartmentGrid.prototype.getService = function () { return Zoning.ApartmentService.baseUrl; };
            ApartmentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ApartmentGrid);
            return ApartmentGrid;
        }(Serenity.EntityGrid));
        Zoning.ApartmentGrid = ApartmentGrid;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var BuildingDialog = /** @class */ (function (_super) {
            __extends(BuildingDialog, _super);
            function BuildingDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Zoning.BuildingForm(_this.idPrefix);
                return _this;
            }
            BuildingDialog.prototype.getFormKey = function () { return Zoning.BuildingForm.formKey; };
            BuildingDialog.prototype.getIdProperty = function () { return Zoning.BuildingRow.idProperty; };
            BuildingDialog.prototype.getLocalTextPrefix = function () { return Zoning.BuildingRow.localTextPrefix; };
            BuildingDialog.prototype.getNameProperty = function () { return Zoning.BuildingRow.nameProperty; };
            BuildingDialog.prototype.getService = function () { return Zoning.BuildingService.baseUrl; };
            BuildingDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BuildingDialog);
            return BuildingDialog;
        }(Serenity.EntityDialog));
        Zoning.BuildingDialog = BuildingDialog;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var BuildingGrid = /** @class */ (function (_super) {
            __extends(BuildingGrid, _super);
            function BuildingGrid(container) {
                return _super.call(this, container) || this;
            }
            BuildingGrid.prototype.getColumnsKey = function () { return 'Zoning.Building'; };
            BuildingGrid.prototype.getDialogType = function () { return Zoning.BuildingDialog; };
            BuildingGrid.prototype.getIdProperty = function () { return Zoning.BuildingRow.idProperty; };
            BuildingGrid.prototype.getLocalTextPrefix = function () { return Zoning.BuildingRow.localTextPrefix; };
            BuildingGrid.prototype.getService = function () { return Zoning.BuildingService.baseUrl; };
            BuildingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BuildingGrid);
            return BuildingGrid;
        }(Serenity.EntityGrid));
        Zoning.BuildingGrid = BuildingGrid;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CityDialog = /** @class */ (function (_super) {
            __extends(CityDialog, _super);
            function CityDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Zoning.CityForm(_this.idPrefix);
                return _this;
            }
            CityDialog.prototype.getFormKey = function () { return Zoning.CityForm.formKey; };
            CityDialog.prototype.getIdProperty = function () { return Zoning.CityRow.idProperty; };
            CityDialog.prototype.getLocalTextPrefix = function () { return Zoning.CityRow.localTextPrefix; };
            CityDialog.prototype.getNameProperty = function () { return Zoning.CityRow.nameProperty; };
            CityDialog.prototype.getService = function () { return Zoning.CityService.baseUrl; };
            CityDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CityDialog);
            return CityDialog;
        }(Serenity.EntityDialog));
        Zoning.CityDialog = CityDialog;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CityGrid = /** @class */ (function (_super) {
            __extends(CityGrid, _super);
            function CityGrid(container) {
                return _super.call(this, container) || this;
            }
            CityGrid.prototype.getColumnsKey = function () { return 'Zoning.City'; };
            CityGrid.prototype.getDialogType = function () { return Zoning.CityDialog; };
            CityGrid.prototype.getIdProperty = function () { return Zoning.CityRow.idProperty; };
            CityGrid.prototype.getLocalTextPrefix = function () { return Zoning.CityRow.localTextPrefix; };
            CityGrid.prototype.getService = function () { return Zoning.CityService.baseUrl; };
            CityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CityGrid);
            return CityGrid;
        }(Serenity.EntityGrid));
        Zoning.CityGrid = CityGrid;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CommonLocationDialog = /** @class */ (function (_super) {
            __extends(CommonLocationDialog, _super);
            function CommonLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Zoning.CommonLocationForm(_this.idPrefix);
                return _this;
            }
            CommonLocationDialog.prototype.getFormKey = function () { return Zoning.CommonLocationForm.formKey; };
            CommonLocationDialog.prototype.getIdProperty = function () { return Zoning.CommonLocationRow.idProperty; };
            CommonLocationDialog.prototype.getLocalTextPrefix = function () { return Zoning.CommonLocationRow.localTextPrefix; };
            CommonLocationDialog.prototype.getNameProperty = function () { return Zoning.CommonLocationRow.nameProperty; };
            CommonLocationDialog.prototype.getService = function () { return Zoning.CommonLocationService.baseUrl; };
            CommonLocationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CommonLocationDialog);
            return CommonLocationDialog;
        }(Serenity.EntityDialog));
        Zoning.CommonLocationDialog = CommonLocationDialog;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var CommonLocationGrid = /** @class */ (function (_super) {
            __extends(CommonLocationGrid, _super);
            function CommonLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            CommonLocationGrid.prototype.getColumnsKey = function () { return 'Zoning.CommonLocation'; };
            CommonLocationGrid.prototype.getDialogType = function () { return Zoning.CommonLocationDialog; };
            CommonLocationGrid.prototype.getIdProperty = function () { return Zoning.CommonLocationRow.idProperty; };
            CommonLocationGrid.prototype.getLocalTextPrefix = function () { return Zoning.CommonLocationRow.localTextPrefix; };
            CommonLocationGrid.prototype.getService = function () { return Zoning.CommonLocationService.baseUrl; };
            CommonLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CommonLocationGrid);
            return CommonLocationGrid;
        }(Serenity.EntityGrid));
        Zoning.CommonLocationGrid = CommonLocationGrid;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var FloorDialog = /** @class */ (function (_super) {
            __extends(FloorDialog, _super);
            function FloorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Zoning.FloorForm(_this.idPrefix);
                return _this;
            }
            FloorDialog.prototype.getFormKey = function () { return Zoning.FloorForm.formKey; };
            FloorDialog.prototype.getIdProperty = function () { return Zoning.FloorRow.idProperty; };
            FloorDialog.prototype.getLocalTextPrefix = function () { return Zoning.FloorRow.localTextPrefix; };
            FloorDialog.prototype.getNameProperty = function () { return Zoning.FloorRow.nameProperty; };
            FloorDialog.prototype.getService = function () { return Zoning.FloorService.baseUrl; };
            FloorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FloorDialog);
            return FloorDialog;
        }(Serenity.EntityDialog));
        Zoning.FloorDialog = FloorDialog;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var FloorGrid = /** @class */ (function (_super) {
            __extends(FloorGrid, _super);
            function FloorGrid(container) {
                return _super.call(this, container) || this;
            }
            FloorGrid.prototype.getColumnsKey = function () { return 'Zoning.Floor'; };
            FloorGrid.prototype.getDialogType = function () { return Zoning.FloorDialog; };
            FloorGrid.prototype.getIdProperty = function () { return Zoning.FloorRow.idProperty; };
            FloorGrid.prototype.getLocalTextPrefix = function () { return Zoning.FloorRow.localTextPrefix; };
            FloorGrid.prototype.getService = function () { return Zoning.FloorService.baseUrl; };
            FloorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FloorGrid);
            return FloorGrid;
        }(Serenity.EntityGrid));
        Zoning.FloorGrid = FloorGrid;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var SectionDialog = /** @class */ (function (_super) {
            __extends(SectionDialog, _super);
            function SectionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Zoning.SectionForm(_this.idPrefix);
                return _this;
            }
            SectionDialog.prototype.getFormKey = function () { return Zoning.SectionForm.formKey; };
            SectionDialog.prototype.getIdProperty = function () { return Zoning.SectionRow.idProperty; };
            SectionDialog.prototype.getLocalTextPrefix = function () { return Zoning.SectionRow.localTextPrefix; };
            SectionDialog.prototype.getNameProperty = function () { return Zoning.SectionRow.nameProperty; };
            SectionDialog.prototype.getService = function () { return Zoning.SectionService.baseUrl; };
            SectionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SectionDialog);
            return SectionDialog;
        }(Serenity.EntityDialog));
        Zoning.SectionDialog = SectionDialog;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var SectionGrid = /** @class */ (function (_super) {
            __extends(SectionGrid, _super);
            function SectionGrid(container) {
                return _super.call(this, container) || this;
            }
            SectionGrid.prototype.getColumnsKey = function () { return 'Zoning.Section'; };
            SectionGrid.prototype.getDialogType = function () { return Zoning.SectionDialog; };
            SectionGrid.prototype.getIdProperty = function () { return Zoning.SectionRow.idProperty; };
            SectionGrid.prototype.getLocalTextPrefix = function () { return Zoning.SectionRow.localTextPrefix; };
            SectionGrid.prototype.getService = function () { return Zoning.SectionService.baseUrl; };
            SectionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SectionGrid);
            return SectionGrid;
        }(Serenity.EntityGrid));
        Zoning.SectionGrid = SectionGrid;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ZoningGroupDialog = /** @class */ (function (_super) {
            __extends(ZoningGroupDialog, _super);
            function ZoningGroupDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Zoning.ZoningGroupForm(_this.idPrefix);
                return _this;
            }
            ZoningGroupDialog.prototype.getFormKey = function () { return Zoning.ZoningGroupForm.formKey; };
            ZoningGroupDialog.prototype.getIdProperty = function () { return Zoning.ZoningGroupRow.idProperty; };
            ZoningGroupDialog.prototype.getLocalTextPrefix = function () { return Zoning.ZoningGroupRow.localTextPrefix; };
            ZoningGroupDialog.prototype.getNameProperty = function () { return Zoning.ZoningGroupRow.nameProperty; };
            ZoningGroupDialog.prototype.getService = function () { return Zoning.ZoningGroupService.baseUrl; };
            ZoningGroupDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ZoningGroupDialog);
            return ZoningGroupDialog;
        }(Serenity.EntityDialog));
        Zoning.ZoningGroupDialog = ZoningGroupDialog;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Zoning;
    (function (Zoning) {
        var ZoningGroupGrid = /** @class */ (function (_super) {
            __extends(ZoningGroupGrid, _super);
            function ZoningGroupGrid(container) {
                return _super.call(this, container) || this;
            }
            ZoningGroupGrid.prototype.getColumnsKey = function () { return 'Zoning.ZoningGroup'; };
            ZoningGroupGrid.prototype.getDialogType = function () { return Zoning.ZoningGroupDialog; };
            ZoningGroupGrid.prototype.getIdProperty = function () { return Zoning.ZoningGroupRow.idProperty; };
            ZoningGroupGrid.prototype.getLocalTextPrefix = function () { return Zoning.ZoningGroupRow.localTextPrefix; };
            ZoningGroupGrid.prototype.getService = function () { return Zoning.ZoningGroupService.baseUrl; };
            ZoningGroupGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ZoningGroupGrid);
            return ZoningGroupGrid;
        }(Serenity.EntityGrid));
        Zoning.ZoningGroupGrid = ZoningGroupGrid;
    })(Zoning = EMS.Zoning || (EMS.Zoning = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = EMS.Authorization || (EMS.Authorization = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = EMS.Membership || (EMS.Membership = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = EMS.Membership || (EMS.Membership = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = EMS.Membership || (EMS.Membership = {}));
})(EMS || (EMS = {}));
var EMS;
(function (EMS) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = EMS.Membership || (EMS.Membership = {}));
})(EMS || (EMS = {}));
//# sourceMappingURL=EMS.Web.js.map