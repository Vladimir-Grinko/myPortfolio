import { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";

function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div id="preloadedImages"></div>
            <Header onShow={handleShow} />
            <Main show={show} onClose={handleClose}></Main>
        </>
    );
}

export default App;
