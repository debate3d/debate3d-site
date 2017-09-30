const user = {
  uid: '',
  name: ''
}

export default {
  uid: '',
  content: 'Carregando conteúdo',
  position: true,
  created: '',
  edited: false,
  ponts: 0,
  topic: {
    uid: '',
    title: '',
    position: {
      positive: '',
      negative: ''
    }
  },
  author: {
    uid: '',
    name: 'Carregando autor'
  },
  likes: [
    {
      reaction: '',
      user
    }
  ],
  dislikes: [
    {
      reaction: '',
      user
    }
  ],
  deck: [
    {
      user
    }
  ]
}
