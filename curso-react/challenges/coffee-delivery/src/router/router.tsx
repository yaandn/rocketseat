import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ConfirmOrder } from "../pages/ConfirmOrder";
import { ConfirmedOrder } from "../pages/ConfirmedOrder";
import { DefaultLayout } from "../Layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />
        <Route path="/confirmedOrder" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  );
}
