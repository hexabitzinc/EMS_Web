
namespace EMS.Meter.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SchedulingRow))]
    public class SchedulingController : Controller
    {
        [Route("Meter/Scheduling")]
        public ActionResult Index()
        {
            return View("~/Modules/Meter/Scheduling/SchedulingIndex.cshtml");
        }
    }
}