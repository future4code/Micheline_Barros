import moment from "moment";
import { Post } from "../../type/typePosts/typePosts";
import { BaseDataBase } from "../BaseDataBase";

export class PostDataBase extends BaseDataBase{
 
    postDataBase = async (post: Post) => {
        await BaseDataBase.connection.insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            created_At: moment(post.createdAt, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            author_Id: post.authorId
        }).into("labook_posts")
    }
    
}