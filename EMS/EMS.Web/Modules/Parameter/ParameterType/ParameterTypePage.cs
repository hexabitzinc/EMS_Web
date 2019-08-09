
namespace EMS.Parameter.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ParameterTypeRow))]
    public class ParameterTypeController : Controller
    {
        [Route("Parameter/ParameterType")]
        public ActionResult Index()
        {
            return View("~/Modules/Parameter/ParameterType/ParameterTypeIndex.cshtml");
        }
    }
}