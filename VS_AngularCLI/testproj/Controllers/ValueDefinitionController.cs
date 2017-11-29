using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using testproj.Domain;

namespace testproj.Controllers
{
  [Produces("application/json")]
  [Route("api/v1/ValueDefinition")]
  //[Route("api/v1/[controller]")]
  public class ValueDefinitionController : Controller
  {
    // GET: api/ValueDefinition
    [HttpGet]
    public IEnumerable<ValueDefinition> Get()
    {
      return null;
    }

    // GET: api/ValueDefinition/5
    [HttpGet("{id}", Name = "GetValueDefinition")]
    public ValueDefinition Get(int id)
    {
      return new ValueDefinition();
    }

    // POST: api/ValueDefinition
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT: api/ValueDefinition/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
