import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./contexts/PostsContext";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
{/*         <PostsProvider> */}
          <Router />
{/*         </PostsProvider> */}
      </BrowserRouter>
    </>
  )
}

