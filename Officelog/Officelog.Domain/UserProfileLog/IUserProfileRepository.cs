using System.Threading.Tasks;

namespace Officelog.Domain.UserProfileLog
{
    public interface IUserProfileRepository : IRepositoryBase<UserProfile>
    {
         Task<UserProfile> GetAsync(object id, string userProfileId);
        Task<UserProfile> GetAsync(object id);
    }
}