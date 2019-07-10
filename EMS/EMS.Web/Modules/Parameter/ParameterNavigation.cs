using Serenity.Navigation;
using MyPages = EMS.Parameter.Pages;

[assembly: NavigationLink(int.MaxValue, "Parameter/Parameter", typeof(MyPages.ParameterController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Parameter/Parameter Group", typeof(MyPages.ParameterGroupController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Parameter/Parameter Type", typeof(MyPages.ParameterTypeController), icon: null)]