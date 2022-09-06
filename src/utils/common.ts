function firstUpperCase(str: string): string {
  if (!str) return str
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}
export { firstUpperCase }
