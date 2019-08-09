
namespace EMS.EMSDevice.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmsDeviceRow))]
    public class EmsDeviceController : Controller
    {
        [Route("EMSDevice/EmsDevice")]
        public ActionResult Index()
        {
            return View("~/Modules/EMSDevice/EmsDevice/EmsDeviceIndex.cshtml");
        }
    }
}