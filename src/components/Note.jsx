import React from "react";

function Note() {
    let title = "This is the note title";
    let content = "This is the note content";
    return <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
    </div>;
}

export default Note;