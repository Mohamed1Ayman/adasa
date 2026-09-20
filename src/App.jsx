import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import NotFound from "./components/notFound/NotFound";
import Hero from "./components/hero/Hero";
import MainLayout from "./components/layout/MainLayout";
import Blog from "./components/Blog/Blog";
import PostDetails from "./components/Blog/PostDetails";
import WhatOurWe from "./components/WhatOurWe/WhatOurWe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetails />} />
          <Route path="/about" element={<WhatOurWe />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
