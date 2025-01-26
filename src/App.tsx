import './App.css'
import Main from "./components/Main.tsx";
import {Route, Routes} from "react-router-dom";
import Blank from "./components/blank/Blank.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'blank'} element={<Blank/>}/>
            </Routes>
        </>
    )
}

export default App
