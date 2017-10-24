using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testproj.Domain
{
  public class MockDB
  {    
    public static IEnumerable<TestData> GetAllTestDatas()
    {
      return null; 
      List<TestData> retval = new List<TestData>();
      
      // new TestData() { ID = 1, Data = "Teststring1", FloatNumber = 1.1, Number = 100 };
    }
  }
}
