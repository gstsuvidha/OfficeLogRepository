using System;
using System.Collections.Generic;
using System.Text;
using Officelog.Domain.AdminLog;
using Officelog.Domain.UserProfileLog;

namespace Officelog.Domain.Companylog
{
    public class Company
    {
        public int Id { get; set; }
        
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public string QueryHandling { get; set; }
        public string ServiceProvided { get; set; }

        public string VisitorType {get; set;}

        public string SoftwareInterested { get; set; }
        public string RateUs { get; set; }

        public string SuggestionForYes { get; set; }
        public string SuggestionForNo { get; set; }
        public DateTime Date { get; set; }
        public string RateUsForNo { get; set; }

        public UserProfile UserProfile {get; set;}

        public string UserProfileId { get; set; }

        public bool IsActive { get; set; }

        public Admin Admin {get; set;}

        public int AdminId {get; set;}
        public Company()
        {
            
        }

        public Company(string name, string contactNumber, string queryHandling,
                        string serviceProvided, string visitorType,
                        string softwareInterested, string rateUs, string suggestionForYes,
                        string suggestionForNo,DateTime date,string rateUsForNo, string userProfileId, int adminId )
        {
            Name = name;
            ContactNumber = contactNumber;
            QueryHandling = queryHandling;
            ServiceProvided = serviceProvided;
            VisitorType = visitorType;
            SoftwareInterested = softwareInterested;
            RateUs = rateUs;
            SuggestionForYes = suggestionForYes;
            SuggestionForNo = suggestionForNo;
            Date = date;
            RateUsForNo = rateUsForNo;
            IsActive = true;
            UserProfileId = userProfileId;
            AdminId = adminId;
        }

            public void Modify(string name, string contactNumber, string queryHandling,
                        string serviceProvided, string visitorType,
                        string softwareInterested, string rateUs, string suggestionForYes,
                        string suggestionForNo,string rateUsForNo )
        {
            Name = name;
            ContactNumber = contactNumber;
            QueryHandling = queryHandling;
            ServiceProvided = serviceProvided;
            VisitorType = visitorType;
            SoftwareInterested = softwareInterested;
            RateUs = rateUs;
            SuggestionForYes = suggestionForYes;
            SuggestionForNo = suggestionForNo;
            RateUsForNo = rateUsForNo;
            IsActive = true;
        }

           public void Delete()
        {
            IsActive = false;
        }
    }

     
    



}
