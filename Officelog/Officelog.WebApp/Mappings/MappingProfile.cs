using AutoMapper;
using Officelog.Domain.Companylog;
using Officelog.Domain.Marketinglog;
using Officelog.Domain.UserProfileLog;
using Officelog.WebApp.CompanyApi;
using Officelog.WebApp.ConversionApi;
using Officelog.WebApp.MarketingApi;
using Officelog.WebApp.UserProfileApi;

namespace Officelog.WebApp.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Company, SaveCompanyResource>();
            CreateMap<Company, CompanyResource>();
            CreateMap<Marketing, MarketingResource>();
            CreateMap<Marketing, SaveMarketingResource>();
            CreateMap<ServiceItem, SaveServiceItemResource>();
            CreateMap<Marketing, ConvertedResource>();
            CreateMap<Marketing, SaveConvertedResource>();
            CreateMap<UserProfile, UserProfileResource>();
        }    
    }
}