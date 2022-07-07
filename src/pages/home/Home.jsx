import { useAppContext } from "../../context/context";


const Home=()=>{
    const [count,{add,reset}]=useAppContext()
    return <div>
        <h1>Home page</h1>
        <h2>Count: {count()}</h2>
        <button onClick={add}>Add</button>
        <button onClick={reset}>Reset</button>
    </div>
}


export default Home;