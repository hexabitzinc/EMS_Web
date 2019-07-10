
namespace EMS.EMSDevice.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmsParameterRow))]
    public class EmsParameterController : Controller
    {
        [Route("EMSDevice/EmsParameter")]
        public ActionResult Index()
        {
            return View("~/Modules/EMSDevice/EmsParameter/EmsParameterIndex.cshtml");
        }
    }
}