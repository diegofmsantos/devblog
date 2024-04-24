"use client"

import { postReducer } from "@/reducer/postReducer";
import { useReducer, useState } from "react";

const Blog = () => {

  const [posts, dispatch] = useReducer(postReducer, [])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleAddPost = (title: string, body: string) => {
    if (!title || !body) return false

    dispatch({
      type: 'add',
      payload: { title, body }
    })
    setTitle('')
    setBody('')
  }

  const handleEditPost = (id: number) => {
    const item = posts.find(it => it.id === id)
    if (!item) return false

    const newTitle = window.prompt('Editar Título', item.title)
    if (!newTitle || newTitle.trim() === '') return false

    const newBody = window.prompt('Editar corpo', item.body)
    if (!newBody || newBody.trim() === '') return false

    dispatch({
      type: 'edit',
      payload: { id, newTitle, newBody }
    })
  }

  const handleDelePost = (id: number) => {
    if (!window.confirm('Tem certeza que deseja exluir?')) return false

    dispatch({
      type: 'delete',
      payload: { id }
    })
  }

  return (
    <div className="w-screen min-h-screen flex justify-center items-center p-4">
      <div className="w-[500px] min-h-[300px] bg-white/90 rounded-md p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Dev Blog</h1>
        <div className="flex flex-col gap-4 my-8 w-full">
          <input
            type="text"
            placeholder="Digite o título"
            className="py-1 px-2 rounded-md outline-none w-full border border-gray-400"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
          <textarea
            cols={30}
            rows={3}
            placeholder="Digite o post"
            className="py-1 px-2 rounded-md outline-none w-full border border-gray-400"
            value={body}
            onChange={e => setBody(e.target.value)}></textarea>
          <button
            onClick={() => handleAddPost(title, body)}
            className="border border-black rounded-md p-1 font-bold hover:bg-blue-500">
            Postar
          </button>
        </div>
        {posts.map(item => (
          <div key={item.id} className="flex items-center justify-between gap-4 border border-black/80 w-full mt-2 p-2 rounded-md">
            <div>
              <div className="font-bold">{item.title}</div>
              <div className="text-sm break-all">{item.body}</div>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <button onClick={() => handleEditPost(item.id)}
                className="border border-black px-2 rounded-md hover:bg-gray-300"
              >Editar
              </button>
              <button onClick={() => handleDelePost(item.id)}
                className="border border-black px-2 rounded-md hover:bg-gray-300"
              >Excluir
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Blog;

