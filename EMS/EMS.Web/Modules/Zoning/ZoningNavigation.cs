using Serenity.Navigation;
using MyPages = EMS.Zoning.Pages;

[assembly: NavigationLink(int.MaxValue, "Zoning/Building", typeof(MyPages.BuildingController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Zoning/City", typeof(MyPages.CityController), icon: null)]