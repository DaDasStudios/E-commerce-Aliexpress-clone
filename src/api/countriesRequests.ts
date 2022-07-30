import axios, { AxiosResponse } from 'axios'
import { Country } from '../interfaces/Country'
import sortCountries from './util/sortCountries'

export type GetCountriesResponse = {
    data: Country[]
}



export const getAllCountries = async (): Promise<AxiosResponse<Country[], any>> => {
    const res = await axios.get<Country[]>("https://restcountries.com/v3/all?fields=name,currencies,languages,flags")
    res.data = sortCountries(res.data)
    return res
}