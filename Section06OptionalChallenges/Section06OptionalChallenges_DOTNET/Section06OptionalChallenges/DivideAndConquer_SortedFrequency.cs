using System;

namespace Section06OptionalChallenges.DivideAndConquer;

public partial class DivideAndConquer
{
  public static int SortedFrequency(int[] arr, int num)
  {
    var firstIndex = FindFirst(arr, num, 0, arr.Length -1);
    if (firstIndex < 0)
    {
      return -1;
    }
    var lastIndex = FindLast(arr, num, 0, arr.Length - 1);
    return lastIndex - firstIndex + 1;
  }

  private static int FindFirst(int[] arr, int num, int lowIndex, int highIndex)
  {
    if (highIndex >= lowIndex)
    {
      var midIndex = (int)Math.Floor((double)(highIndex + lowIndex) / 2);
      if (arr[midIndex] == num && (midIndex == 0 || arr[midIndex - 1] < num))
      {
        return midIndex;
      }
      else if (arr[midIndex] < num)
      {
        return FindFirst(arr, num, midIndex + 1, highIndex);
      }
      else
      {
        return FindFirst(arr, num, lowIndex, midIndex - 1);
      }
    }
    return -1;
  }

  private static int FindLast(int[] arr, int num, int lowIndex, int highIndex)
  {
    if (highIndex >= lowIndex)
    {
      var midIndex = (int)Math.Floor((double)(highIndex + lowIndex) / 2);
      if (arr[midIndex] == num && (midIndex == arr.Length - 1 || arr[midIndex + 1] > num))
      {
        return midIndex;
      }
      else if (arr[midIndex] > num)
      {
        return FindLast(arr, num, lowIndex, midIndex - 1);
      }
      else
      {
        return FindLast(arr, num, midIndex + 1, highIndex);
      }
    }
    return -1;
  }
}