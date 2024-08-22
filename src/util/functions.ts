export function opacityToHex(opacity: number) {
  opacity = Math.max(0, Math.min(100, opacity));
  const decimalValue = Math.round((opacity / 100) * 255);
  return decimalValue.toString(16).padStart(2, '0').toUpperCase();
}
