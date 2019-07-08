
namespace EMS.Zoning.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SectionRow))]
    public class SectionController : Controller
    {
        [Route("Zoning/Section")]
        public ActionResult Index()
        {
            return View("~/Modules/Zoning/Section/SectionIndex.cshtml");
        }
    }
}