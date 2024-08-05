import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full max-h-screen flex flex-col px-4 py-2">
      <Header />
      <div className="w-full flex items-center justify-between">
        <div>Sidebar</div>
        <div>Content</div>
      </div>
    </div>
  );
}

export default App;
