export default [
  {
    route: '/me/cards',
    label: 'Meus cards',
    needAuth: bool => bool && true
  },
  {
    route: '/me/topics',
    label: 'Meus temas',
    needAuth: bool => bool && true
  },
  {
    route: '/me/deck',
    label: 'Meus deck',
    needAuth: bool => bool && true
  },
  {
    route: '/me/update',
    label: 'Atualizar dados',
    needAuth: bool => bool && true
  }
]
