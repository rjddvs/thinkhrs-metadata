import './App.css';
import AddArticle from './components/AddArticle'
import React, { useState } from 'react'
import { Button } from "react-bootstrap";

function App() {
const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Open Modal
      </Button>
      </div>
      <AddArticle show={modalShow} handleClose={() => setModalShow(false)} />
    </>
  );
}

export default App;
