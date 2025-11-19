import config from "../config/config";
import { Client, TablesDB, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(config.appwriteURL).setProject(config.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call login method
                return this.login({ email, password });
            }else{
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const userAccount = await this.account.createSession(email, password);
            if (userAccount) {
                return userAccount;
            }else{
                return null;
            }
        } catch (error) {
            throw error;
        }
    }


    async getCurrentUser() {
        try {
            const userAccount = await this.account.get();
            if (userAccount) {
                return userAccount;
            }else{
                return null;
            }
        } catch (error) {
            throw error;
        }

        return null;
    }


    async logOut() {
        try {
            const userAccount = await this.account.deleteSessions();
            if (userAccount) {
                return userAccount;
            }else{
                return null;
            }
        } catch (error) {
            throw error;
        }
    }


}

const authService = new AuthService();

export default authService;