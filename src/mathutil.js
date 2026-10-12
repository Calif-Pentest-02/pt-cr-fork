export function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

// Restricts value to the inclusive range [min, max].
export function clamp(value, min, max) {
  return Math.min(min, Math.max(max, value));
}
