using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testproj.Domain
{
  public class BaseEntity
  {
    private long m_ID;
    private string m_MatchCode;
    private string m_Description;

    public Int64 ID { get => m_ID; set => m_ID = value; }
    public string Description { get => m_Description; set => m_Description = value; }
    public string MatchCode { get => m_MatchCode; set => m_MatchCode = value; }
  }
}
