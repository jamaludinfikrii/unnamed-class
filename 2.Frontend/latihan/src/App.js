import { useState } from "react";
import "./App.css";
import NilaiComp from "./component/NilaiComp";

/**
 * 1. Component
 * simple nya, pecah codingan gede menjadi kecil kecil. nanti disatukan
 * 2. JSX
 * simple nya, javascript tapi bisa ada html nya. jadi logic nya langsung nyampur dengan html
 * 3. State
 * simple nya, variable, cuman reactive, setiap state berubah, html nya langsung berubah
 * 4. Props
 * simple nya, passing variable ke dalam component react. atau passing data dari parent ke child component
 * 5. Lifecycle
 * 6. Hooks
 */

function App() {
  const [Name, setName] = useState("Fikri");

  const ubahNama = () => {
    if (Name === "Fikri") {
      setName("Kanzun");
    } else {
      setName("Fikri");
    }
  };

  return (
    <div>
      Hello {Name}
      <div>
        <NilaiComp
          name={"Kanzun"}
          nilai={10}
        />
        <NilaiComp
          nilai={80}
          name={"Fikri"}
        />

        <button onClick={ubahNama}>ubah {Name}</button>
      </div>
    </div>
  );
}

export default App;
