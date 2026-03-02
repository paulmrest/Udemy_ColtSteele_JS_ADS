using System;

namespace Section06OptionalChallenges.DivideAndConquer;

public partial class DivideAndConquer
{
  public static int FindRotatedIndex(int[] arr, int num)
  {
    var index = FindNumInRotatedArray(arr, num, 0, arr.Length - 1);
    return index < 0 ? -1 : index;
  }

  private static int FindNumInRotatedArray(int[] arr, int num, int lowIndex, int highIndex)
  {
    if (highIndex >= lowIndex)
    {
      var midIndex = (int)Math.Floor((double)(highIndex + lowIndex) / 2);
      if (arr[midIndex] == num)
      {
        return midIndex;
      }
      var leftIndex = FindNumInRotatedArray(arr, num, lowIndex, midIndex - 1);
      if (leftIndex >= 0)
      {
        return leftIndex;
      }
      var rightIndex = FindNumInRotatedArray(arr, num, midIndex +1, highIndex);
      if (rightIndex >= 0)
      {
        return rightIndex;
      }
    }
    return -1;
  }
}