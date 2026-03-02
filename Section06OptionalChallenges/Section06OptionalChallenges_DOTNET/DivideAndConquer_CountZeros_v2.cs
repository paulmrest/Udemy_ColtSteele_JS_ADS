using System;

namespace Section06OptionalChallenges.DivideAndConquer;

public partial class DivideAndConquer
{
  public static int CountZerosRecursive(int[] arr)
  {
    var firstZero = FindFirstNum(arr, 0, 0, arr.Length - 1);
    return firstZero == -1 ? 0 : arr.Length - firstZero;
  }

  private static int FindFirstNum(int[] arr, int num, int lowIndex, int highIndex)
  {
    if (highIndex >= lowIndex)
    {
      var midIndex = lowIndex + (int)Math.Floor((double)(highIndex - lowIndex) / 2);
      if (arr[midIndex] == 0 && (midIndex == 0 || arr[midIndex - 1] == 1))
      {
        return midIndex;
      }
      else if (arr[midIndex] == 1)
      {
        return FindFirstNum(arr, num, midIndex + 1, highIndex);
      }
      else
      {
        return FindFirstNum(arr, num, lowIndex, midIndex - 1);
      }
    }
    return -1;
  }
}