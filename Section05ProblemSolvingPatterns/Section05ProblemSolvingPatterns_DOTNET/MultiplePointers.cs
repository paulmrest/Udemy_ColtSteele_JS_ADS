using System;

namespace SectionFiveProblemSolvingPatterns.MultiplePointers;

public class MultiplePointers
{
  public static int CountUniqueValues(int[] array)
  {
    if (array.Length <= 0)
    {
      return 0;
    }
    int firstIndex = 0;
    int secondIndex = 1;
    while (array.Length > secondIndex)
    {
      if (array[firstIndex] != array[secondIndex])
      {
        firstIndex++;
        array[firstIndex] = array[secondIndex];
        secondIndex++;
      }
      else
      {
        secondIndex++;
      }
    }
    return firstIndex + 1;
  }
}