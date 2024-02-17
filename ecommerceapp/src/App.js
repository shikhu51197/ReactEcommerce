import "./App.css";
import MainRoute from "./Routes/MainRoute";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
      <Footer/>
    </div>
  );
}

export default App;
