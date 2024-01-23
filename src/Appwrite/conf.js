const conf = {
    
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteNotfCollectionId : String(import.meta.env.VITE_APPWRITE_NOTIFICATIONS_COLLECTION_ID),
    appwriteEventsCollectionId : String(import.meta.env.VITE_APPWRITE_EVENTS_COLLECTION_ID),
    appwriteNotfBucketId : String(import.meta.env.VITE_APPWRITE_NOTIFICATIONS_BUCKET_ID),
    appwriteEventsBucketId : String(import.meta.env.VITE_APPWRITE_EVENTS_BUCKET_ID),
}

export default conf