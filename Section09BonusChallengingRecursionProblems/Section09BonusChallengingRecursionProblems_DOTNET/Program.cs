using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Security.Authentication.ExtendedProtection;
using System.Text;
using ArrayUtilities;
using Microsoft.VisualBasic;
using Section09BonusChallengingRecursionProblems;

public class Program
{
  static void Main(string[] args)
  {
    // Console.WriteLine(BonusRecursionProblems.Reverse("awesome"));
    // Console.WriteLine(BonusRecursionProblems.Reverse("rithmschool"));

    // Console.WriteLine(BonusRecursionProblems.IsPalindrome("awesome"));
    // Console.WriteLine(BonusRecursionProblems.IsPalindrome("foobar"));
    // Console.WriteLine(BonusRecursionProblems.IsPalindrome("tacocat"));
    // Console.WriteLine(BonusRecursionProblems.IsPalindrome("amanaplanacanalpanama"));
    // Console.WriteLine(BonusRecursionProblems.IsPalindrome("amanaplanacanalpandemonium"));

    // Console.WriteLine(BonusRecursionProblems.SomeRecursive(new int[] {1,2,3,4}, IsOdd));
    // Console.WriteLine(BonusRecursionProblems.SomeRecursive(new int[] {4,6,8,9}, IsOdd));
    // Console.WriteLine(BonusRecursionProblems.SomeRecursive(new int[] {4,6,8}, IsOdd));
    // Console.WriteLine(BonusRecursionProblems.SomeRecursive(new int[] {4,6,8}, val => val > 10));
    // Console.WriteLine(BonusRecursionProblems.SomeRecursive(new int[] {3,6,8}, val => val % 2 != 0));
    // Console.WriteLine(BonusRecursionProblems.SomeRecursive(new int[] {4,6,8}, val => val + 10));

    // Console.WriteLine(PrintArray.PrintArrayOf(BonusRecursionProblems.CapitalizeFirst(new string[] {"car", "taco", "banana"})));

    var obj1 = new
    {
      outer = 2,
      obj = new {
        inner = 2,
        otherObj = new {
          superInner = 2,
          notANumber = true,
          alsoNotANumber = "yup"
        }
      }
    };

    var obj2 = new
    {
        a = 2,
        b = new {b = 2, bb = new {b = 3, bb = new {b = 2}}},
        c = new {c = new {c = 2}, cc = "ball", ccc = 5},
        d = 1,
        e = new {e = new {e = 2}, ee = "car"}
    };

    var obj3 = new
    {
      obj = new {
        inner = 2,
        otherObj = new {
          superInner = 2,
          notANumber = true,
          alsoNotANumber = "yup"
        }
      },
      last = 2,
      neat = new int[0],
      a = 2,
      b = new {b = 2, bb = new {b = 3, bb = new {b = 2}}},
      c = new {c = new {c = 2}, cc = "ball", ccc = 5},
      d = 1,
      e = new {e = new {e = 2}, ee = "car"}
    };

    // Console.WriteLine(BonusRecursionProblems.NestedEvenSum(obj1));
    // Console.WriteLine(BonusRecursionProblems.NestedEvenSum(obj2));
    // Console.WriteLine(BonusRecursionProblems.NestedEvenSum(obj3));

    //Console.WriteLine(PrintArray.PrintArrayOf(BonusRecursionProblems.CapitalizeWords(new string[] {"i", "am", "learning", "recursion"})));

    var obj = new 
    {
      num = 1,
      test = new int[0],
      data = new 
      {
          val = 4,
          info = new {
              isRight = true,
              random = 66
          }
      }
    };

    Console.WriteLine(BonusRecursionProblems.StringifyNumbers(obj));

    var collectStringsObj = new
    {
      stuff = "foo",
      data = new
      {
        val = new
        {
          thing = new
          {
            info = "bar",
            moreInfo = new
            {
              evenMoreInfo = new
              {
                weMadeIt = "baz"
              }
            }
          }
        }
      }
    };

    //Console.WriteLine(PrintArray.PrintArrayOf(BonusRecursionProblems.CollectStrings(collectStringsObj)));
  }

  private static bool IsOdd(int num)
  {
    return num % 2 != 0;
  }
}