using System.Collections.Generic;
using Officelog.WebApp.MarketingApi;

namespace Officelog.WebApp.ConversionApi
{
    public class SaveConvertedResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public double Fee { get; set; }
         public List<SaveServiceItemResource> ServiceItems {get; set;}

    }
}