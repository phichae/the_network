export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.nickname = data.nickname
    this.graduated = data.graduated || false
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkin = data.linkedin
    this.resume = data.resume
    this.class = data.class
  }
}

