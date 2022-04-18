import { useQuery } from 'react-query';
import { request, gql } from 'graphql-request';

const endpoint = 'https://graphqlzero.almansi.me/api'

export const usePosts = (params: { queryKey: { page: number, limit: number } }) => {
  return useQuery('posts', async (r) => {
      const {
        posts: {data}
      } = await request(
        endpoint,
        gql`
            query {
                posts(options: { paginate: {page: ${params.queryKey.page}, limit:${params.queryKey.limit} } } ) {
                    data {
                        id
                        title
                    }
                }
            }
        `
      )
      return data
    },
    {
      cacheTime: 5 * 60 * 1000
    })
}


export const usePost = (params: { queryKey: { postId: string } }) => {
  return useQuery('post', async () => {
      const {post} = await request(endpoint,
        gql`
            query {
                post(id: 1) {
                    id
                    title
                    body
                }
            }
        `
      )
      console.log(post)
      return post;
    },
    {
      cacheTime: 100
    })
}


