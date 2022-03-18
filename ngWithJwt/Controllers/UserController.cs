using Angular.NETCoreWith.SignalR_Assignment.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.NETCoreWith.SignalR_Assignment.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        readonly IWebHostEnvironment _env;
        public UserController(IWebHostEnvironment env)
        {
            _env = env;
        }
        [HttpGet]
        [Route("GetUserData")]
        [Authorize(Policy = Policies.User)]
        public async Task<IActionResult> GetUserData()
        {
            return Ok("This is an normal user");
        }

        [HttpGet]
        [Route("GetAdminData")]
        [Authorize(Policy = Policies.Admin)]
        public async Task<IActionResult> GetAdminData()
        {
            return Ok("This is an Admin user");
        }

        [HttpGet]
        [Route("getAll")]
        [Authorize(Policy = Policies.Admin)]
        public async Task<IActionResult> getAll()
        {
            var path = _env.WebRootPath + "\\JsonStore\\users.json";
            var jsonPath = System.IO.File.ReadAllText(path);

            return Ok(JsonConvert.DeserializeObject<List<UserModel>>(jsonPath));
        }

        [HttpPut]
        [Route("Update/{id}")]
        [Authorize(Policy = Policies.Admin)]
        public async Task<IActionResult> update(int id, [FromBody] UserModel userModel)
        {

            var path = _env.WebRootPath + "\\JsonStore\\users.json";
            var jsonPath = System.IO.File.ReadAllText(path);

            var data = JsonConvert.DeserializeObject<List<UserModel>>(jsonPath);
            var companyToDeleted = data.FirstOrDefault(x => x.Id == id);

            data.Remove(companyToDeleted);
            data.Add(userModel);

            System.IO.File.WriteAllText(path, JsonConvert.SerializeObject(data));


            return Ok("Record updated Successfully");
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        [Authorize(Policy = Policies.Admin)]
        public async Task<IActionResult> Delete(int id)
        {
            var path = _env.WebRootPath + "\\JsonStore\\users.json";
            var jsonPath = System.IO.File.ReadAllText(path);

            var data = JsonConvert.DeserializeObject<List<UserModel>>(jsonPath);
            var companyToDeleted = data.FirstOrDefault(x => x.Id == id);

            data.Remove(companyToDeleted);

            System.IO.File.WriteAllText(path, JsonConvert.SerializeObject(data));

            return Ok("This is an Admin user");
        }
        [HttpPost]
        [Route("Post")]
        [Authorize(Policy = Policies.Admin)]
        public async Task<IActionResult> Post([FromBody] UserModel userModel)
        {

            var path = _env.WebRootPath + "\\JsonStore\\users.json";
            var jsonPath = System.IO.File.ReadAllText(path);

            var data = JsonConvert.DeserializeObject<List<UserModel>>(jsonPath);
            data.Add(userModel);

            System.IO.File.WriteAllText(path, JsonConvert.SerializeObject(data));

            return Ok("Record Added Successfully");
        }
    }
}
