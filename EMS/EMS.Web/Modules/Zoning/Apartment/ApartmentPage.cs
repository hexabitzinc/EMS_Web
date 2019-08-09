
namespace EMS.Zoning.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ApartmentRow))]
    public class ApartmentController : Controller
    {
        [Route("Zoning/Apartment")]
        public ActionResult Index()
        {
            return View("~/Modules/Zoning/Apartment/ApartmentIndex.cshtml");
        }
    }
}