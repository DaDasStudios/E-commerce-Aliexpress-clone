import { Country } from "../../interfaces/Country"

export default (data: Country[]) => {
    data.sort((x, y) => {
        if (x.name.common < y.name.common) return -1
        if (x.name.common > y.name.common) return 1
        return 0
    })
    return data
}