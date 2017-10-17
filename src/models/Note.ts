import * as uuid from "uuid"

export default class Note {
    name: string
    id = uuid.v4()
    contents: string = ""
    constructor(name) {
        this.name = name
    }
}
