# Week 1 · Wednesday

> Write pseudocode for every function `property-statistics` needs.

_Your answer here._

Agreed data rules

- A property with a missing or non-numeric price remains valid, but must be excluded from price-dependent calculations.
- A missing or empty title is allowed; display it as No name.
- A missing or empty property type is allowed; display it as No type.
- Compare and count property types in lowercase.
- When displaying a property type, capitalise the first letter and lowercase the rest (for example, studio becomes Studio).
- Zero bedrooms is allowed.
- Negative bedrooms are invalid.
- A provided bedroom count must be a valid number.
- Missing bathroom count is allowed; treat it as unknown and exclude it from bathroom calculations.
- Zero bathrooms is allowed in the dataset but should be flagged for review because it may indicate incomplete data or an unusual property.
- Negative bathroom counts are invalid.
- A provided bathroom count must be numeric. Decimal values such as 1.5 are allowed to represent a full bathroom plus a half-bathroom.
- Invalid bathroom data should not automatically invalidate the whole property: preserve the property where possible, mark the bathroom value as invalid/unknown, and exclude it from bathroom-related calculations. Report data-quality issues clearly.
- A property must have a valid ID.
- Do not silently drop invalid records. Report how many records were skipped and, where useful, why.
- Unless a function says otherwise, work with valid properties only.
- For price calculations, include only properties with a valid, non-negative numeric price.
- For bedroom calculations, include only properties with a valid bedroom count.

1.  isValidProperty(property)
    FUNCTION isValidProperty(property)

        IF property is missing OR property is not an object
            RETURN false
        END IF

        IF property has no valid ID
            RETURN false
        END IF

        IF bedrooms is provided AND bedrooms is not a valid number
            RETURN false
        END IF

        IF bedrooms is less than 0
            RETURN false
        END IF

        IF bathrooms is provided AND bathrooms is not a valid number
            MARK bathroom data as invalid or unknown
            DO NOT reject the whole property for this issue alone
        END IF

        IF bathrooms is less than 0
            MARK bathroom data as invalid or unknown
            DO NOT reject the whole property for this issue alone
        END IF

        IF bathrooms equals 0
            KEEP the property
            FLAG bathroom data for review
        END IF

        RETURN true

END FUNCTION
A missing price, title, or property type does not invalidate a property under the agreed rules.

2.  getProperties()
    FUNCTION getProperties()

        READ the property's source dataset

        CREATE an empty list for valid properties
        SET invalid record count to 0

        FOR EACH property in the dataset
            IF isValidProperty(property) is true
                ADD property to the valid properties list
            ELSE
                INCREASE invalid record count
            END IF
        END FOR

        IF invalid record count is greater than 0
            REPORT how many invalid records were skipped
        END IF

        RETURN the valid properties list

END FUNCTION

3.  getPropertyById(id)
    FUNCTION getPropertyById(id)

        GET the valid properties using getProperties()

        FOR EACH property in the valid properties
            IF property's ID matches id
                RETURN property
            END IF
        END FOR

        RETURN not found

END FUNCTION

4.  getTotalProperties()
    FUNCTION getTotalProperties()

        GET the valid properties using getProperties()

        RETURN the number of valid properties

END FUNCTION

5.  getAveragePrice()
    FUNCTION getAveragePrice()

        GET the valid properties using getProperties()
        CREATE an empty list of valid prices

        FOR EACH property in the valid properties
            IF property has a numeric price AND price is not negative
                ADD price to the valid prices list
            END IF
        END FOR

        IF the valid prices list is empty
            RETURN no result available
        END IF

        CALCULATE the sum of valid prices
        DIVIDE the sum by the number of valid prices

        RETURN the average price

END FUNCTION

6.  getCheapestProperty()
    FUNCTION getCheapestProperty()

        GET the valid properties using getProperties()
        KEEP only properties with a valid, non-negative numeric price

        IF no properties have a valid price
            RETURN no result available
        END IF

        SET cheapest property to the first property in the filtered list

        FOR EACH remaining property in the filtered list
            IF property's price is lower than cheapest property's price
                SET cheapest property to this property
            END IF
        END FOR

        RETURN cheapest property

