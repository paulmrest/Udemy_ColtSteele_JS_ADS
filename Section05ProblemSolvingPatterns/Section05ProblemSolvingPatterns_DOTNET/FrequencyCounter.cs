using System;

namespace SectionFiveProblemSolvingPatterns.FrequencyCounter;

public class FrequencyCounter
{
  public static bool ValidAnagram(string str1, string str2)
  {
    if (str1.Length != str2.Length)
    {
      return false;
    }
    Dictionary<char, int> counts = new Dictionary<char, int>();
    foreach (char c in str1.ToCharArray())
    {
      char cLower = Char.ToLower(c);
      if (counts.ContainsKey(cLower))
      {
        counts[cLower] = ++counts[cLower];
      }
      else
      {
        counts.Add(cLower, 1);
      }
    }
    foreach (char c in str2.ToCharArray())
    {
      char cLower = Char.ToLower(c);
      if (counts.ContainsKey(cLower) && counts[cLower] > 0)
      {
        counts[cLower] = --counts[cLower];
      }
      else
      {
        return false;
      }
    }
    return true;
  }
}