import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/"} Component={HomePage} />
          <Route path={"/app/:link"} element={<GamePage />} />
          <Route path={"/order"} element={<OrderPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
