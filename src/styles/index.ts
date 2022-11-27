export const rem = (value: number | string): string => {
  const baseFontSize = 16
  // parse float strips px from string and converts it to number
  const parsedValue = typeof value === 'string' ? parseFloat(value) : value
  return `${parsedValue / baseFontSize}rem` // 1px = 0.0625rem
}

export const spacers = {
  spacer2: 8,
  spacer3: 12,
  spacer4: 16,
}

export const borderRadius = {
  sm: '2px',
}

export const colors = {
  transparent: 'rgba(0, 0, 0, 0)',
  white: 'white',
  black: '#111',
  grey: '#777',
}
