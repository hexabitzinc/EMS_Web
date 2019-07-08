
namespace EMS.Zoning.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FloorRow))]
    public class FloorController : Controller
    {
        [Route("Zoning/Floor")]
        public ActionResult Index()
        {
            return View("~/Modules/Zoning/Floor/FloorIndex.cshtml");
        }
    }
}