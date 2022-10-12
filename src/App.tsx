import React, {useState} from 'react';

import {Modal} from "components";

function App() {
    const [showModal, setShowModal] = useState(false);

    const closeModalHandler = () => {
        setShowModal(false)
    }

    const openModalHandler = () => {
        setShowModal(true)
    }

    return (
        <div className="App">
            <button type="button" onClick={openModalHandler}>click</button>
            <Modal show={showModal} onClose={closeModalHandler} />
        </div>
    );
}

export default App;
