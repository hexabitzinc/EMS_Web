
namespace EMS.Meter.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeterParametersRow))]
    public class MeterParametersController : Controller
    {
        [Route("Meter/MeterParameters")]
        public ActionResult Index()
        {
            return View("~/Modules/Meter/MeterParameters/MeterParametersIndex.cshtml");
        }
    }
}