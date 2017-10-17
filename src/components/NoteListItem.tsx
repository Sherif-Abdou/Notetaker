import * as React from "react"
import Note from "../models/Note"
import Button from "material-ui/FlatButton"

interface Prop {
    note: Note
    getNote: (id) => Note
    changeNote: (note) => void
}
interface State {
    note: Note
}
export default class NoteListItem extends React.Component<Prop, State> {
    constructor(props) {
        super(props)
        this.state = {
            note: props.note
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(e) {
        const new_note = this.props.getNote(this.state.note.id)
        this.props.changeNote(new_note)
        e.preventDefault()
    }

    render() {
        return (
            <li className="list-group-item"><Button type="button" className="list-group-item-action" onClick={this.onClick}>{this.state.note.name}</Button></li>
        )
    }
}