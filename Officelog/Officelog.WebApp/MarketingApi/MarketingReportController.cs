using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Officelog.Domain.Marketinglog;
using Officelog.Domain.Reports;
using Officelog.Domain.UserProfileLog;
using Officelog.WebApp.UserProfileApi;
using OfficeLog.Persistence;

namespace Officelog.WebApp.MarketingApi
{
    [Produces("application/json")]
    [Route("api/MarketingReport")]
    public class MarketingReportController : UserProfileController
    {
        private readonly IReadModelDatabase _database;

        public MarketingReportController(IReadModelDatabase database,IMapper mapper,
                                        IUserProfileRepository userProfileRepository, 
                                        IUnitOfWork unitOfWork) : base( mapper, database,
                                      userProfileRepository, 
                                      unitOfWork)

        {
            _database = database;
        }

        [HttpGet]
        public IActionResult GetMarketingReports()
        {
            var totalServiceInterested = _database.Marketings.Where(m => m.UserProfileId == UserProfileId).Count(ts=>ts.ServiceInterested=="Yes");

            var totalSoftwareInterested = _database.Marketings.Where(m => m.UserProfileId == UserProfileId).Count(ts => ts.SoftwareInterested =="Yes");

            return Ok(new MarketingReport{

                TotalServiceInterested = totalServiceInterested,
                TotalSoftwareInterested = totalSoftwareInterested
            });
        }

         [HttpGet("Converted")]

         public IActionResult GetConvertedReports()
         {
            var totalConversions = _database.Marketings.Where(c => c.UserProfileId == UserProfileId).Count(tc=> tc.ConversionStatus == ConversionStatus.Achieved);

            return Ok(new ConvertedReport{
                TotalConversions = totalConversions
            });
         }

    }
}