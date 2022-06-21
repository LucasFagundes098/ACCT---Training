import Navbar from "./Navbar"


function App() {

  const newDate = new Date();
  const date = `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}/`;

  return (
    <div className="App">
      {/* NAVBAR  */}
       <Navbar/>

      {/* HELLO WORLD  */}
      <div className="container">
        <h2>Hello World - {date}</h2>
        <h2>Moni Dziko Lapansi - {date}</h2>
        <h2>Aloha honua - {date}</h2>
        <h2>Helló Világ - {date}</h2>
        <h2>Ciao mondo - {date}</h2>
        <h2>Labas pasauli - {date}</h2>
        <h2>Pozdravljen, svet - {date}</h2>
        <h2>Hei maailma - {date}</h2>
        <h2>Hello dinja - {date}</h2>
        <h2>Bonjour le monde - {date}</h2>
      </div>
    </div>
  )
}

export default App
