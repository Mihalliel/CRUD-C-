using Newtonsoft.Json.Converters;
using System.Text.Json.Serialization;

namespace EmployeesCoreApi.Domain
{
    public class Employee
    {
        public Employee(string enrollment, string name, DateTime birthDate, string role, string scholarship)
        {
            Enrollment = enrollment;
            Name = name;
            BirthDate = birthDate;
            Role = role;
            Scholarship = scholarship;
        }

        public string Enrollment { get; }

        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public string Role { get; set; }

        public string Scholarship { get; set; }
    }
}