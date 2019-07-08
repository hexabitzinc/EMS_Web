
namespace EMS.Meters.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeterTypeRow))]
    public class MeterTypeController : Controller
    {
        [Route("Meters/MeterType")]
        public ActionResult Index()
        {
            return View("~/Modules/Meters/MeterType/MeterTypeIndex.cshtml");
        }
    }
}