using Serenity.Navigation;
using MyPages = EMS.Meters.Pages;

[assembly: NavigationLink(int.MaxValue, "Meters/Meter", typeof(MyPages.MeterController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meters/Meter Parameter", typeof(MyPages.MeterParameterController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meters/Meter Type", typeof(MyPages.MeterTypeController), icon: null)]