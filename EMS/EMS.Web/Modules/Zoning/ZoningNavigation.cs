using Serenity.Navigation;
using MyPages = EMS.Zoning.Pages;

[assembly: NavigationLink(int.MaxValue, "Zoning/Apartment", typeof(MyPages.ApartmentController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Zoning/Building", typeof(MyPages.BuildingController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Zoning/City", typeof(MyPages.CityController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Zoning/Common Location", typeof(MyPages.CommonLocationController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Zoning/Floor", typeof(MyPages.FloorController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Zoning/Zoning Group", typeof(MyPages.ZoningGroupController), icon: null)]