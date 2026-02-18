using System;

namespace Section06OptionalChallenges.SlidingWindow;

public partial class SlidingWindow
{
  public static int FindLongestSubstring(string str)
  {
    if (string.IsNullOrWhiteSpace(str))
    {
      return 0;
    }
    if (str.ToArray().Distinct().ToArray().Length == str.Length)
    {
      return str.Length;
    }
    var tracker = new Dictionary<char, int>();
    var currLongest = 0;
    var currStart = 0;
    for (var i = 0; i < str.Length; i++)
    {
      var character = str[i];
      if (tracker.ContainsKey(character))
      {
        currStart = Math.Max(currStart, tracker[character]);
      }
      currLongest = Math.Max(currLongest, i - currStart + 1);
      tracker[character] = i + 1;
    }
    return currLongest;
  }
}