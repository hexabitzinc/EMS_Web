
namespace EMS.Meter.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeterDetailRow))]
    public class MeterDetailController : Controller
    {
        [Route("Meter/MeterDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Meter/MeterDetail/MeterDetailIndex.cshtml");
        }
    }
}