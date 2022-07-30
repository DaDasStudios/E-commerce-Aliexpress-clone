import { PNG, SVG } from './Images'

export interface Country {
    name: {
        common: string,
        official: string,
        nativeName: {
            [key: string]: object
        }
    },
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: {
        [key: string]: {
            name: string,
            symbol: string
        }
    },
    idd: {
        root: string,
        suffixes: string[]
    },
    capital: string[],
    altSpellings: string[],
    region: string,
    subregion: string,
    languages: {
        [language: string]: string
    },
    translations: object,
    latlng: [number, number],
    landlocked: boolean,
    area: number,
    demonyms: object,
    flag: string,
    maps: {
        googleMaps: string,
        openStreetMaps: string
    },
    population: number,
    car: {
        signs: string[],
        side: 'right' | 'left'
    },
    timezones: string[],
    continents: string[],
    flags: [
        SVG, PNG
    ],
    startOfWeek: string,
    capitalInfo: {
        latlng: [number, number]
    },
    postalCode: {
        format: string,
        regex: RegExp
    },
}

