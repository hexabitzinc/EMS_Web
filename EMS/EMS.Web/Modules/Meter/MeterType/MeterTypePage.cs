
namespace EMS.Meter.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeterTypeRow))]
    public class MeterTypeController : Controller
    {
        [Route("Meter/MeterType")]
        public ActionResult Index()
        {
            return View("~/Modules/Meter/MeterType/MeterTypeIndex.cshtml");
        }
    }
}