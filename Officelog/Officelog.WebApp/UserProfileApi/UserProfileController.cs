using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.UserProfileLog;
using OfficeLog.Persistence;

namespace Officelog.WebApp.UserProfileApi
{ 
    [Produces("application/json")]
    
    [Route("api/UserProfile")]
    [Authorize]
    public class UserProfileController:Controller
    {
        private readonly IMapper _mappper;
        private readonly IReadModelDatabase _database;
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly IUnitOfWork _unitOfWork;

        protected string UserProfileId => GetCurrentUserProfileId();
        protected int AdminId => GetAdminId();

        private int GetAdminId()
        {
           return 1;
        }

        public UserProfileController(IMapper mappper, IReadModelDatabase database,
                                     IUserProfileRepository userProfileRepository, 
                                     IUnitOfWork unitOfWork   )
        {
            _mappper = mappper;
            _database = database;
            _userProfileRepository = userProfileRepository;
            _unitOfWork = unitOfWork;
        }
            private string GetCurrentUserProfileId(){

                      var userProfileId = _database.UserProfiles.SingleAsync(t => t.Subject == User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value).Result;

            return userProfileId.Id;

        
    }

        [HttpGet("Profile")]

        public async Task<UserProfileResource> GetUserProfileById()

        {
               var userProfile = await _database.UserProfiles.SingleOrDefaultAsync
                          (u => u.Subject == User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);
            return _mappper.Map<UserProfile, UserProfileResource>(userProfile);
        }

        [HttpGet("UserUnits")]
        public async Task<IActionResult> Get()
        {
             var userUnits = await _database.UserProfiles
                                    .ToListAsync();

               return Ok(userUnits); 
        }

    }


}