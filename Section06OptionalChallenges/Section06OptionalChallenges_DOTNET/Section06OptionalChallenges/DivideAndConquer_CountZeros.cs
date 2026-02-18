using System;

namespace Section06OptionalChallenges.DivideAndConquer;

public partial class DivideAndConquer
{
  public static int CountZeros(int[] arr)
  {
    if (arr == null || arr.Length <= 0)
    {
      return 0;
    }
    var index = (int)Math.Floor((double)arr.Length / 2.0);
    var zerCountDone = false;
    while (!zerCountDone)
    {
      if (index == 0 || arr.Length - 1 == index)
      {
        if (arr.Length - 1 == index)
        {
          index++;
        }
        zerCountDone = true;
        break;
      }
      else
      {
        if (arr[index] == 0)
        {
          if (index > 0 && arr[index - 1] == 1)
          {
            zerCountDone = true;
            break;
          }
          else if (index == 1)
          {
            index = 0;
          }
          else
          {
            index = Math.Max(0, (int)Math.Floor(((double)arr.Length - index) / 2.0d));
          }
        }
        else
        {
          index = Math.Min(arr.Length - 1, (int)Math.Floor(((double)arr.Length + index) / 2.0d));
        }
      }
    }
    return arr.Length - index;
  }
}