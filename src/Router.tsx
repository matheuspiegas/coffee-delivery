import { Routes, Route } from "react-router-dom";
import { SuccessPage } from "./pages/Success";
import { CheckoutPage } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}
