using System;

namespace Section06OptionalChallenges.SlidingWindow;

public partial class SlidingWindow
{
  public static int MaxSubArraySum(int[] arr, int len)
  {
    if (arr == null || arr.Length <= 0 || arr.Length < len)
    {
      return -1;
    }
    var trackingSum = 0;
    for (var i = 0; i < len; i++)
    {
      trackingSum += arr[i];
    }
    var maxSum = trackingSum;
    for (var i = len; i < arr.Length; i++)
    {
      trackingSum += arr[i] - arr[i - len];
      maxSum = Math.Max(trackingSum, maxSum);
    }
    return maxSum;
  }
}