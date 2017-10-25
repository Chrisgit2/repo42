using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testproj.Domain
{
  public class MockDB
  {
    private static List<TestData> testDatas;
    private static List<TestDataItem> testDataItems;

    private static void InitMockDB()
    {
      testDatas = new List<TestData>
      {
          new TestData() { ID = 1, Data = "Teststring1", FloatNumber = 1.1, Number = 100 },
          new TestData() { ID = 2, Data = "Teststring2", FloatNumber = 1.2, Number = 200 },
          new TestData() { ID = 3, Data = "Teststring3", FloatNumber = 1.3, Number = 300 },
          new TestData() { ID = 4, Data = "Teststring4", FloatNumber = 1.4, Number = 400 }
      };

      testDataItems = new List<TestDataItem>
      {
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 1},
          new TestDataItem() { ID = 2, Data = "Teststring", Number = 1},
          new TestDataItem() { ID = 3, Data = "Teststring", Number = 1},
          new TestDataItem() { ID = 4, Data = "Teststring", Number = 2},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 2},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 2},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 3},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 3},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 3},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 4},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 4},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 4}
      };

      testDataItems.ForEach(tdi => testDatas.Single(td => td.ID == tdi.Number).AddTestDataItem(tdi));
    }

    public static List<TestData> TestDatas
    {
      get
      {
        if (testDatas == null)
        {
          InitMockDB();
        }
        return testDatas;
      }
    }

    public static List<TestDataItem> TestDataItems
    {
      get
      {
        if (testDatas == null)
        {
          InitMockDB();
        }
        return testDataItems;
      }
    }
  }
}
