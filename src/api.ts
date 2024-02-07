import { store } from './store/app'

export const fetch = (url: string, method: string, body: any = null) => {
  if (url === '/api/posts') {
    if (method === 'GET') {
      return store.getters.getPosts
    }
    if (method === 'POST') {
      store.commit('sharePost', { content: body, comments: [], likes: 0, user: { username: 'demo_user', id: 4 }})
    }
  }
  if (url === '/api/comments') {
    if (method === 'POST') {
      store.commit('submitComment', body)
      return store.getters.getPostById(body.post_id)
    }
  }
  if (url === '/api/account') {
    if (method === 'GET') {
      return store.getters.getAccount
    }
  }
  if (url === '/api/account/following') {
    if (method === 'GET') {
      return store.getters.getPostFollowing
    }
  }
  if (url === '/api/account/posts') {
    if (method === 'GET') {
      return store.getters.getAccountPosts
    }
  }
  if (url === '/api/account/follow-post') {
    if (method === 'POST') {
      store.commit('followPost', body)
    }
  }
  if (url === '/api/account/unfollow-post') {
    if (method === 'POST') {
      store.commit('unfollowPost', body)
    }
  }
  if (url === '/api/account/like-post') {
    if (method === 'POST') {
      store.commit('likePost', body)
    }
  }
  if (url === '/api/account/unlike-post') {
    if (method === 'POST') {
      store.commit('unlike-post', body)
    }
  }
  if (url === '/api/account/notification') {
    if (method === 'POST') {
      store.commit('removeNotification', body)
    }
  }
  url = url.replaceAll('/api/posts/', '')
  if(url.length > 0) {
    const postId = parseInt(url)
    return store.getters.getPostById(postId)
  }
}