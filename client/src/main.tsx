import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set the title dynamically
document.title = "Exedra - Build Your Future";

// Add Google Fonts
const googleFontsLink = document.createElement("link");
googleFontsLink.rel = "stylesheet";
googleFontsLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap";
document.head.appendChild(googleFontsLink);

createRoot(document.getElementById("root")!).render(<App />);
