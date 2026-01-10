import { BaseService } from "./BaseService";

export interface User {
    id: string;
    email: string;
    username: string;
}

export class AuthService extends BaseService {
    constructor() {
        super("/auth");
    }

    async getUser() {
        return this.get<User | null>("/me");
    }

    async getGoogleLoginURL() {
        return this.get<{ url: string }>("/google");
    }

    async logout() {
        await this.post("/logout", {})
    }
}
