using Officelog.Domain.AdminLog;

namespace Officelog.Domain.UserProfileLog
{
    public class UserProfile
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public string Designation { get; set; }
        public string Password { get; set; }
        public string Subject { get; set; }

        public string Role {get; set;}

        public Admin Admin {get; set;}

        public int AdminId {get; set;}

    }
}