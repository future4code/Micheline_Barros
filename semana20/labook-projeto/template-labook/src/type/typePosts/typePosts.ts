export enum TYPE_POST {
    normal = "normal",
    event = "event"
}

export type Post = {
   id: string,
   photo: string,
   description: string,
   type: TYPE_POST,
   createdAt: Date,
   authorId: string
}