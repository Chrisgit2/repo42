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
    private static List<ValueDefinition> testValueDefinitions;

    private static void InitMockDB()
    {
      testDatas = new List<TestData>
      {
          new TestData() { ID = 1, Data = "Teststring1", FloatNumber = 1.1, Number = 100 , Description="Testdata", MatchCode="1"},
          new TestData() { ID = 2, Data = "Teststring2", FloatNumber = 1.2, Number = 200 , Description="Testdata", MatchCode="2"},
          new TestData() { ID = 3, Data = "Teststring3", FloatNumber = 1.3, Number = 300 , Description="Testdata", MatchCode="3"},
          new TestData() { ID = 4, Data = "Teststring4", FloatNumber = 1.4, Number = 400 , Description="Testdata", MatchCode="4"}
      };

      testDataItems = new List<TestDataItem>
      {
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 1, Description="TestdataItem", MatchCode="1"},
          new TestDataItem() { ID = 2, Data = "Teststring", Number = 1, Description="TestdataItem", MatchCode="2"},
          new TestDataItem() { ID = 3, Data = "Teststring", Number = 1, Description="TestdataItem", MatchCode="3"},
          new TestDataItem() { ID = 4, Data = "Teststring", Number = 2, Description="TestdataItem", MatchCode="4"},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 2, Description="TestdataItem", MatchCode="5"},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 2, Description="TestdataItem", MatchCode="6"},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 3, Description="TestdataItem", MatchCode="7"},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 3, Description="TestdataItem", MatchCode="8"},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 3, Description="TestdataItem", MatchCode="9"},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 4, Description="TestdataItem", MatchCode="10"},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 4, Description="TestdataItem", MatchCode="11"},
          new TestDataItem() { ID = 1, Data = "Teststring", Number = 4, Description="TestdataItem", MatchCode="12"}
      };

      testDataItems.ForEach(tdi => testDatas.Single(td => td.ID == tdi.Number).AddTestDataItem(tdi));

      testValueDefinitions = new List<ValueDefinition>
      {
        new ValueDefinition(){ ID =1, Description="Ein Text oder ähnliches", MatchCode="Text"},
        new ValueDefinition(){ ID =2, Description="Eine Zahl", MatchCode="Number"},
        new ValueDefinition(){ ID =2, Description="Ein Datum", MatchCode="Date"}
      };
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
