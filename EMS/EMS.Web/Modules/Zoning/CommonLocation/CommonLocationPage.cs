
namespace EMS.Zoning.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CommonLocationRow))]
    public class CommonLocationController : Controller
    {
        [Route("Zoning/CommonLocation")]
        public ActionResult Index()
        {
            return View("~/Modules/Zoning/CommonLocation/CommonLocationIndex.cshtml");
        }
    }
}