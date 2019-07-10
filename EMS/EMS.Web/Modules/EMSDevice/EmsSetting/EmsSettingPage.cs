
namespace EMS.EMSDevice.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmsSettingRow))]
    public class EmsSettingController : Controller
    {
        [Route("EMSDevice/EmsSetting")]
        public ActionResult Index()
        {
            return View("~/Modules/EMSDevice/EmsSetting/EmsSettingIndex.cshtml");
        }
    }
}