import { CommentContainer, CommentContent } from "./styles"

interface CommentsProps {
  onComments: {
    postId: number
    id: number
    name: string
    body: string
  }
}

export function Comments({onComments}: CommentsProps) {
  return(
    <CommentContainer>
        <CommentContent >
          <span>{onComments.name}</span>
          <p>
            {onComments.body}
          </p>
        </CommentContent>           
    </CommentContainer>
  )
}