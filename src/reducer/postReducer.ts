import { Post } from "@/types/Post";

type AddPost = {
    type: 'add',
    payload: { title: string, body: string }
}

type EditPost = {
    type: 'edit',
    payload: { id: number, newTitle: string, newBody: string }
}

type DeletePost = {
    type: 'delete',
    payload: { id: number }
}

type ListActions = AddPost | EditPost | DeletePost

export const postReducer = (posts: Post[], actions: ListActions) => {
    switch (actions.type) {
        case 'add':
            return [...posts, {
                id: posts.length,
                title: actions.payload.title,
                body: actions.payload.body
            }]
        case 'edit':
            return posts.map((p) => {
                if (p.id === actions.payload.id) {
                    p.title = actions.payload.newTitle
                    p.body = actions.payload.newBody
                }
                return p
            })
        case 'delete':
            return posts.filter((p) => p.id !== actions.payload.id)
        default:
            return posts
    }
}