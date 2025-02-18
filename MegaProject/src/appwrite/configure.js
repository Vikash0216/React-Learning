import config from "../configVar/config";
import { Databases, Client, ID, Query, Storage } from "appwrite"

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
          return  await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                slug,
    
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )
        }
        catch (error) {
            console.log('Createpost error',error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
       try{
      return await this.databases.updateDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionID,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
       } catch(error){
        console.log("Updae Post error",error);
        return false
       }
    }

    async deletePost(slug){
        try{
        return await this.databases.deleteDocument(
                config.appwriteCollectionID,
                config.appwriteCollectionID,
                slug
            )
        }
        catch(error){
            console.log('Delete Post error',error); 
        }
    }
}



const service = new Service()
export default service