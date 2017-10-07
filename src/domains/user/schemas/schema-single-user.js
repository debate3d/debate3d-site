const schemaSingleUser = {
  name: 'Carregando usuário',
  uid: '',
  email: '',
  created: '',
  facebook: '',
  instagram: '',
  site: '',
  twitter: '',
  youtube: '',
  topics: {
    count: '',
    records: [
      {
        uid: '',
        ponts: '',
        title: '',
        cards: {
          count: ''
        },
        position: {
          positive: '',
          negative: ''
        },
        votes_topic: {
          count: '',
          positive: {
            id: ''
          },
          negative: {
            id: ''
          }
        },
        tags: {
          uid: '',
          label: ''
        }
      }
    ]
  },
  cards: {
    count: '',
    records: [
      {
        uid: '',
        author: {
          name: '',
          uid: '',
          avatar_id: null
        },
        topic: {
          uid: '',
          title: ''
        },
        content: '',
        position: '',
        ponts: '',
        deck: [
          {
            id: '',
            user: {
              uid: '',
              name: ''
            }
          }
        ],
        likes: [
          {
            id: '',
            user: {
              uid: '',
              name: ''
            }
          }
        ],
        dislikes: [
          {
            id: '',
            user: {
              uid: '',
              name: ''
            }
          }
        ]
      }
    ]
  }
}

export default schemaSingleUser
