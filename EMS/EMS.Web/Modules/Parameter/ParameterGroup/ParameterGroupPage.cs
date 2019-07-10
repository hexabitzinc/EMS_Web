
namespace EMS.Parameter.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ParameterGroupRow))]
    public class ParameterGroupController : Controller
    {
        [Route("Parameter/ParameterGroup")]
        public ActionResult Index()
        {
            return View("~/Modules/Parameter/ParameterGroup/ParameterGroupIndex.cshtml");
        }
    }
}