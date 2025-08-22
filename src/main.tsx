import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Remove initial loader once React takes over
const root = document.getElementById("root")!;
const loader = root.querySelector(".initial-loader");

createRoot(root).render(<App />);

// Remove loader after a short delay to ensure smooth transition
if (loader) {
  setTimeout(() => {
    loader.remove();
  }, 100);
}
