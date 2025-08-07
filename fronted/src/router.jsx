import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "./welcomePage/welcomePage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage/>} />
    </Routes>
  );
}
