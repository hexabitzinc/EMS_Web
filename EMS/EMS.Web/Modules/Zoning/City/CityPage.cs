
namespace EMS.Zoning.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CityRow))]
    public class CityController : Controller
    {
        [Route("Zoning/City")]
        public ActionResult Index()
        {
            return View("~/Modules/Zoning/City/CityIndex.cshtml");
        }
    }
}