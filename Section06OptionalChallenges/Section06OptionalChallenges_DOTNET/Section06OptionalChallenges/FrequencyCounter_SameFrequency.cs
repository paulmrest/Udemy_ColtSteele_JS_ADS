using System;

namespace Section06OptionalChallenges.FrequencyCounter;

public partial class FrequencyCounter
{
  public static bool SameFrequency(int num1, int num2)
  {
    if (num1 <= 0 || num2 <= 0)
    {
      return false;
    }
    Dictionary<int, int> digitCounts = new Dictionary<int, int>();
    while (num1 != 0)
    {
      int digit1 = num1 % 10;
      digitCounts[digit1] = digitCounts.ContainsKey(digit1) ? ++digitCounts[digit1] : 1;
      num1 = (int)(num1 / 10.0d);
    }
    while (num2 != 0)
    {
      int digit2 = num2 % 10;
      if (!digitCounts.ContainsKey(digit2) || digitCounts[digit2] <= 0)
      {
        return false;
      }
      digitCounts[digit2] = --digitCounts[digit2];
      num2 = (int)(num2 / 10.0d);
    }
    return true;
  }
}