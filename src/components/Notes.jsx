import React from "react";
import '../styles/notes.css'


async function getNote() {
    const response = await window.util.getNote('test')
    return response
}

let note = await getNote()

const updateNote = async (evt) => {
    const update = {
        name: "test",
        content: evt.target.value
    }
    await window.util.updateNote(update)
}

export default function Notes() {
    return (
        <>
            <textarea name="" id="heading"></textarea>
            <section>
                <textarea name="" id="noteBody" onBlur={updateNote}>{note}</textarea>
            </section>
        </>

    )
}