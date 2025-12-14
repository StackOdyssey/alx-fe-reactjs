import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This demonstrates navigation and React Query caching.</p>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <Link to="/">Posts</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PostsComponent />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;