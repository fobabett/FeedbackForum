import { createStore, mapGetters } from 'vuex'

const mockPosts = [
  {
    id: 0,
    user: {
      id: 0,
      profile_img: '',
      username: 'awkwurd'
    },
    likes: 100,
    comments: [
      {
        id: 0,
        username: 'bob',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Mattis aliquam faucibus purus in massa tempor. Eget felis eget nunc lobortis mattis. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Sed augue lacus viverra vitae congue eu consequat ac. Quisque sagittis purus sit amet volutpat consequat. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. A iaculis at erat pellentesque adipiscing. Nec ultrices dui sapien eget mi proin sed libero. Hendrerit gravida rutrum quisque non. Tincidunt arcu non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Tempor orci eu lobortis elementum nibh tellus molestie. Sed id semper risus in hendrerit.',
        likes: 1
      },
      {
        id: 1,
        username: 'someGuy',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0
      },
      {
        id: 2,
        username: 'basshead',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0
      },
      {
        id: 3,
        username: 'blah',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0
      }
    ],
    content: {
      title: 'Old Wives\' Tale',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      media: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1425736090&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sofckinawkwurd" title="ａｗｋｗｕｒｄ" target="_blank" style="color: #cccccc; text-decoration: none;">ａｗｋｗｕｒｄ</a> · <a href="https://soundcloud.com/sofckinawkwurd/old-wives-tale" title="Old Wives&#x27; Tale" target="_blank" style="color: #cccccc; text-decoration: none;">Old Wives&#x27; Tale</a></div>'
    }
  },
  {
    id: 2,
    user: {
      id: 3,
      profile_img: '',
      username: 'blah'
    },
    likes: 0,
    comments: [],
    content: {
      title: 'Noob Tube',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      media: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3z3jil4H68qM9yOmW5oSsT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    }
  },
  {
    id: 3,
    user: {
      id: 3,
      profile_img: '',
      username: 'tevallee'
    },
    likes: 0,
    comments: [],
    content: {
      title: 'ToeFu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      media: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/246492200&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/awkwurd-awkwurd" title="Te Vallee (Awkwurd)" target="_blank" style="color: #cccccc; text-decoration: none;">Te Vallee (Awkwurd)</a> · <a href="https://soundcloud.com/awkwurd-awkwurd/toe-fu" title="Toe Fu" target="_blank" style="color: #cccccc; text-decoration: none;">Toe Fu</a></div>'
    }
  }
]

const account = {
  username: 'demo_user',
  id: 4,
  following: [],
  liked_posts: [],
  liked_comments: []
}

export const store = createStore({
  computed: {
    ...mapGetters([
      'getPosts',
      'getPostById',
      'getAccount'
    ])
  },
  state: {
    posts: [...mockPosts],
    account: account
  },
  mutations: {
    submitComment (state, payload) {
      state.posts = state.posts.map(post => {
        if (post.id === parseInt(payload.post_id)) {
          post.comments.unshift({
            id: post.comments.length + 1,
            username: state.account.username,
            text: payload.comment,
            likes: 0
          })
        }
        return post
      })
    },
    followPost (state, payload) {
      state.account.following = [...state.account.following, payload.post_id]
    },
    unfollowPost (state, payload) {
      state.account.following = state.account.following.filter(f => f !== payload.post_id)
    },
    likePost (state, payload) {
      state.account.liked_posts.push(payload.post_id)
    },
    unlikePost (state, payload) {
      state.account.liked_posts.filter(post => post !== payload.post_id)
    },
    sharePost (state, payload) {
      state.posts.unshift(payload)
    }
  },
  getters: {
    getPosts: (state) => {
      return state.posts
    },
    getPostById: (state) => (id: Number) => {
      return state.posts.find(post => post.id === id)
    },
    getAccount: (state) => {
      return state.account
    }
  }
})