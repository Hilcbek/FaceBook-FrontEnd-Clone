import { useState } from "react";
import { Middle } from "./component/Middle";
import { Nav } from "./component/Nav";

function App() {
  let [showmore,setShowMore] = useState(false);
  return (
    <div className="w-screen overflow-hidden bg-zinc-100">
      <Nav setShowMore={setShowMore} showmore={showmore} />
      <Middle showmore={showmore} />
    </div>
  );
}

export default App;
