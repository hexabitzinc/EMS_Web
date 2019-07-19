using Serenity.Navigation;
using MyPages = EMS.Meter.Pages;

[assembly: NavigationLink(int.MaxValue, "Meter/Meter", typeof(MyPages.MeterController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meter/Meter Type", typeof(MyPages.MeterTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meter/Meter Detail", typeof(MyPages.MeterDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meter/Scheduling", typeof(MyPages.SchedulingController), icon: null)]