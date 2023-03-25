import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Comments } from "../../components/Comments";
import { api } from "../../lib/axios";
import { CommentsContainer, Container, PostContainer } from "./styles";

interface Comment {
  postId: number
  id: number
  name: string
  body: string
}

interface Post {
  title: string
  body: string
}

export function PostComments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [epost, setePost] = useState({} as Post)

  const { id } = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function fetchPostComments() {
    const response = await api.get(`/posts/${id}/comments`)
        
    setComments(response.data)
  }

  async function fetchPost() {
    const response = await api.get(`posts/${id}`)

    setePost(response.data)
  }

  useEffect(() => {
    fetchPost()
    fetchPostComments()
  }, [])

  return (
    <Container>
      <PostContainer>
        <h3>Publicação</h3>
        <div>
          <h2>{epost.title}</h2>
          <p>{epost.body}</p>
        </div>
      </PostContainer>

      <CommentsContainer>
        <h3>Comentários</h3>
        <div>
          {
            comments.map(comment => {
              return <Comments key={comment.id} onComments={comment}/>
            })
          }
        </div>
        <button onClick={handleBack}>Voltar</button>
      </CommentsContainer>
    </Container>
  )
}