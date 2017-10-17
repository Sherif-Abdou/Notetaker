import * as React from "react"
import * as ReactDOM from "react-dom"
import NoteView from "./components/NoteView"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

ReactDOM.render(<MuiThemeProvider><NoteView /></MuiThemeProvider>, document.getElementById("container"))