using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Companylog;
using Officelog.Domain.UserProfileLog;
using Officelog.WebApp.UserProfileApi;
using OfficeLog.Persistence;

namespace Officelog.WebApp.CompanyApi
{
    [Produces("application/json")]
    [Route("api/Companies")]
    public class CompanyController : UserProfileController
    {
        private readonly ICompanyRepository _companyRepository;
        private readonly IMapper _mapper;
        private readonly IReadModelDatabase _database;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserProfileRepository _userProfileRepository;
        public CompanyController(ICompanyRepository companyRepository, IMapper mapper, 
                                IReadModelDatabase database, IUnitOfWork unitOfWork, 
                                IUserProfileRepository userProfileRepository):
                                 base( mapper, database,
                                      userProfileRepository, 
                                      unitOfWork)
        {
            _database = database;
            _mapper = mapper;
            _companyRepository = companyRepository;
            _unitOfWork = unitOfWork;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public async Task<IEnumerable<CompanyResource>> GetCompanies(DateTime fromDate,DateTime toDate)
        {
            var companies = await _database.
                                    Companies
                                    .Where(co=>co.AdminId==AdminId)
                                    .Where(co=>co.UserProfileId==UserProfileId)
                                    .Where(co => co.Date.Date >= fromDate.Date && co.Date.Date <= toDate.Date)
                                    .ToListAsync();
            
            return _mapper.Map<List<Company>, List<CompanyResource>>(companies.Where(co => co.IsActive).ToList());
        }

        [HttpGet("{id}")]

        public async Task<SaveCompanyResource> GetById(int id)
        {
             var company = await _companyRepository.GetAsync(id, UserProfileId);

             return _mapper.Map<Company, SaveCompanyResource>(company);
        }

        [HttpPost]

        public async Task<IActionResult> NewCompany([FromBody] SaveCompanyResource model){

        if(!ModelState.IsValid)
        return BadRequest(ModelState);

        var company = new Company ( model.Name, model.ContactNumber,  model.QueryHandling,
                         model.ServiceProvided,  model.VisitorType,
                         model.SoftwareInterested,  model.RateUs, 
                         model.SuggestionForYes, model.SuggestionForNo,model.Date,model.RateUsForNo, UserProfileId, AdminId
);
      _companyRepository.Add(company);

      await _unitOfWork.CompleteAsync();
      return Ok(_mapper.Map<Company, CompanyResource>(company));
  }
  
        [HttpPut("{id}")]

        public async Task<IActionResult> UpdateCompany(int id, [FromBody] SaveCompanyResource model)
        {
              if(!ModelState.IsValid)
        return BadRequest(ModelState);    

         var companyFromDb = await _companyRepository.GetAsync(id, UserProfileId);
         if(companyFromDb == null)
         {
             return NotFound();
 }

   companyFromDb.Modify( model.Name, model.ContactNumber,  model.QueryHandling,
                         model.ServiceProvided,  model.VisitorType,
                        model.SoftwareInterested,  model.RateUs, 
                         model.SuggestionForYes, model.SuggestionForNo,model.RateUsForNo);

            await _unitOfWork.CompleteAsync();
            return Ok(_mapper.Map<Company,CompanyResource>(companyFromDb));
           

         } 

    [HttpDelete("{id}")]

    public async Task<IActionResult> Delete (int id)

    {
        var companyFromDb = await _companyRepository.GetAsync(id, UserProfileId);
          if(companyFromDb == null)
         {
             return NotFound();
 }
        companyFromDb.Delete();
        await _unitOfWork.CompleteAsync();
        return Ok();
}



    }
}