import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Posts } from './pages/Home'
import { PostComments } from './pages/PostComments'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Posts />}/>
        <Route path="/posts/:id/comments" element={<PostComments />}/>
      </Route>
    </Routes>
  )
}