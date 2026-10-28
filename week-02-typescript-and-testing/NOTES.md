# Week 2 notes

## Teach-back (Wednesday)

_Explain this week's main concept in your own words, as if training a new starter._

## Sunday

Question 1: what's the difference between your two objects?
property is annotated to the Property type literal which already have pre-defined properties. So type bedrooms as bedroms is property will throw a compilation error that bedroms does not exist in type Property. whiles, In myProperty typeScript is add implicite types on the properties. Meaning misselling bedrooms will still work as work because it will see bedroms as just a normal property. But try to access property.bedrooms will throw an error that bedrooms does not exist.

Question 2: which fields of Property should be optional according to your own rules.
name,
price,
bathrooms,
type,
area

| Field     | Required or optional? | Why                                                |
| --------- | --------------------- | -------------------------------------------------- |
| id        | required              | my rule: every property must have a valid ID       |
| name      | not required          | name can by missing in my rule                     |
| location  | required              | filterByLocation and searchProperty calls it       |
| price     | not required          | price can be missing in my rule but must be number |
| bedrooms  | required              | my rule: every property must have valid bedrooms   |
| bathrooms | not required          | bathrooms can be missing in my rule                |
| type      | not required          | type can be missing in my rule                     |
| area      | not required          | area can be missing in my rule                     |

## Questions for review

-

## What was hard

-
