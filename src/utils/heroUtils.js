export function calculateOverall(powerstats) {
    const values = Object.values(powerstats).map((value) => {
        return Number(value) || 0;
    });

    if (values.length === 0) {
        return 0;
    }

    const total = values.reduce((sum, value) => {
        return sum + value;
    }, 0);
    return Math.round(total / values.length);
}