export default [
  {
    route: '/app/users/administrator',
    label: 'Gerencia de usuários',
    needAuth: (bool, _, administrator) => bool && administrator
  },
  {
    route: '/app/ranking',
    label: 'Ranking de usuários',
    needAuth: bool => bool || true
  },
  {
    route: '/app/me/cards',
    label: 'Meus cards',
    needAuth: bool => bool && true
  },
  {
    route: '/app/me/topics',
    label: 'Meus temas',
    needAuth: bool => bool && true
  },
  {
    route: '/app/me/deck',
    label: 'Meu deck',
    needAuth: bool => bool && true
  },
  {
    route: '/app/me/update',
    label: 'Atualizar dados',
    needAuth: bool => bool && true
  }
]
