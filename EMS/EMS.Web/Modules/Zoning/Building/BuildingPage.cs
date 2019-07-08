
namespace EMS.Zoning.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BuildingRow))]
    public class BuildingController : Controller
    {
        [Route("Zoning/Building")]
        public ActionResult Index()
        {
            return View("~/Modules/Zoning/Building/BuildingIndex.cshtml");
        }
    }
}