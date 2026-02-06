using System;
using Section06OptionalChallenges.FrequencyCounter;

public class Program
{
  static void Main(string[] args)
  {
    // Console.WriteLine(FrequencyCounter.SameFrequency(182, 281));
    // Console.WriteLine(FrequencyCounter.SameFrequency(31, 14));
    // Console.WriteLine(FrequencyCounter.SameFrequency(3589578, 5879385));
    // Console.WriteLine(FrequencyCounter.SameFrequency(22, 222));

    // //true
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates('1', "b", 1, 'a'));

    // //false
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates(1, 2, 3));

    // //true
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates(1, 2, 2));

    // //true
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates('a', 'b', 'c', 'a'));
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates("a", "b", "c", "a"));
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates("a", "b", "c", 'a'));

    // //true
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates("1", "b", 1, "a"));

    // //false
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates('a', 'b', 'c', 'A'));
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates("a", "b", "c", "A"));

    // //true
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates('a', 'b', 'c', 'd', 'e', 'f', 'd'));
    // Console.WriteLine(FrequencyCounter.AreThereDuplicates("a", "b", "c", "d", "e", "f", "d"));

    // Console.WriteLine(FrequencyCounter.ConstructNote("aa", "abc"));
    // Console.WriteLine(FrequencyCounter.ConstructNote("abc", "dcba"));
    // Console.WriteLine(FrequencyCounter.ConstructNote("aabbcc", "bcabcaddff"));

    Console.WriteLine(string.Join(" ", FrequencyCounter.FindAllDuplicates(new int[] {4,3,2,7,8,2,3,1})));
    Console.WriteLine(string.Join(" ", FrequencyCounter.FindAllDuplicates(new int[] {4, 3, 2, 1, 0})));
    Console.WriteLine(string.Join(" ", FrequencyCounter.FindAllDuplicates(new int[] {4, 3, 2, 1, 0, 1, 2, 3})));
  }
}