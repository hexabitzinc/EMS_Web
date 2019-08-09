
namespace EMS.Consumer.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ConsumerRow))]
    public class ConsumerController : Controller
    {
        [Route("Consumer/Consumer")]
        public ActionResult Index()
        {
            return View("~/Modules/Consumer/Consumer/ConsumerIndex.cshtml");
        }
    }
}