import service from "../appwrite/configure"
import {Link} from "react-router-dom"


function PostCard({$id,title, featuredImage}){
    return(
        <Link to={`/post/${$id}`}>
        <div>
            <div>
                <img src={service.previewFile(featuredImage)} alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
        </Link>
    )

}

export default PostCard
