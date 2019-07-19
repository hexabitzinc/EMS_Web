using Serenity.Navigation;
using Administration = EMS.Administration.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(2000, "Zoning", url: "", permission: "", icon: "fa fa-building")]
[assembly: NavigationLink(3000, "EMSDevice", url: "", permission: "", icon: "fa fa-hdd-o")]
[assembly: NavigationLink(3000, "Parameter", url: "", permission: "", icon: "fa fa-cog")]
[assembly: NavigationLink(3000, "Meter", url: "", permission: "", icon: "fa fa-bullseye")]

