import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

    const clickHandler = (name, e) => {
        console.log("Button clicked!!!", name, e);
        setCount(count + 1);
        setShow(!show);
    }

    return (
        <div className="App">
            <button onClick={(e) => clickHandler("Akira", e)}>Click Me!!!!!!!!!!!!!!!</button>
            <p>Count: {count | 0}</p>
            {count % 2 !== 0 ? <p>Odd!!!</p> : <p>Even!!!</p>}
            {count * count}
            {show && <p>Showing!!!!!!!!!!!!!!!!!! BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT!!!!!!!!</p>}
        </div>
    );
}

export default App;
