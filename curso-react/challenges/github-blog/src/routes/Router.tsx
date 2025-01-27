import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Post } from "../pages/post";
import { DefaultLayout } from "../layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}
