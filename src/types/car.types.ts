export type FuelType = "Diesel" | "Petrol" | "Electric" | "Hybrid";
export type TransmissionType = "Automatic" | "Manual";
export type CategoryType =
  | "SUV"
  | "Van"
  | "Sedan"
  | "Pickup"
  | "Luxury"
  | "Hatchback"
  | "MPV"
  | "Minibus"
  | "Bus";

export interface Car {
  id: number;
  group: string;
  brand: string;
  model: string;
  category: CategoryType;
  fuel: FuelType;
  doors: number;
  people: number;
  transmission: TransmissionType;
  images: string[];
  pricePerDay: number;
  highlight: boolean;
  description: string;
  features: string[];
}