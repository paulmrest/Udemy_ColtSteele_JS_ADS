using System;
using System.Text.RegularExpressions;

namespace Section09BonusChallengingRecursionProblems;

public partial class BonusRecursionProblems
{
  public static string[] CollectStrings(object obj)
  {
    if (obj == null)
    {
      return new string[0];
    }
    List<string> strings = new List<string>();
    string json = Newtonsoft.Json.JsonConvert.SerializeObject(obj);
    MatchCollection matches = Regex.Matches(json, @"(?<=[a-zA-Z0-9""]:)[^,{}]+");
    foreach (Match match in matches)
    {
      strings.Add(match.Value);
    }
    return strings.ToArray();
  }
}