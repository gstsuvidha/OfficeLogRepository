using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.UserProfileLog;

namespace OfficeLog.Persistence.Repositories
{
    public class UserProfileRepository : RepositoryBase<UserProfile>, IUserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context) : base((DbContext) context)
        {
            _context = context;
        }
        public override Task<UserProfile> GetAllAsync(object id)
        {
            throw new System.NotImplementedException();
        }

        public override Task<UserProfile> GetAsync(object id, string userProfileId)
        {
            
             return _context.UserProfiles.FindAsync(id);
        }

        public Task<UserProfile> GetAsync(object id)
        {
           return _context.UserProfiles.FindAsync(id);
        }
    }
}