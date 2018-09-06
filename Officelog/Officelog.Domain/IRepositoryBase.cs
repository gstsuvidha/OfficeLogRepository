using System.Collections.Generic;
using System.Threading.Tasks;

namespace Officelog.Domain
{
    public interface IRepositoryBase<T> where T : class
    {
        Task<T> GetAsync(object id, string userProfileId);
        Task<T> GetAllAsync(object id);
        
        void Add(T entity);
        
        void AddRange(IEnumerable<T> entities);

        void Remove(T entity);

        void RemoveRange(IEnumerable<T> entities);


         
    }
}