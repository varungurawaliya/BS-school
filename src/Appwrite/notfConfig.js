import conf from "./conf";
import {Client, ID, Databases, Storage} from 'appwrite'

export class NotfService {
    client = new Client()
    databases
    bucket

    constructor(){ 
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createNotf ({title, fileId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteNotfCollectionId, ID.unique(), {
                title,
                fileId
            })
        } catch (error) {
            console.log(error);
        }
    }

    async deleteNotf (slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteNotfCollectionId, slug)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getNotf(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteNotfCollectionId, slug)
        } catch (error) {
            console.log(error);
        }
    }
    
    async getNotfs(){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteNotfCollectionId)
        } catch (error) {
            console.log(error);
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteNotfBucketId, ID.unique(), file)
        } catch (error) {
            console.log(error);
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.appwriteNotfBucketId, fileId)
        } catch (error) {
            console.log(error);
        }
    }

    getFileDownload(fileId){
        return this.bucket.getFileDownload(conf.appwriteNotfBucketId, fileId)
    }
}

const notfService = new NotfService()

export default notfService
