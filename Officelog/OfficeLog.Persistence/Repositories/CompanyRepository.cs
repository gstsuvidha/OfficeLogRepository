using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Companylog;

namespace OfficeLog.Persistence.Repositories
{
    public class CompanyRepository : RepositoryBase<Company>, ICompanyRepository
    {
        private readonly ApplicationDbContext _context;
        public CompanyRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;

        }
        public override Task<Company> GetAllAsync(object id)
        {
            throw new System.NotImplementedException();
        }

        public override Task<Company> GetAsync(object id, string userProfileId)
        {
            return _context.Companies.SingleOrDefaultAsync(c => c.Id == (int)id && c.UserProfileId == userProfileId);
        }
    }
}