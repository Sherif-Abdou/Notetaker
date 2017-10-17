import * as fs from "fs"
import * as json from "jsonfile"
import Note from "./Note"


class NoteManager {
    filePath = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : '/var/local') + "/Notetaker/notes.json"
    notes: Note[] = []
    constructor() {
        let obj
        try {
            obj = fs.readFileSync(this.filePath)
            this.notes = (JSON.parse(obj.toString())).notes
        } catch (error) {
            let note = new Note("")
            fs.writeFile(this.filePath, JSON.stringify({notes: [note]}))
            this.notes.push(note)
        }
        
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
        process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : '/var/local')        
        console.log(new_array)
        json.writeFile(this.filePath, {notes: new_array})
    }
}

export default NoteManager