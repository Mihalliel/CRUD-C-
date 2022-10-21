using EmployeesCoreApi.Domain;
using Microsoft.AspNetCore.Mvc;
using System.Web;

namespace EmployeesCoreApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {

        private readonly ILogger<EmployeeController> _logger;
        private static IList<Employee> _employees = new List<Employee>() { new Employee("c131874", "Luis Adas", new DateTime(1985, 10, 09), "Assistente Júnior", "Pós-Graduação/Especialização") };

        public EmployeeController(ILogger<EmployeeController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetEmployee")]
        public IEnumerable<Employee> Get()
        {
            return _employees.OrderBy(employee=>employee.Name);
        }

        [HttpPost(Name = "PostEmployee")]
        public void Post(Employee employee)
        {
            var existingEmployee = _employees.SingleOrDefault(e => e.Enrollment.Equals(employee.Enrollment, StringComparison.Ordinal));
            if (existingEmployee == null)
            {
                _employees.Add(employee);
            }
        }

        [HttpPut(template: "{enrollment}", Name = "PutEmployee")]
        public void Put(string enrollment, Employee employee)
        {
            var existingEmployee = _employees.SingleOrDefault(employee => employee.Enrollment.Equals(enrollment, StringComparison.Ordinal));
            if (existingEmployee != null)
            {
                existingEmployee.Name = employee.Name;
                existingEmployee.BirthDate = employee.BirthDate;
                existingEmployee.Role = employee.Role;
                existingEmployee.Scholarship = employee.Scholarship;
            }
        }

        [HttpDelete(template: "{enrollment}", Name = "DeleteEmployee")]
        public void Delete(string enrollment) => _employees.Remove(_employees.SingleOrDefault(employee => employee.Enrollment.Equals(enrollment, StringComparison.Ordinal)));
    }
}

