using Serenity.Navigation;
using MyPages = EMS.EMSDevice.Pages;

[assembly: NavigationLink(int.MaxValue, "EMSDevice/Ems Setting", typeof(MyPages.EmsSettingController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "EMSDevice/Ems Parameter", typeof(MyPages.EmsParameterController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "EMSDevice/Ems Device", typeof(MyPages.EmsDeviceController), icon: null)]