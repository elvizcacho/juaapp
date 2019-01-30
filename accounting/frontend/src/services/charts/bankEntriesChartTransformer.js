export function bankEntriesToPieData(bankEntries) {
    const categories = bankEntries.reduce((acum, bankEntry) => {
        if (acum.indexOf(bankEntry.category) === -1) {
            acum.push(bankEntry.category)
        }
        return acum
    }, [])
    const pieData = categories.map(category => {
        const totalSpendInCategory = bankEntries.reduce((acum, bankEntry) => {
            return (bankEntry.category === category) ? acum + bankEntry.value : acum
        }, 0)
        return [category, Math.abs(totalSpendInCategory)]
    })
    const headers = ['category', 'money_spent_in_category']
    return [headers, ...pieData]
}

