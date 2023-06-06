

export class Post {
    constructor(data){
        this.body = data.body
        this.creator = data.creator
        this.id = data.id
        this.imgUrl = data.imgUrl
        this.likeIds = data.likeIds
        this.likes = data.likes
        this.createdAt = new Date(data.createdAt)
    }
    
    get computedDate(){
        let date = this.createdAt
        return (data.createdAt.getMonth() + 1) + '/' (data.createdAt.getDate()) + ' ' + (data.createdAt.getHours()) + ':' + (data.createdAt.getMinutes())
    }
}
