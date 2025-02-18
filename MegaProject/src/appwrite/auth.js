import config from "../configVar/config";
import {Client,Account,ID} from 'appwrite'

export class AuthService{
     client = new Client();
     account;



     constructor (){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setEndpoint(config.appwriteProjectId)
        this.account = new Account(this.client)
     }



     async createUser ({email,password,name}){
        try{
         const user =  await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if(user){
                // Call login function
                return this.login(email , password)
            }
            else{
                return user
            }
        } catch(error){
            throw error;
        };
     }


     async login(email ,password){
        try{
          return  await this.account.createEmailPasswordSession(email, password)
        } catch(error){
            throw error
        }
     }

     async logout(){
        try{
           return await this.account.deleteSessions()
        }catch(error){
            throw error
        }
     }
     async getUserStatus(){
      try{
        return  await this.account.get()
      }catch(error){
        throw error
      }
     }
}

const authService = new AuthService()

export default authService