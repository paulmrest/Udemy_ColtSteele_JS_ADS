using System;

namespace Section09BonusChallengingRecursionProblems;

public partial class BonusRecursionProblems
{
  public static string Reverse(string str)
  {
    if (string.IsNullOrWhiteSpace(str))
    {
      return String.Empty;
    }
    return String.Concat(str[str.Length - 1], Reverse(str.Substring(0, str.Length - 1)));
  }
}