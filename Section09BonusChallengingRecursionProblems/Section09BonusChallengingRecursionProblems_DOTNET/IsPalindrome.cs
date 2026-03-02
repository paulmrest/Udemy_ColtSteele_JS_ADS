using System;

namespace Section09BonusChallengingRecursionProblems;

public partial class BonusRecursionProblems
{
  public static bool IsPalindrome(string str)
  {
    if (String.IsNullOrWhiteSpace(str))
    {
      return false;
    }
    if (str.Length <= 1)
    {
      return true;
    }
    return String.Compare(str[0].ToString(), str[str.Length - 1].ToString(), StringComparison.Ordinal) == 0 
      && IsPalindrome(str.Substring(1, str.Length - 2));
  }
}