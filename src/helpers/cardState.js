export default label => {
  if (label === 'Card Comum') return 'common'
  if (label === 'Card Rara') return 'rare'
  if (label === 'Card Lendária') return 'legend'
  if (label === 'Card Épica') return 'epic'
  if (label === 'Card Mito') return 'myth'
}
