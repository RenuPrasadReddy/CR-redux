import "./styles.css";
import Main from "./components/Main";
export default function App() {
  return (
    <div className="container">
      <h1 className="header">Create Delete Contact</h1>
      <Main contacts={[{ name: "ram" }]} />
    </div>
  );
}
