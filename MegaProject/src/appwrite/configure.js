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
       }
    }

    async deletePost(slug){
        try{
         await this.databases.deleteDocument(
                config.appwriteCollectionID,
                config.appwriteCollectionID,
                slug
            )
            return true
        }
        catch(error){
            console.log('Delete Post error',error); 
            return false;
        }
    }

    async getPost(slug){
        try{
         return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                slug
            )
        }catch(error){
            console.log("Get Post error for database",error);  
            return false
        }
    }

    async getPosts(){
        try{
          return  await this.databases.listDocuments(
                config.appwriteCollectionID,
                config.appwriteCollectionID
                [Query.equal('status','active')]
            )
        }catch(error){
            console.log("Get posts error from database");
            return false;
        }
    }

    // For file Upload

    async uploadFile(file){
        try{
         return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("Upload file error from database",error);
            return false
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        }catch(error){
            console.log("Deletefile error from database",error);  
            return false          
        }
    }
    previewFile(fileId){
           return  this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            ) 
    }
    downloadFile(fileId){
        return this.bucket.getFileDownload(
            config.appwriteBucketId,
            fileId
        )
    }
}



const service = new Service()
export default service