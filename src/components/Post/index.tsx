import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { Avatar } from "../Avatar";
import { ButtonsContainer, PostContainer, PostContent, PostInfo } from "./styles";

import { TfiCommentAlt } from 'react-icons/tfi'
import { AiOutlineLike } from 'react-icons/ai'

interface PostProps {
  onPost: {
    userId: number
    id: number
    title: string
    body: string
  }
}

interface UserProps {
  id: number
  name: string
  username: string
  email: string
}

export function Post({ onPost }: PostProps) {
  const [users, setUsers] = useState({} as UserProps)
  const [likeCount, setLikesCount] = useState<number>(0)

  const navigate = useNavigate()

  async function fetchUser() {
    const response = await api.get(`/users/${onPost.userId}`) 

    setUsers(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  function handleOpenComments() {
    navigate(`/posts/${onPost.id}/comments`)
  }

  function handleLikePost() {
    setLikesCount(state => state + 1)
  }

  return (
    <PostContainer>
      <Avatar />
      
      <PostContent>
        <header>   
          <Avatar /> 
          <span>      
            {
              users.id === onPost.userId && users.username
            }           
          </span>    
        </header>
        <PostInfo >
          <h2>{onPost.title}</h2>
          <p>{onPost.body}</p>
        </PostInfo>
        <ButtonsContainer>
          <button onClick={handleLikePost} >
            <AiOutlineLike />
            Curtidas
            <span>{likeCount}</span>
          </button>
          <button onClick={handleOpenComments}>
            <TfiCommentAlt />
            Ver comentários
          </button>
        </ButtonsContainer>
      </PostContent>
    </PostContainer>
  )
}