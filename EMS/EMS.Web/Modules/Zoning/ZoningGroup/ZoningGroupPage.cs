
namespace EMS.Zoning.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ZoningGroupRow))]
    public class ZoningGroupController : Controller
    {
        [Route("Zoning/ZoningGroup")]
        public ActionResult Index()
        {
            return View("~/Modules/Zoning/ZoningGroup/ZoningGroupIndex.cshtml");
        }
    }
}