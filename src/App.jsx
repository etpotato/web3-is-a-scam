import Main from "./pages/Main";
import Dump from "./pages/Dump";

export default function App({ isActive = true }) {
  return isActive ? <Main /> : <Dump />;
}
