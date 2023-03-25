import {  useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { api } from "../../lib/axios";
import { Container } from "./styles";

interface Post{
  userId: number
  id: number
  title: string
  body: string
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts() {
    const response = await api.get(`/posts`)
        
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Container>
        {
          posts.map((post) => {
           return (
              <Post key={post.id} onPost={post}/>
            )
          })
        }
    </Container>
  )
}