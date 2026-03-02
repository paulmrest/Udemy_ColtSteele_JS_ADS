using System;

namespace Section06OptionalChallenges.MultiplePointers;

public partial class MultiplePointers
{
  public static bool FindPair(int[] arr, int diff)
  {
    if (arr == null || arr.Length <= 0)
    {
      return false;
    }
    var leftIndex = 0;
    var rightIndex = 1;
    while (leftIndex < arr.Length - 1)
    {
      if (Math.Abs(arr[leftIndex] - arr[rightIndex]) == Math.Abs(diff))
      {
        return true;
      }
      else if (rightIndex < arr.Length - 1)
      {
        rightIndex++;
      }
      else if (rightIndex == arr.Length - 1)
      {
        leftIndex++;
        rightIndex = leftIndex + 1;
      }
    }
    return false;
  }
}