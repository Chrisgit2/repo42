using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testproj.Domain
{
  public class TestData : BaseEntity
  {
    #region Member
    private string m_Data;
    private int m_Number;
    private double m_FloatNumber;
    private List<TestDataItem> items = new List<TestDataItem>();
    #endregion
    #region Properties
    public string Data { get => m_Data; set => m_Data = value; }
    public int Number { get => m_Number; set => m_Number = value; }
    public double FloatNumber { get => m_FloatNumber; set => m_FloatNumber = value; }
    public List<TestDataItem> Items { get => items; set => items = value; }
    #endregion

    #region Functions
    public void AddTestDataItem(TestDataItem item)
    {
      item.BelongsTo = this;
      items.Add(item);
    }

    public void RemoveTestDataItem(TestDataItem item)
    {
      item.BelongsTo = null;
      items.Remove(item);
    }
    #endregion
  }
}
