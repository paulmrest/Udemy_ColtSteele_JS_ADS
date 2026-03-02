using System;

namespace Section06OptionalChallenges.MultiplePointers;

public partial class MultiplePointers
{
  public static bool IsSubsequence(string subString, string str)
  {
    if (string.IsNullOrWhiteSpace(str))
    {
      return false;
    }
    var subPointer = 0;
    var strPointer = 0;
    while (subPointer < subString.Length)
    {
      //Console.WriteLine($"subPointer: {subPointer}");
      //Console.WriteLine($"strPointer: {strPointer}");
      if (strPointer > str.Length - 1)
      {
        return false;
      }
      else if (string.Compare(subString.Substring(subPointer, 1), str.Substring(strPointer, 1), StringComparison.OrdinalIgnoreCase) == 0)
      {
        subPointer++;
        strPointer++;
      }
      else
      {
        strPointer++;
      }
    }
    return true;
  }
}