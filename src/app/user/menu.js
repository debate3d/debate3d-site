export default [
  {
    route: '/users/administrator',
    label: 'Gerencia de usuários',
    needAuth: (bool, _, administrator) => bool && administrator
  },
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
    route: '/me/topics-followed',
    label: 'Temas que estou seguindo',
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
