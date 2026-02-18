using System;
using System.Linq;

namespace Section06OptionalChallenges.FrequencyCounter;

public partial class FrequencyCounter
{
  public static int[] FindAllDuplicates(int[] nums)
  {
    if (nums.Length <= 0)
    {
      return new int[]{};
    }
    
    Dictionary<int, int> tracker = new Dictionary<int, int>();
    foreach (int num in nums)
    {
      tracker[num] = tracker.ContainsKey(num) ? ++tracker[num] : 1;
    }
    return tracker.Where(kv => kv.Value > 1).Select(kv => kv.Key).ToArray();
  }
}