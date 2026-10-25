# Week 1 · Saturday

> Answer the 7 explanation questions (structure, average, method choices, empty array, invalid prices, 100,000 properties, what was hard).

1. How did you structure the data?
   Firstly, each property is an object since objects are a good choice for storing key-value pair data.
   secondly, those properties are then stored in an array because arrays are a good choice for storing list of items in this case properties.
2. How did you calculate the average?
   To make sure i get the right answer. I first get all the properties that has a valid price and then used the reduce method to calculate the sum of those properties and then divided by the total count of those properties.
3. Why did you choose the methods you used?
   reduce: because it returns a single value. Which is what i want in the case of getting the average price.
   filter: because it suitable in cases where you want list of items that passed a certain condition. example filter properties by location.
   find: this good to get first match of a condition rather going through the hold list. example get property by ID.
   forEach: Suitable for manipulating the results of a conditional check. example county by property type.
4. How did you handle an empty array?
   To handle an empty array, i added a check for an empty array which return null or 0 if the check passes before the calculation. This will ensure an array of list of item/s is calculated. Example null is return in case were the expected return value is a object example cheapest and most expensive property and 0 is return were the expected return value is an integer example average price.
5. How did you handle missing or invalid prices?
   I did this by creating a seperate function that checks for properties with valid prices by following the rules for vaild price.
6. What would happen with 100,000 properties?
   Everything will work as normal and since every function is reusable there will be no writing of new features for every property. But the speed of execution will decrease on less i optimise by
   Repeated work: getProperties() and getPropertiesWithValidPrice since they are called in multiple place, i will called them once at the top and store their results in variables and reuse them rather than repeatedly looping over all 100,000 properties all the time they are needed.
   Output: example filterByBedrooms(2) instead of printing all the results at once i will add a limit and increase if only nessasary(pagination).
7. What part did you find difficult?
   Making sure the rules are tightly implemented example in the countByPropertyType: I had to normalise the case to avoid duplicates. AND vs OR, 0 being falsy, and the regression where a fix broke the normal case.
