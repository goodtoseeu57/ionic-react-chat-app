import {useMutation, useQuery} from 'react-query';
import {gql, request} from 'graphql-request';

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
                        body
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
    const postId = Number(params.queryKey.postId);

    return useQuery('post', async () => {
            const {post} = await request(endpoint,
                gql`
            query {
                post(id: ${postId}) {
                    id
                    title
                    body
                }
            }
        `
            )
            return post;
        },
        {
            cacheTime: 100
        })
}

export interface CreatePostInput {
    title: string,
    body: string
}

export const useCreatePost = () => {
    return useMutation(async (title: any) => {
            const variables = {
                input: {
                    title: title,
                    body: "Some interesting content."
                }
            };
            const {createPost} = await request(endpoint,
                CREATE_POST, variables
            )
            console.log(createPost)
            return createPost;
        },
        {
            onSuccess: () => console.log(`successfully`),
            onError: () => console.log('err'),
        },
    )
}

export const useDeletePost = () => {
    return useMutation(async (id: any) => {
            const variables = {
                id: id
            };
            const {deletePost} = await request(endpoint,
                DELETE_POST, variables
            )
            console.log(deletePost)
            return deletePost;
        },
        {
            onSuccess: () => console.log(`successfully`),
            onError: () => console.log('err'),
        },
    )
}

const DELETE_POST = gql`
        mutation (
          $id: ID!
        ) {
          deletePost(id: $id)
        }
`;


const CREATE_POST = gql`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export function addPostGraphQL() {
    const variables = {
        input: {
            title: "A Very Captivating Post Titlea",
            body: "Some interesting content."
        }
    };
    return request(endpoint, CREATE_POST, variables);
}


export const updatePost = (params: { queryKey: { postId: string, body: any } }) => {

}

