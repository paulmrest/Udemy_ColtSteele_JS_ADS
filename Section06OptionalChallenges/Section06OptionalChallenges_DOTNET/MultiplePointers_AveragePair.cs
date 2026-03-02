using System;

namespace Section06OptionalChallenges.MultiplePointers;

public partial class MultiplePointers
{
  public static bool AveragePair(int[] arr, double average)
  {
    if (arr.Length <= 0)
    {
      return false;
    }
    var leftIndex = 0;
    var rightIndex = 1;
    while (leftIndex + 1 < arr.Length)
    {
      if ((arr[leftIndex] + arr[rightIndex]) / 2.0 == average)
      {
        return true;
      }
      else if (rightIndex < arr.Length - 1)
      {
        rightIndex++;
      }
      else
      {
        leftIndex++;
        rightIndex = leftIndex + 1;
      }
    }
    return false;
  }
}