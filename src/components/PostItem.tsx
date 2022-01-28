import { PostsTypes } from "../types/PostsTypes";

type Props = {
    data: PostsTypes
}

export const PostItem = ({data}:Props) =>{
    return(
        <li>
        UserID: {data.userId} <br />
        Id: {data.id} <br />
        Title: {data.title} <br />
        Body: {data.body} <br />
        <hr />
      </li>
    );
}