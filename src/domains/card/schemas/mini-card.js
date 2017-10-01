const user = {
  uid: '',
  name: ''
}

const reaction = {
  reaction: '',
  user
}

export default {
  uid: '',
  edited: false,
  content: '',
  topic: {
    uid: '',
    title: ''
  },
  likes: [
    reaction
  ],
  dislikes: [
    reaction
  ],
  deck: [
    {
      id: '',
      uid_card: '',
      uid_user: '',
      user
    }
  ],
  ponts: '',
  author: user
}
