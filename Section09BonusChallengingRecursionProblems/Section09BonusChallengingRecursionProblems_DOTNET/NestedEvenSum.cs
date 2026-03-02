using System;
using Newtonsoft.Json.Linq;

namespace Section09BonusChallengingRecursionProblems;

public partial class BonusRecursionProblems
{
  public static int NestedEvenSum(object obj)
  {
    if (obj == null)
    {
      return 0;
    }
    JToken jToken = JToken.FromObject(obj);
    var evenSum = 0;
    if (jToken != null)
    {
      foreach (var child in jToken.Children())
      {
        evenSum += NestedEvenSumJTokenHelper(child);
      }
    }
    return evenSum;
  }

  private static int NestedEvenSumJTokenHelper(JToken token)
  {
    if (token == null)
    {
      return 0;
    }
    if (!token.HasValues)
    {
      object? obj = token.Value<object>() ?? null;
      string str = obj?.ToString() ?? string.Empty;
      if (!string.IsNullOrWhiteSpace(str))
      {
        int num;
        if (int.TryParse(str, out num) && num % 2 == 0)
        {
          return num;
        }
      }
    }
    var evenSum = 0;
    foreach (var child in token.Children())
    {
      evenSum += NestedEvenSumJTokenHelper(child);
    }
    return evenSum;
  }
}