import * as React from "react"
import Note from "../models/Note"
import TextField from "material-ui/TextField"
interface Prop {
    note: Note
    handleNameChange: (id, val) => Note
    handleContentChange: (id, val) => Note
}

interface State {
    note: Note
}

export default class NoteContent extends React.Component<Prop, State> {
    constructor(props: Prop) {
        super(props)
        this.state = {
            note: props.note
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
    }

    handleNameChange(e) {
        this.setState({
            note: this.props.handleNameChange(this.props.note.id, e.target.value)
        })
    }

    handleContentChange(e) {
        this.setState({
            note: this.props.handleContentChange(this.props.note.id, e.target.value)
        })        
    }

    render() {
        return (
            <form className="col-mid-8">
                <label className="form-group">
                    <TextField type="text" value={this.props.note.name} onChange={this.handleNameChange}/>
                </label>
                <br />
                <TextField multiLine={true} onChange={this.handleContentChange} value={this.props.note.contents} />
            </form>
        )
    }
}