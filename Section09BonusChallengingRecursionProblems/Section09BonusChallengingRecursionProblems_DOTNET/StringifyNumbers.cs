using System;
using System.Dynamic;
using System.Reflection;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Linq;

namespace Section09BonusChallengingRecursionProblems;

public partial class BonusRecursionProblems
{
  /*
  It may be possible to traverse an arbitrarily deep anonymous object in C# and
  modify its number values to strings, but I can't figure it out yet.

  Reflection: no way to update values without knowing the property name beforehand.

  Newtonsoft Json: no way to update the JToken value.

  Json string: this got the closest (although I didn't do it recursively), in that I was
  able to swap the integer values for string values, but then I wasn't able to
  deserialize the json string back into an anonymous object. Rather, it was deserialized
  into a JObject.

  ChatGPT suggested using dynamics and ExpandoObject, but I tried that earlier and ChatGPT's
  suggested code was largely ineffectual.

  Of course trying to do this at all in a strongly typed language is a fool's errand, which is
  why I was curious whether it was possible.
  */
  public static object? StringifyNumbers(object obj)
  {
    //return obj;
    string json = Newtonsoft.Json.JsonConvert.SerializeObject(obj);
    MatchCollection matches = Regex.Matches(json, @"(?<=[a-zA-Z0-9""]:)[^,{]*[0-9]");
    var addCharacterCount = 0;
    foreach (Match match in matches)
    {
      json = json.Remove(match.Index + addCharacterCount, match.Value.Length).
                    Insert(match.Index + addCharacterCount, string.Concat("\"", match.Value.ToString(), "\""));
      addCharacterCount += 2;
    }
    object? returnObj = Newtonsoft.Json.JsonConvert.DeserializeObject(json);
    returnObj = Newtonsoft.Json.JsonConvert.DeserializeAnonymousType(json, obj);

    dynamic dynObject = JObject.Parse(json);

    dynamic? anotherObj = Newtonsoft.Json.JsonConvert.DeserializeObject<ExpandoObject>(json);
    object? anotherAnotherObj = anotherObj as object ?? new object();

    return dynObject;
  }

  // //ChatGPT sillines - start
  // public static object? StringifyNumbers(object obj)
  // {
  //   if (obj == null)
  //   {
  //     return null;
  //   }
  //   dynamic newObj = ConvertToDynamic(obj);
  //   return newObj;
  // }

  // private static object? ConvertToDynamic(object? obj)
  // {
  //   if (obj == null)
  //   {
  //     return null;
  //   }
  //   var type = obj.GetType();
  //   if (type.IsPrimitive || obj is int || obj is decimal)
  //   {
  //     return obj.ToString();
  //   }
  //   ExpandoObject? expandoObj = new ExpandoObject();
  //   IDictionary<string, object?> expandoDict = (IDictionary<string, object?>)expandoObj;
  //   // foreach (var prop in type.GetProperties())
  //   // {
  //   //   expandoDict[prop.Name] = ConvertToDynamic(obj);
  //   // }
  //   foreach (var key in expandoDict.Keys)
  //   {
  //     expandoDict[key] = ConvertToDynamic(expandoDict[key]);
  //   }
  //   //return expandoObj;
  //   return expandoDict;
  // }
  // //ChatGPT silliness - end

  // public static object? StringifyNumbers(object obj)
  // {
  //   if (obj == null)
  //   {
  //     return obj;
  //   }
  //   Type type = obj.GetType();
  //   PropertyInfo[] props = type.GetProperties();
  //   foreach (PropertyInfo prop in props)
  //   {
  //     object? value = prop.GetValue(obj);
  //     if (value != null && value.GetType().IsClass && value.GetType() != typeof(string))
  //     {
  //       StringifyNumbers(value);
  //     }
  //     else if (value != null)
  //     {
  //       int num;
  //       if (int.TryParse(value.ToString(), out num))
  //       {
  //         object newObj = obj with { prop.Name = value.ToString()}
  //       }
  //     }
  //   }
  //   return obj;
  // }

  // public static object StringifyNumbers(object obj)
  // {
  //   if (obj == null)
  //   {
  //     return 0;
  //   }
  //   JToken jToken = JToken.FromObject(obj);
  //   if (jToken != null)
  //   {
  //     foreach (var child in jToken.Children())
  //     {
  //       StringifyNumbersJTokenHelper(child);
  //     }
  //   }
  //   object? rtrn = Newtonsoft.Json.JsonConvert.DeserializeObject(Newtonsoft.Json.JsonConvert.SerializeObject(jToken));
  //   return rtrn ?? new object();
  // }

  // private static void StringifyNumbersJTokenHelper(JToken token)
  // {
  //   if (token != null)
  //   {
  //     if (!token.HasValues)
  //     {
  //       object? obj = token.Value<object>() ?? null;
  //       string str = obj?.ToString() ?? string.Empty;
  //       if (!string.IsNullOrWhiteSpace(str))
  //       {
  //         int num;
  //         if (int.TryParse(str, out num))
  //         {
  //           var test = num;
  //           var path = token.Path;
  //           var root = token.Root;
  //           root.SelectToken(path);
  //           // JObject? jObj = token as JObject;
  //           // if (jObj != null)
  //           // {
  //           //   jObj[path] = str;
  //           // }
  //           //token[path] = str;
  //         }
  //       }
  //     }
  //     foreach (var child in token.Children())
  //     {
  //       StringifyNumbersJTokenHelper(child);
  //     }
  //   }
  // }
}