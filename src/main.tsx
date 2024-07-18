import ReactDOM from "react-dom/client";
import { Header } from "./components/header/index.tsx";
import { Home } from "./pages/home/index.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Home />
    <GlobalStyles />
    <Header />
  </>
);
