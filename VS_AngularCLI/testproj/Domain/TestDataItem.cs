using Newtonsoft.Json;

namespace testproj.Domain
{
  public class TestDataItem : BaseEntity
  {
    private TestData belongsTo;
    private string data;
    private double number;

    [JsonIgnore]
    public TestData BelongsTo { get => belongsTo; set => belongsTo = value; }
    public string Data { get => data; set => data = value; }
    public double Number { get => number; set => number = value; }
  }
}
