using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Officelog.Domain.Marketinglog;
using Officelog.Domain.Reports;
using Officelog.WebApp.AdminReportingApi.Class;
using OfficeLog.Persistence;

namespace Officelog.WebApp.AdminReportingApi
{
    [Produces("application/json")]
    [Route("api/AdminUserReport")]
    public class AdminUserwiseReportingController : Controller
    {
        private readonly IReadModelDatabase _database;
               

        public AdminUserwiseReportingController(IReadModelDatabase database)
        {
            _database = database;
        }
        
        
        [HttpGet("Companies")]
           public  IActionResult GetCompanyReports(string UserProfileId)
           
        {
            var userProfileId = _database.UserProfiles.SingleOrDefault(a=>a.Id == UserProfileId);

          var totalVisits = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tv=>tv.VisitorType == "Client"
                                                     || tv.VisitorType =="Franchise"
                                                     || tv.VisitorType == "First"
                                                     || tv.VisitorType == "Second Or Third"
                                                     );
        
          var totalClientVisits = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tc => tc.VisitorType == "Client");
          var totalFirstVisits = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tc => tc.VisitorType == "First");
          var totalFranchiseVisits = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tc => tc.VisitorType == "Franchise");
          var totalSecondOrThirdVisits = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tc => tc.VisitorType == "Second Or Third");
        
          var totalBadQueryRating = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tb => tb.QueryHandling == "Bad");
          var totalGoodQueryRating = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tb => tb.QueryHandling == "Good");
          var totalVeryGoodQueryRating = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tb => tb.QueryHandling == "Very Good");
          var totalExcellentRating = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tb => tb.QueryHandling == "Excellent");
          
          var totalBadServiceRating = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tb => tb.ServiceProvided == "Bad");
          var totalGoodServiceRating = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tb => tb.ServiceProvided == "Good");
          var totalVeryGoodServiceRating = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tb => tb.ServiceProvided == "Very Good");
          var totalExcellentServiceRating = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(tb => tb.ServiceProvided == "Excellent");

          var totalSoftwareInterested = _database.Companies.Where(c => c.UserProfileId == UserProfileId).Count(ts => ts.SoftwareInterested == "Yes");


          return Ok (new CompanyReport{
              TotalVisits = totalVisits,
              TotalClientVisits = totalClientVisits,
              TotalFirstVisits = totalFirstVisits,
              TotalFranchiseVisits = totalFranchiseVisits,
              TotalSecondOrThirdVisits = totalSecondOrThirdVisits,

              TotalBadQueryRating = totalBadQueryRating,
              TotalGoodQueryRating = totalGoodQueryRating,
              TotalVeryGoodQueryRating = totalGoodQueryRating,
              TotalExcellentQueryRating = totalExcellentRating,

              TotalBadServiceRating = totalBadServiceRating,
              TotalGoodServiceRating = totalGoodServiceRating,
              TotalVeryGoodServiceRating = totalVeryGoodServiceRating,
              TotalExcellentServiceRating = totalExcellentServiceRating,

              TotalSoftwareInterested = totalSoftwareInterested

          });
}

        [HttpGet("Marketings")]

          public IActionResult GetMarketingReports(string UserProfileId)
        {
            var userProfileId = _database.UserProfiles.SingleOrDefault(a=>a.Id == UserProfileId);

            var totalServiceInterested = _database.Marketings.Where(m => m.UserProfileId == UserProfileId).Count(ts=>ts.ServiceInterested=="Yes");

            var totalSoftwareInterested = _database.Marketings.Where(m => m.UserProfileId == UserProfileId).Count(ts => ts.SoftwareInterested =="Yes");

               var averagePriceOfSoftware = _database.Marketings.Where(m => m.UserProfileId == UserProfileId).Average(m=> m.Fee);
            return Ok(new AdminConsolidatedMarketingReport{

                TotalServiceInterested = totalServiceInterested,
                TotalSoftwareInterested = totalSoftwareInterested,
                AveragePriceOfSoftware = averagePriceOfSoftware,
            });
        }

        [HttpGet("Conversions")]
         public IActionResult GetConvertedReports(string UserProfileId)
         {
             var userProfileId = _database.UserProfiles.SingleOrDefault(a=>a.Id == UserProfileId);
            var totalConversions = _database.Marketings.Where(c => c.UserProfileId == UserProfileId).Count(tc=> tc.ConversionStatus == ConversionStatus.Achieved);
             
            return Ok(new AdminConversionConsolidatedReport{
                TotalConversions = totalConversions
            });
         }

    
    
    }
}