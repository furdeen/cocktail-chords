import { Route, Routes } from "react-router-dom";

import Home from "../home/home";
// import NotFound from "../not_found/not_found";
import DailyMix from "../dailymix/dailymix";

import MainLayout from "../layouts/main_layouts";
import Moviemix from "../moviemix/moviemix";
import NotFound from "../not_found/not_found";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="dailymix" element={<DailyMix />} />
      <Route path="moviemix" element={<Moviemix />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
