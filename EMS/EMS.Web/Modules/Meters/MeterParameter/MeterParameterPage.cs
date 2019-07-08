
namespace EMS.Meters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeterParameterRow))]
    public class MeterParameterController : Controller
    {
        [Route("Meters/MeterParameter")]
        public ActionResult Index()
        {
            return View("~/Modules/Meters/MeterParameter/MeterParameterIndex.cshtml");
        }
    }
}