# Week 2 · Tuesday

> List 5 test cases you'd write for `getAveragePrice`, and why each matters.

Valid calculable price: Properties with valid normal prices should return the expected outcome. Example [{200},{100},{100},{100}] should return 125.

Missing price: Properties with missing price are not included in average price calculation because they will increase the count of the total properties. Example [{200},{undefined},{100},{100}] should return 133.33 instead of 100

Price should be a number: Properties with a non numeric price will result to an undesired outcome from the calculation. Example [{200},{'test'},{100},{100}] should result to 133.33 instead of NaN.

Non-negative numeric price: Properties with negative numeric price will alter the final results of the calculation. Example [{200},{-200},{100},{100}] should return 133.33 instead of 50

Zero price value: Properties with zero price value are included in the calculations. Example [{200},{0},{100},{100}] should return 100 instead of 133.33.

No property: If there are no properties it should just return zero before reach the calculation to avoid getting NaN as a result. Example [] of properties should return 0 instead of 0/0 which return NaN.
