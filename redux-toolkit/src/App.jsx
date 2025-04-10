import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Controls from "./components/Controls";
import Display from "./components/Display";
function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
        <Display />
        <Controls />
      </div>
    </>
  );
}

export default App;
