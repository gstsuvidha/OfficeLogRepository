using System;
using System.Collections.Generic;
using Officelog.Domain.Marketinglog;

namespace Officelog.WebApp.MarketingApi
{
    public class SaveMarketingResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public string ServiceInterested { get; set; }
        public string SoftwareInterested { get; set; }
        public ConversionStatus ConversionStatus { get; set; }
        public string RateUs { get; set; }
        public string SuggestionForYes { get; set; }
        public string SuggestionForNo { get; set; }
        public string  Area { get; set; }
        public DateTime Date { get; set; }
        public double Price { get; set; }
        public string CurrentScenario { get; set; }
        public double Fee { get; set; }
        public string RateUsForNo { get; set; }
        public List<SaveServiceItemResource> ServiceItems {get; set;}
      
    }

    public class SaveServiceItemResource
    {
        public string ServiceType { get; set; }
        public double Rate { get; set; }
    }
}