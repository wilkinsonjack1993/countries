
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Continent {
    EUROPE = "EUROPE",
    NORTH_AMERICA = "NORTH_AMERICA",
    SOUTH_AMERICA = "SOUTH_AMERICA",
    AFRICA = "AFRICA",
    ASIA = "ASIA",
    OCEANIA = "OCEANIA",
    ANTARTICA = "ANTARTICA"
}

export class Country {
    id: number;
    name?: string;
    capital?: string;
    continent?: Continent;
    currencies?: Currency[];
}

export abstract class IQuery {
    country?: Country;
    allCountries?: Country[];
}

export class Currency {
    id: number;
    name?: string;
    symbol?: string;
    abbreviation?: string;
}
