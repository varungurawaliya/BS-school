import conf from "./conf";
import {Client, Account, ID} from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId) 
        this.account = new Account(this.client)
    }    

    async login ({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            alert(error)
        }
    }

    async logout (){
        try {
            return this.account.deleteSessions()
        } catch (error) {
            console.log(error)
        }
    }
    
    async createAccount ({email, password, name}){
        try {
                const userAccount = await this.account.create(ID.unique(), email, password, name)

                if (userAccount) {
                    return this.login({email, password}) //calling login
                } else {
                    return userAccount
                }
        } catch (error) {
            alert(error)
        }
    }

    async getCurrentUser (){

        try {
            return await this.account.get()
        } catch (error) {
            console.log(error);
        }

        return null
    }
}

const authService = new AuthService()

export default authService