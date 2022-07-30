export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-es', {
        style: 'currency', currency: 'COP'
    }).format(value)

}