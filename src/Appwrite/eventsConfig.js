import conf from "./conf";
import {Client, ID, Databases, Storage} from 'appwrite'

export class EventService {
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

    async createEvent ({title, description, imageId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteEventsCollectionId, ID.unique(), {
                title,
                description,
                imageId
            })
        } catch (error) {
            console.log(error);
        }
    }

    async deleteEvent (slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteEventsCollectionId, slug)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getEvent(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteEventsCollectionId, slug)
        } catch (error) {
            console.log(error);
        }
    }
    
    async getEvents(queries = []){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteEventsCollectionId, queries)
        } catch (error) {
            console.log(error);
        }
    }

    async uploadImage(image){
        try {
            return await this.bucket.createFile(conf.appwriteEventsBucketId, ID.unique(), image)
        } catch (error) {
            console.log(error);
        }
    }

    async deleteImage(imageId){
        try {
            return await this.bucket.deleteFile(conf.appwriteEventsBucketId, imageId)
        } catch (error) {
            console.log(error);
        }
    }

    getImagePreview(imageId){
        return this.bucket.getFilePreview(conf.appwriteEventsBucketId, imageId)
    }
}

const eventService = new EventService()

export default eventService