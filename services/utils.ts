export const roundToDecimals = (num: number | null | undefined, decimalPlaces: number) => {
    if (num == undefined || num == null)
        return 0
    const multiplier = Math.pow(10, decimalPlaces)
    const result = Math.floor(num * multiplier) / multiplier
    return result
}

export const formatNumber = (num: number) => {
    if (num >= 1e12) {
      return (num / 1e12).toFixed(2) + 'T'; // Format as billions
    } else if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + 'B'; // Format as billions
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + 'M'; // Format as millions
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2) + 'K'; // Format as thousands
    } else {
      return num.toFixed(2);
    }
  }

  export const minimizeString = (input: string): string => {
    const firstFour = input.substring(0, 6);
    const lastFour = input.substring(input.length - 6);
  
    return firstFour + '...' + lastFour;
  };