END FUNCTION

7.  getMostExpensiveProperty()
    FUNCTION getMostExpensiveProperty()

        GET the valid properties using getProperties()
        KEEP only properties with a valid, non-negative numeric price

        IF no properties have a valid price
            RETURN no result available
        END IF

        SET most expensive property to the first property in the filtered list

        FOR EACH remaining property in the filtered list
            IF property's price is higher than most expensive property's price
                SET most expensive property to this property
            END IF
        END FOR

        RETURN most expensive property

END FUNCTION

8.  getAverageBedrooms()
    FUNCTION getAverageBedrooms()

        GET the valid properties using getProperties()
        KEEP properties with a valid, non-negative numeric bedroom count

        IF no properties have a valid bedroom count
            RETURN no result available
        END IF

        CALCULATE the sum of the bedroom counts
        DIVIDE the sum by the number of properties with valid bedroom counts

        RETURN the average number of bedrooms

END FUNCTION

9.  getAverageBathrooms()
    FUNCTION getAverageBathrooms()

        GET the valid properties using getProperties()
        CREATE an empty list of usable bathroom counts

        FOR EACH property in the valid properties
            IF bathroom count is present
               AND bathroom count is numeric
               AND bathroom count is greater than 0
                ADD bathroom count to the usable bathroom counts
            END IF
        END FOR

        IF the usable bathroom counts list is empty
            RETURN no result available
        END IF

        CALCULATE the sum of the usable bathroom counts
        DIVIDE the sum by the number of usable bathroom counts

        RETURN the average bathroom count

END FUNCTION
Missing, zero, negative, or non-numeric bathroom values are excluded from this average. Zero values should also be flagged for review, while negative or non-numeric values should be reported as data-quality issues.

10. filterByBathrooms(minBathrooms)
    FUNCTION filterByBathrooms(minBathrooms)

        IF minBathrooms is not a valid, non-negative number
            RETURN a clear invalid-input result
        END IF

        GET the valid properties using getProperties()
        CREATE an empty results list

        FOR EACH property in the valid properties
            IF bathroom count is numeric
               AND bathroom count is greater than or equal to minBathrooms
               AND bathroom count is not negative
                ADD property to the results list
            END IF
        END FOR

        RETURN the results list

END FUNCTION
Properties with missing or invalid bathroom data are excluded from this bathroom-based filter.

11. filterByLocation(location)
    FUNCTION filterByLocation(location)

        GET the valid properties using getProperties()
        CREATE an empty results list

        NORMALISE the requested location for case-insensitive comparison

        FOR EACH property in the valid properties
            IF property's location exists AND matches the requested location
               without considering letter case
                ADD property to the results list
            END IF
        END FOR

        RETURN the results list

END FUNCTION

12. filterByPrice(maxPrice)
    FUNCTION filterByPrice(maxPrice)

        IF maxPrice is not a valid, non-negative number
            RETURN a clear invalid-input result
        END IF

        GET the valid properties using getProperties()
        CREATE an empty results list

        FOR EACH property in the valid properties
            IF property has a valid, non-negative numeric price
               AND property's price is less than or equal to maxPrice
                ADD property to the results list
            END IF
        END FOR

        RETURN the results list

END FUNCTION

13. filterByBedrooms(minBedrooms)
    FUNCTION filterByBedrooms(minBedrooms)

        IF minBedrooms is not a valid, non-negative number
            RETURN a clear invalid-input result
        END IF

        GET the valid properties using getProperties()
        CREATE an empty results list

        FOR EACH property in the valid properties
            IF property has a valid bedroom count
               AND property's bedroom count is greater than or equal to minBedrooms
                ADD property to the results list
            END IF
        END FOR

        RETURN the results list

END FUNCTION

14. countByPropertyType()
    FUNCTION countByPropertyType()

        GET the valid properties using getProperties()
        CREATE an empty collection to store type counts

        FOR EACH property in the valid properties
            IF property type is missing or empty
                SET category to "no type"
            ELSE
                CONVERT property type to lowercase
                SET category to the normalised type
            END IF

            INCREASE the count for that category
        END FOR

        RETURN the type counts

