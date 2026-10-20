Agreed data rules

- A property most have a valid ID.
- For price calculations, include only properties with a valid, non-negative numeric price.
- For bedroom calculations, include only properties with a valid bedroom count.
- Negative bedrooms are invalid.
- A provided bedroom count must be a valid number.
- Compare and count property types in lowercase.
- Missing bathroom count is allowed; treat it as unknown and exclude it from bathroom calculations.

FUNCTION isValidProperty(property)
IF property is empty
RETURN false
ELSE IF property has no ID OR property ID is NOT valid
RETURN false
ELSE IF property bedroom < 0 OR property bedroom is NOT a number
RETURN false
ELSE
RETURN true

FUNCTION getProperties()
FOR all properties
FILTER IF isValidProperty(property)

FUNCTION getPropertyById(id)
validProperties = getProperties()
FOR all validProperties FIND property
IF property ID == id
RETURN property

FUNCTION getTotalProperties()
validProperties = getProperties()
RETURN validProperties LENGTH

FUNCTION getAveragePrice()
validProperties = getProperties()
FOR all validProperties
FILTER validProperty IF property HAS price AND isNumber property price AND property price >= 0
IF filtered property is empty
RETURN false
ELSE
RETURN SUM of filtered properties price / LENGTH of filtered properties

FUNCTION getCheapestProperty()
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF property HAS price AND isNumber property price AND property price >= 0 AND property price is MINIMUM
RETURN property

FUNCTION getMostExpensiveProperty()
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF property HAS price AND isNumber property price AND property price >= 0 AND property price is MAXIMUM
RETURN property

FUNCTION getAverageBedrooms()
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF property HAS bedroom AND bedroom >= 0
IF filtered property is empty
RETURN false
ELSE
RETURN SUM filtered properties bedroom / LENGTH of filtered properties

FUNCTION filterByBathrooms(numOfBathrooms)
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF property HAS bathroom AND bathroom > 0 AND bathroom <= numOfBathrooms
RETURN filered properties

FUNCTION filterByLocation(location)
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF property HAS location AND property location toLoweCase == location toLowerCase
RETURN filered properties

FUNCTION filterByPrice(price)
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF property HAS price AND isNumber property price AND property price >= 0 AND property price <= price
RETURN filtered properties

FUNCTION filterByBedrooms(numOfBedrooms)
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF property HAS bedroom AND bedroom >= 0 AND bedroom >= numOfBedrooms
RETURN filtered properties

FUNCTION countByPropertyType()
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF property HAS propertyType
RETURN LENGHT of filtered properties

FUNCTION searchProperties(criteria)
check IF criteria is an object
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF ANY of property values MATCHES ANY of criteria values
RETURN filtered properties

<!-- FUNCTION mostCommonLocation()
validProperties = getProperties()
FOR all validProperties
FILTER validProperties IF property HAS location
FOR all filtered properties with MAXIMUM location
RETURN location -->

FUNCTION highestPricedByLocation(location)
filterByLocation(location)
FOR all filtered properties
return property with maximum price
