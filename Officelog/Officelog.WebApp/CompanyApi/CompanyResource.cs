using System;

namespace Officelog.WebApp.CompanyApi
{
    public class CompanyResource
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public string QueryHandling { get; set; }
        public string ServiceProvided { get; set; }
         public string VisitorType {get; set;}
    }
}