END FUNCTION

15. searchProperties(criteria)
    The criteria may contain any combination of location, maxPrice, minBedrooms, and minBathrooms. Omitted criteria should not filter the results.
    FUNCTION searchProperties(criteria)

        GET the valid properties using getProperties()
        CREATE an empty results list

        VALIDATE any criteria that were supplied
        IF a supplied criterion is invalid
            RETURN a clear invalid-input result
        END IF

        FOR EACH property in the valid properties
            SET matches to true

            IF location criterion was supplied
               AND property's location does not match it case-insensitively
                SET matches to false
            END IF

            IF maxPrice criterion was supplied
               AND property does not have a valid price
                    OR property's price is greater than maxPrice
                SET matches to false
            END IF

            IF minBedrooms criterion was supplied
               AND property does not have a valid bedroom count
                    OR property's bedroom count is less than minBedrooms
                SET matches to false
            END IF

            IF minBathrooms criterion was supplied
               AND property's bathroom count is missing, non-numeric, or negative
                    OR property's bathroom count is less than minBathrooms
                SET matches to false
            END IF

            IF matches is true
                ADD property to the results list
            END IF
        END FOR

        RETURN the results list

END FUNCTION

16. medianPropertyPrice()
    FUNCTION medianPropertyPrice()

        GET the valid properties using getProperties()
        COLLECT only valid, non-negative numeric prices

        IF there are no valid prices
            RETURN no result available
        END IF

        SORT the prices from lowest to highest

        IF the number of prices is odd
            SELECT the middle price
        ELSE
            SELECT the two middle prices
            CALCULATE their average
        END IF

        RETURN the median price

END FUNCTION

17. mostCommonLocation()
    FUNCTION mostCommonLocation()

        GET the valid properties using getProperties()
        CREATE an empty collection to store location counts

        FOR EACH property in the valid properties
            IF property's location is present and not empty
                NORMALISE location for case-insensitive comparison
                INCREASE the count for that location
            END IF
        END FOR

        IF no usable locations were found
            RETURN no result available
        END IF

        FIND the location with the highest count

        IF multiple locations share the highest count
            APPLY a consistent tie-breaking rule
        END IF

        RETURN the most common location

END FUNCTION

18. averagePricePerBedroom()
    FUNCTION averagePricePerBedroom()

        GET the valid properties using getProperties()
        CREATE an empty list of price-per-bedroom values

        FOR EACH property in the valid properties
            IF property has a valid, non-negative numeric price
               AND bedroom count is a valid number
               AND bedroom count is greater than 0
                CALCULATE price divided by bedroom count
                ADD the result to the list
            END IF
        END FOR

        IF the list is empty
            RETURN no result available
        END IF

        CALCULATE the average of the values in the list

        RETURN the average price per bedroom

END FUNCTION
Zero-bedroom properties are excluded from this particular calculation because division by zero is undefined.

19. highestPricedByLocation()
    FUNCTION highestPricedByLocation()

        GET the valid properties using getProperties()
        CREATE an empty collection to store the highest-priced property per location

        FOR EACH property in the valid properties
            IF property has a non-empty location
               AND property has a valid, non-negative numeric price

                NORMALISE location for case-insensitive comparison

                IF no property has been recorded for this location yet
                    RECORD this property as the highest-priced property for the location
                ELSE IF property's price is higher than the recorded property's price
                    REPLACE the recorded property with this property
                END IF
            END IF
        END FOR

        RETURN the collection of highest-priced properties by location

END FUNCTION

## Property display formatting

Use this logic when displaying property fields.
Title
WHEN displaying a property's title
IF title is missing or empty
DISPLAY "No name"
ELSE
DISPLAY the title
END IF
END
Property type
WHEN displaying a property's type
IF property type is missing or empty
DISPLAY "No type"
ELSE
CONVERT property type to lowercase
CAPITALISE its first letter
DISPLAY the formatted type
END IF
END
