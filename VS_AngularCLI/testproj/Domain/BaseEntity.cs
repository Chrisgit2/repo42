using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testproj.Domain
{
    public class BaseEntity
    {
    private long m_ID;

    public global::System.Int64 ID { get => m_ID; set => m_ID = value; }
  }
}
