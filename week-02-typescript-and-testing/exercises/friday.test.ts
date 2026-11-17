// Week 2 · Friday
// Task: Write one new function (e.g. price per bedroom) test-first. Put the function and its test here.
// Write your solution below, run it, then commit and push.
import { describe, it, expect } from "vitest";

export type RawProperty = {
  id: number | string | undefined;
  name?: string;
  location: string;
  price?: number | string | undefined;
  bedrooms: number;
  bathrooms?: number | string | undefined;
  type?: string;
  area?: number | string | undefined;
};

export const properties: RawProperty[] = [
  {
    id: 1,
    name: "luxury bungalow",
    location: "Leenwood",
    price: 100000,
    bedrooms: 3,
    bathrooms: 2,
    type: "House",
    area: 1500,
  },
  {
    id: 2,
    name: "Rise Apartments",
    location: "leeds",
    price: "gfd",
    bedrooms: 4,
    bathrooms: 3,
    type: "House",
    area: 2000,
  },
  {
    id: 3,
    name: "running house",
    location: "birmingham",
    price: 300000,
    bedrooms: 4,
    bathrooms: 4,
    type: "Semi-detached",
    area: 250,
  },
  {
    id: 4,
    name: "mordern escape",
    location: "leeds",
    price: 400000,
    bedrooms: 1,
    bathrooms: 1,
    type: "Studio",
    area: 3000,
  },
];

export function PricePerBedroom(properties: RawProperty[]): object[] {
  const pricePerBedroom: object[] = [];
  properties.forEach((property: RawProperty) => {
    if (
      property &&
      property.price !== undefined &&
      typeof property.price == "number" &&
      property.price >= 0 &&
      property.bedrooms !== undefined &&
      typeof property.bedrooms === "number" &&
      property.bedrooms >= 0
    ) {
      const name = property.name ? property.name : "";
      const result =
        property.bedrooms === 0
          ? property.price.toFixed(2)
          : (property.price / property.bedrooms).toFixed(2);
      const prop = {
        [name]: result,
      };
      pricePerBedroom.push(prop);
    }
  });

  return pricePerBedroom;
}

describe("PricePerBedroom", () => {
  it("should calculate the price per bedroom", () => {
    const properties: RawProperty[] = [
      {
        id: 1,
        name: "Property A",
        location: "Leeds",
        price: 200000,
        bedrooms: 2,
      },
      {
        id: 2,
        name: "Property B",
        location: "Manchester",
        price: 300000,
        bedrooms: 3,
      },
    ];

    expect(PricePerBedroom(properties)).toEqual([
      { "Property A": "100000.00" },
      { "Property B": "100000.00" },
    ]);
  });

  it("should return the original price when bedrooms are zero", () => {
    const properties: RawProperty[] = [
      {
        id: 3,
        name: "Studio",
        location: "Leeds",
        price: 120000,
        bedrooms: 0,
      },
    ];

    expect(PricePerBedroom(properties)).toEqual([{ Studio: "120000.00" }]);
  });

  it("should exclude properties with non-numeric prices", () => {
    const properties: RawProperty[] = [
      {
        id: 4,
        name: "Invalid Property",
        location: "Leeds",
        price: "200000",
        bedrooms: 2,
      },
    ];

    expect(PricePerBedroom(properties)).toEqual([]);
  });
  it("should exclude properties with negative prices", () => {
    const properties: RawProperty[] = [
      {
        id: 5,
        name: "Negative Price",
        location: "Leeds",
        price: -50000,
        bedrooms: 2,
      },
    ];

    expect(PricePerBedroom(properties)).toEqual([]);
  });
});
