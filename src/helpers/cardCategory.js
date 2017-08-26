export default favorVotes => {
  if (favorVotes < 50) return 'Card Comum'
  if ((favorVotes >= 50) && (favorVotes < 100)) return 'Card Rara'
  if ((favorVotes >= 100) && (favorVotes < 200)) return 'Card Lendária'
  if ((favorVotes >= 200) && (favorVotes < 500)) return 'Card Épica'
  if (favorVotes >= 500) return 'Card Mito'
}
