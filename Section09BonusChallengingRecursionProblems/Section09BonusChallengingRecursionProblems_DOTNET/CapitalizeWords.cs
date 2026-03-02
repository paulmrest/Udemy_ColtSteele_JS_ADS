using System;
using System.Linq;

namespace Section09BonusChallengingRecursionProblems;

public partial class BonusRecursionProblems
{
  public static string[] CapitalizeWords(string[] strings)
  {
    if (strings.Length == 0 || string.IsNullOrWhiteSpace(strings[0]))
    {
      return Array.Empty<string>();
    }
    string[] newArray = new string[strings.Length - 1];
    Array.Copy(strings, 1, newArray, 0, strings.Length - 1);
    return new string[] {strings[0].ToUpper()}.Concat(CapitalizeWords(newArray)).ToArray();
  }
}