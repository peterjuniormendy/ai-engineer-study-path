# Week 1 · Saturday

> Answer the 7 explanation questions (structure, average, method choices, empty array, invalid prices, 100,000 properties, what was hard).

1. How did you structure the data?
   Firstly, each property is an object since objects are a good choice for storing key-value pair data.
   secondly, those properties are then stored in an array because arrays are a good choice for storing list of items in this case properties.
2. How did you calculate the average?
   To make sure i get the right answer. I first get all the properties that has a valid price and then used the reduce method to calculate the sum of those properties and then divided by the total count of those properties.
3. Why did you choose the methods you used?
   I choose reduce because it returns a single value. Which is what i want in this case.
4. How did you handle an empty array?
   To handle an empty array, i added a check for an empty array which return null if the check passes before the calculation. This will ensure an array a list of item/s is calculated.
5. How did you handle missing or invalid prices?
   I did this by creating a seperate function that checks for properties with valid prices by following the rules for vaild price.
6. What would happen with 100,000 properties?
   Everything will work as normal and since every function is reusable there will be no writing of new features for every property.
7. What part did you find difficult?
   Making sure the rules are tightly implemented example in the countByPropertyType: I had to normalise the case to avoid duplicates.
