export default [
  {
    route: '/app/topic/list',
    label: 'Temas',
    needAuth: bool => bool || true
  },
  {
    route: '/app/topic/new',
    label: 'Criar tema',
    needAuth: (bool, subscriber) => bool && true && subscriber
  }
]
