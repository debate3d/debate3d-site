export default [
  {
    route: '/ranking',
    label: 'Ranking de usuários',
    needAuth: bool => bool || true
  },
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
    label: 'Meu deck',
    needAuth: bool => bool && true
  },
  {
    route: '/me/update',
    label: 'Atualizar dados',
    needAuth: bool => bool && true
  }
]
