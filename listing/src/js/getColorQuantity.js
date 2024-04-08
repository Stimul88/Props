export default function getColorQuantity(count) {
  if (count <= 10) {
    return 'level-low'
  }
  if (count > 10 && count <= 20) {
    return 'level-medium'
  }
  if (count > 20) {
    return 'level-high'
  }
}