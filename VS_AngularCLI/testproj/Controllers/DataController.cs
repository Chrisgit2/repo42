using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using testproj.Domain;
using Newtonsoft.Json;

namespace testproj.Controllers
{
  [Produces("application/json")]
  [Route("api/Data")]
  public class DataController : Controller
  {

    // GET: api/Data
    [HttpGet]
    public IEnumerable<TestData> Get()
    {
      try
      {
        String test = JsonConvert.SerializeObject(MockDB.TestDatas);
        return MockDB.TestDatas;
      }
      catch (Exception Ex)
      {
        return null;
      }
    }

    // GET: api/Data/5
    [HttpGet("{id}", Name = "Get")]
    public TestData Get(int id)
    {
      return MockDB.TestDatas.SingleOrDefault(td => td.ID == id);
    }

    // POST: api/Data
    [HttpPost]
    public void Post([FromBody]TestData value)
    {
    }

    // PUT: api/Data/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      MockDB.TestDatas.Remove(MockDB.TestDatas.Single(td => td.ID == id));
    }
  }
}
