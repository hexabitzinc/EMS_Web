
namespace EMS.Meters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeterRow))]
    public class MeterController : Controller
    {
        [Route("Meters/Meter")]
        public ActionResult Index()
        {
            return View("~/Modules/Meters/Meter/MeterIndex.cshtml");
        }
    }
}