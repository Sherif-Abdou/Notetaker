import * as React from "react"
import NoteListItem from "./NoteListItem"
import Note from "../models/Note"
import NoteContentView from "./NoteContentView"
import NoteManager from "../models/NoteManager"
import Button from "material-ui/FlatButton"

const manager = new NoteManager()

interface State {
    notes: Note[]
    selected: Note
}
export default class NoteView extends React.Component<{}, State> {
    constructor(props) {
        super(props)
        console.log(manager.notes)
        this.state = {
            notes: manager.notes,
            selected: manager.notes[0]
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.getNote = this.getNote.bind(this)
        this.newNote = this.newNote.bind(this)
        this.changeNote = this.changeNote.bind(this)
    }

    handleContentChange(id, val) {
        let select = this.state.selected        
        var note = null
        this.state.notes.forEach(iter => {
            if (iter.id === id) {
                note = iter
            }
        })
        var new_notes = this.state.notes
        var index = new_notes.indexOf(note)
        new_notes[index].contents = val
        manager.notes = new_notes
        manager.save()
        this.setState({
            notes: new_notes,
            selected: select
        })
        return this.state.notes[index]        
    }

    handleNameChange(id, val) {
        let select = this.state.selected
        var note = null
        this.state.notes.forEach(iter => {
            if (iter.id === id) {
                note = iter
            }
        })
        var new_notes = this.state.notes
        var index = new_notes.indexOf(note)
        new_notes[index].name = val
        manager.notes = new_notes
        manager.save()
        this.setState({
            notes: new_notes,
            selected: select
        })
        return this.state.notes[index]
    }

    getNote(id) {
        var val = this.state.notes[0]
        this.state.notes.forEach(note => {
            if (note.id === id) {
                val = note
            }
        })
        return val
    }

    changeNote(note: Note) {
        this.setState((prev: State) => ({
            notes: prev.notes,
            selected: note
        }))
    }

    newNote(e) {
        var note = new Note("")
        manager.notes.push(note)
        manager.save()
        this.setState((prev: State) => ({
            notes: manager.notes,
            selected: prev.selected
        }))
        
    }

    render() {
        var notes = this.state.notes.map((note) => 
            <NoteListItem key={note.id} note={note} getNote={this.getNote} changeNote={this.changeNote} />
        )
        return (
            <div className="row">
                <ul className="col-mid-4">
                    {notes}
                </ul>
                <Button onClick={this.newNote} className="col-mid-8">New</Button>
                <br />
                <NoteContentView note={this.state.selected} handleContentChange={this.handleContentChange} handleNameChange={this.handleNameChange} />
            </div>
        )
    }
}