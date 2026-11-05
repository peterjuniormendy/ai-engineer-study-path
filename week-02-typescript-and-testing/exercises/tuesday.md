# Week 2 · Tuesday

> List 5 test cases you'd write for `getAveragePrice`, and why each matters.

_Your answer here._
Missing price: Properties with missing price are not included in average price calculation because they will increase the count of the total properties.

Price should be a number: Properties with a non numeric price will create an error on the calculation.

Non-negative numeric price: Properties with nagative numeric price will alter the final results of the calculation.

Zero price value: Properties with zero price value are included in the calculations.

No property: If there are no properties it should just return zero before reach the calculation to safe time.
