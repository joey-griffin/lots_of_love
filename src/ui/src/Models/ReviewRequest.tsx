export default class ReviewRequest {
    constructor(title: string, text: string, name: string, email: string) {
        this.title = title;
        this.text = text;
        this.name = name;
        this.email = email;
    }

    title: string;
    text: string;
    name: string;
    email: string;
}