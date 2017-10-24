using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testproj.Domain
{
  public class TestData : BaseEntity
  {
    private string m_Data;
    private int m_Number;
    private double m_FloatNumber;

    public string Data { get => m_Data; set => m_Data = value; }
    public int Number { get => m_Number; set => m_Number = value; }
    public double FloatNumber { get => m_FloatNumber; set => m_FloatNumber = value; }
  }
}
