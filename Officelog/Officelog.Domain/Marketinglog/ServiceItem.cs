namespace Officelog.Domain.Marketinglog
{
    public class ServiceItem
    {
        public int Id { get; set; }
        public string ServiceType { get; set; }
        public double Rate { get; set; }
        public Marketing Marketing {get; set;}
        protected ServiceItem()
        {
            
        }
        private ServiceItem(string serviceType,double rate)
        {
            ServiceType = serviceType;
            Rate = rate;
        }
          public static ServiceItem Add(string serviceType,double rate)
        {
            return new ServiceItem(serviceType,rate);
        }
    } 
}
