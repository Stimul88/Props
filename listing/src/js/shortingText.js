export default function shortingText(text) {
  if(!text) return ;
  if (text.length > 50) {
    const newText = []
    Array.from(text).forEach((item, index) => {

      if(index < 50) {
        newText.push(item)
      }
    })
    return `${newText.join('')}...`
  }
  return text;
}

