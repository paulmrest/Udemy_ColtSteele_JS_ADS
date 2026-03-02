using System;
using SectionFiveProblemSolvingPatterns.FrequencyCounter;
using SectionFiveProblemSolvingPatterns.MultiplePointers;

public class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine("Frequency Counter - Valid Anagram");
    Console.WriteLine(FrequencyCounter.ValidAnagram("", ""));
    Console.WriteLine(FrequencyCounter.ValidAnagram("aaz", "zza"));
    Console.WriteLine(FrequencyCounter.ValidAnagram("anagram", "nagaram"));
    Console.WriteLine(FrequencyCounter.ValidAnagram("rat", "car"));
    Console.WriteLine(FrequencyCounter.ValidAnagram("awesome", "awesom"));
    Console.WriteLine(FrequencyCounter.ValidAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
    Console.WriteLine(FrequencyCounter.ValidAnagram("qwerty", "qeywrt"));
    Console.WriteLine(FrequencyCounter.ValidAnagram("texttwisttime", "timetwisttext"));

    Console.WriteLine("Multiple Pointers - Count Unique Values");
    Console.WriteLine(MultiplePointers.CountUniqueValues(new int[] {1, 1, 1, 1, 1, 1, 2}));
    Console.WriteLine(MultiplePointers.CountUniqueValues(new int[] {1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13}));
    Console.WriteLine(MultiplePointers.CountUniqueValues(new int[] {}));
    Console.WriteLine(MultiplePointers.CountUniqueValues(new int[] {-2, -1, -1, 0, 1}));
    Console.WriteLine(MultiplePointers.CountUniqueValues(new int[] {4}));
  }
}