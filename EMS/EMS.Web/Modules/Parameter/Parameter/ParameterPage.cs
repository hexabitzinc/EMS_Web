
namespace EMS.Parameter.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ParameterRow))]
    public class ParameterController : Controller
    {
        [Route("Parameter/Parameter")]
        public ActionResult Index()
        {
            return View("~/Modules/Parameter/Parameter/ParameterIndex.cshtml");
        }
    }
}