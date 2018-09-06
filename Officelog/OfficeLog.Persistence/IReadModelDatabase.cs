using System.Linq;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Companylog;
using Officelog.Domain.Marketinglog;
using Officelog.Domain.UserProfileLog;

namespace OfficeLog.Persistence
{
    public interface IReadModelDatabase
    {
        IQueryable<Company> Companies { get; }
        IQueryable<Marketing> Marketings { get; }
        IQueryable<UserProfile> UserProfiles { get; }

    }

    public class ReadModelDatabase : IReadModelDatabase
    {
        private readonly ApplicationDbContext _context;
        public ReadModelDatabase(ApplicationDbContext context)
        {
            _context = context;

        }
        public IQueryable<Company> Companies => _context.Companies.AsNoTracking();

        public IQueryable<Marketing> Marketings => _context.Marketings.AsNoTracking();

        public IQueryable<UserProfile> UserProfiles => _context.UserProfiles.AsNoTracking();
    }
}