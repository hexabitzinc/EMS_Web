
namespace EMS.Meter.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeterRow))]
    public class MeterController : Controller
    {
        [Route("Meter/Meter")]
        public ActionResult Index()
        {
            return View("~/Modules/Meter/Meter/MeterIndex.cshtml");
        }
    }
}