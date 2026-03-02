using System;
using System.Linq;

namespace Section09BonusChallengingRecursionProblems;

public partial class BonusRecursionProblems
{
  public static string[] CapitalizeFirst(string[] strings)
  {
    if (strings.Length == 0 || string.IsNullOrWhiteSpace(strings[0]))
    {
      return Array.Empty<string>();
    }
    string[] newArray = new string[strings.Length - 1];
    var str = string.Concat(strings[0][0].ToString().ToUpper(), strings[0].Substring(1, strings[0].Length - 1));
    Array.Copy(strings, 1, newArray, 0, strings.Length - 1);
    return new string[] {str}.Concat(CapitalizeFirst(newArray)).ToArray();
  }
}