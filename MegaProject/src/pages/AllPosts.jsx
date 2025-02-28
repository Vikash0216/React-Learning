import {PostCard,Container} from "../components/index"
import React,{useState ,useEffect} from "react"
import service from "../appwrite/configure"
function AllPosts(){
    const [posts , setPosts] = useState([])
    const [error , setError] = useState(null)
    useEffect(()=>{
        service.getPosts()
        .then((posts)=>{
            if(posts){
                setPosts(posts.documents)
                setError(null)
            }
        })
        .catch((error)=>{
            setError("Faileds to load post please try again later")
        })
    },[])
    return (
        <div className="py-8 bg-gray-100 min-h-screen">
          <Container>
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">All Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div key={post.$id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                  <PostCard  {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      );
    }
    
    export default AllPosts;