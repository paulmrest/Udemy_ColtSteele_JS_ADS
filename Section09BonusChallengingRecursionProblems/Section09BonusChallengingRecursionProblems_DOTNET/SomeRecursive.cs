using System;

namespace Section09BonusChallengingRecursionProblems;

public partial class BonusRecursionProblems
{
  public static bool SomeRecursive(int[] nums, Func<int, bool> func)
  {
    if (nums == null || nums.Length <= 0)
    {
      return false;
    }
    if (func.GetType() != typeof(System.Func<int, bool>))
    {
      return false;
    }
    bool zeroIndexValueIsOdd = func(nums[0]);
    if (zeroIndexValueIsOdd)
    {
      return true;
    }
    int[] newArray = new int[nums.Length - 1];
    Array.Copy(nums, 1, newArray, 0, nums.Length - 1);
    return zeroIndexValueIsOdd || SomeRecursive(newArray, func);
  }
}