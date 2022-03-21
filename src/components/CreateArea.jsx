import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isActive, setIsActive] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsActive(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note"
        onMouseOver={() => setIsActive(true)}
        onMouseOut={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            // only calls if Mouse OUT of entire element (in this case the form element)
            setIsActive(false);
          }}}>
        {isActive && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isActive ? "3" : "1"}
        />
        <Zoom in={isActive}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;