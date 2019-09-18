export default class Review {
    constructor(id: number, title: string, text: string, date: string) {
        this.title = title
        this.text = text
        this.id = id
        this.date = date
    }

    title: string
    text: string
    id: number
    date: string
}