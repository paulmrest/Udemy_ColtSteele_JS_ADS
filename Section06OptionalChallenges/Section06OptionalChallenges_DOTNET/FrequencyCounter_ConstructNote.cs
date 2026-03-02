using System;

namespace Section06OptionalChallenges.FrequencyCounter;

public partial class FrequencyCounter
{
  public static bool ConstructNote(string message, string letters)
  {
    if (message.Length == 0)
    {
      return true;
    }
    if (letters.Length == 0)
    {
      return false;
    }
    Dictionary<char, int> counts = new Dictionary<char, int>();
    foreach (char character in letters.ToCharArray())
    {
      counts[character] = counts.ContainsKey(character) ? ++counts[character] : 1;
    }
    foreach (char character in message.ToCharArray())
    {
      if (!counts.ContainsKey(character) || counts[character] <= 0)
      {
        return false;
      }
      else
      {
        counts[character] = --counts[character];
      }
    }
    return true;
  }
}