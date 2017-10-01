export default [
  {
    route: '/topic/list',
    label: 'Temas',
    needAuth: bool => bool || true
  },
  {
    route: '/topic/new',
    label: 'Criar tema',
    needAuth: (bool, subscriber) => bool && true && subscriber
  }
]
