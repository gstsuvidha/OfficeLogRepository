using System.Threading.Tasks;

namespace OfficeLog.Persistence
{
    public interface IUnitOfWork
    {
         Task CompleteAsync();
    }
}