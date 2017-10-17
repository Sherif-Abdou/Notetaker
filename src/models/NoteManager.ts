import * as fs from "fs"
import * as json from "jsonfile"
import Note from "./Note"


class NoteManager {
    filePath = "/Users/Sherif/Library/Application Support/Notetaker/notes.json"
    notes: Note[] = []
    constructor() {
        let obj = fs.readFileSync(this.filePath)
        this.notes = (JSON.parse(obj.toString())).notes
        // fs.readFile(this.filePath, (err, obj) => {
        //     if (err) {
        //         if (err.code == 'ENOENT') {
        //             this.notes = []
        //             // json.writeFile(this.filePath, this.notes, () => {})
        //             this.save()
        //         }
        //         console.log(err)
        //     }
        //     console.log(JSON.parse(obj.toString()).notes)
        //     this.notes = (JSON.parse(obj.toString())).notes
        // })
    }
    save() {
        let new_array = []
        for (var x=0; x<this.notes.length;x++) {
            var obj = {
                name: this.notes[x].name,
                contents: this.notes[x].contents,
                id: this.notes[x].id
            }
            new_array.push(obj)
        }
        console.log(new_array)
        json.writeFile(this.filePath, {notes: new_array})
    }
}

export default NoteManager