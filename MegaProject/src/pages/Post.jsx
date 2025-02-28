import React, { useEffect, useState } from "react";
import { Button, Container } from "../components/index";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import parser from "html-react-parser";
import service from "../appwrite/configure";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  console.log(slug);
  

  useEffect(() => {
    if (slug) {
      service.getPost(slug)
      .then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  const download = () => {
    try {
      const fileUrl = service.downloadFile(post.featuredImage); // Get the download URL
  
      if (!fileUrl) throw new Error("File URL not found");

      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "my-file"); // Change filename if needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } 
    catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  
  return post ? (
    <div className="py-8 bg-gray-100">
      <Container>
        {/* Post Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Post Image */}
          <div className="mb-6">
            <img
              src={service.previewFile(post.featuredImage)}
              alt={post.title}
              className="w-full h-64 object-contain rounded-lg shadow bg-gray-200"
            />
          </div>

          {/* Post Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>

          {/* Post Body */}
          <div className="prose max-w-none text-gray-700">{parser(post.content)}</div>

          {/* Action Buttons for Author */}
          {isAuthor && (
            <div className="mt-6 flex gap-4">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Edit
                </Button>
              </Link>

              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
          <Button
          type="button"
          onClick={download}
          >
            Download
          </Button>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
