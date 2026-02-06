using System;

namespace Section06OptionalChallenges.FrequencyCounter;

public partial class FrequencyCounter
{
  //assuming all parameters are either strings, integers, or chars
  public static bool AreThereDuplicates(params object[] items)
  {
    foreach (var item in items)
    {
      if (!item.GetType().Equals(typeof(System.String)) 
        && !item.GetType().Equals(typeof(System.Int32))
        && !item.GetType().Equals(typeof(System.Char)))
      {
        throw new Exception();
      }
    }
    if (items.Length < 2)
    {
      return false;
    }
    //we are going to convert all types to strings
    Dictionary<string, int> counts = new Dictionary<string, int>();
    foreach (var item in items)
    {
      string? strItem = string.Empty;
      switch (Type.GetTypeCode(item.GetType()))
      {
        case TypeCode.String:
        case TypeCode.Char:
        case TypeCode.Int32:
          strItem = item.ToString();
          break;
        default:
          break;
      }
      if (!string.IsNullOrWhiteSpace(strItem))
      {
        if (counts.ContainsKey(strItem) && counts[strItem] > 0)
        {
          return true;
        }
        else
        {
          counts[strItem] = 1;
        }       
      }
    }
    return false;
  }
}