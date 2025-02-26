import { useState } from "react";

export default function Note() {
    const [notes, setNote] = useState([]);
    const [noteText, setNoteText] = useState("");
    const [editIndex, setEditIndex] = useState(null)

    const handleAddNote = (e) => {
        e.preventDefault();
        if (!noteText.trim()) return;
        if (editIndex !== null){
            setNote((prev) => {
                const updatedNotes = [...prev]
                updatedNotes[editIndex] = noteText
                setEditIndex(null)
                setNoteText("");
                return updatedNotes
            })
            return
        }
        setNote((prev) => [...prev, noteText]);
        setNoteText("");
    };

    const handleDeleteNote = (index) => {
        setNote((prev) => prev.filter((_, i) => i !== index));
    };
    const handleEditNote = (index) => {
        setNoteText((prev) => notes[index])
        setEditIndex(index)

    }

    return (
        <>


            <form className="flex flex-col justify-center items-center w-full" onSubmit={(e) => handleAddNote(e)}>
                <label className="p-2" htmlFor="note">New note</label>
                <input
                    className="bg-slate-300 p-1 max-w-[60%]"
                    type="text"
                    id="note"
                    placeholder="type your note here"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                />
                <button className="p-2 mt-1 bg-purple-300 rounded-md hover:bg-slate-500" type="submit">{(editIndex !== null) ? 'Update' : 'Add'}</button>
            </form>
            <h3 className="m-2 text-center">Notes:</h3>

            {notes.map((note, index) => (
                <div className="flex p-2 justify-around items-center max-w-[60%] mx-auto" key={index}>
                    
                        <button className="bg-green-300 p-1 mr-1 rounded-md hover:bg-green-400" onClick={() => handleEditNote(index)}>Edit</button>
                        <p className="mr-2 bg-blue-400 text-yellow-50 w-full p-1">{note}</p>
                        <button className="bg-red-300 rounded-md p-1 hover:bg-red-600" onClick={() => handleDeleteNote(index)}>Delete</button>

                </div>
            ))}
        </>
    );
}
