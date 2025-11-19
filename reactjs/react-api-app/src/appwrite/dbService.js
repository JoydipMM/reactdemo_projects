import config from "../config/config";
import { Client, Storage, Databases, Query, ID } from "appwrite";

export class DBService {
    client = new Client();
    databases;
    storage;
    account;

    constructor() {
        this.client.setEndpoint(config.appwriteURL).setProject(config.appwriteProjectID);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredimage, status, authorId }) {
        try {
            const post = await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                ID.unique(),
                {
                    title,
                    slug,
                    content,
                    featuredimage,
                    status,
                    authorId,
                }
            );
            return post;
        } catch (error) {
            throw error;
        }
    }

    async updataPost({ id, title, slug, content, featuredimage, status, authorId }) {
        try {
            const post = await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                id,
                {
                    title,
                    slug,
                    content,
                    featuredimage,
                    status,
                    authorId,
                }
            );
            return post;
        } catch (error) {
            throw error;
        }
    }


    async deletePost({ id }) {
        try {
            const post = await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                id
            );
            return post;
        } catch (error) {
            throw error;
        }
    }

    async getPost({ slug }) {
        try {
            const post = await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            );
            return post;
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "published")]) {
        try {
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries,
            );
            return posts;
        } catch (error) {
            throw error;
        }
    }

    async uploadImage(file) {
        try {
            const image = await this.storage.createFile(config.appwriteBucketID, ID.unique(), file);
            return image;
        } catch (error) {
            throw error;
        }
    }

    async deleteImage({ fileId }) {
        try {
            const image = await this.storage.deleteFile(config.appwriteBucketID, fileId);
            return image;
        } catch (error) {
            throw error;
        }
    }

    getImage({ fileId }) {
        try {
            const image = this.storage.getFileView(config.appwriteBucketID, fileId);
            return image;
        } catch (error) {
            throw error;
        }
    }


}

const dbService = new DBService();

export default dbService;