
export function msToTime(ms) {
    const minutes = (ms / (1000 * 60)).toFixed(0);
    const hours = (ms / (1000 * 60 * 60)).toFixed(0);

    if (minutes < 60) {
        return minutes + 'minutes'
    }

    return hours + 'h';
}