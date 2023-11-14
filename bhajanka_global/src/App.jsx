import Navbar from "./components/navbar";
import About from "./components/About";
import Reason from "./components/Reason";
import Servicehome from "./components/Servicehome";

// bg-[#0F021F]
function App() {
  return (
    <>
      <div className="bg-[#0E1628]">
        <div className="w-full h-screen font-serif text-black">
          <Navbar />
          <hr className="opacity-10" />
          <About />
          <Reason />
          <Servicehome />
          
        </div>
      </div>
    </>
  );
}
export default App;
