namespace Officelog.Domain.Reports
{
    public class CompanyReport
    {
        public int TotalVisits { get; set; }

        public int TotalClientVisits { get; set; }
        public int TotalFranchiseVisits { get; set; }
        public int TotalFirstVisits { get; set; }
        public int TotalSecondOrThirdVisits { get; set; }

        public int TotalBadQueryRating { get; set; }
        public int TotalGoodQueryRating { get; set; }
        public int TotalVeryGoodQueryRating { get; set; }
        public int TotalExcellentQueryRating { get; set; }
        public int TotalBadServiceRating { get; set; }
        public int TotalGoodServiceRating { get; set; }
        public int TotalVeryGoodServiceRating { get; set; }
        public int TotalExcellentServiceRating { get; set; }
        public int TotalSoftwareInterested { get; set; }




    }
}