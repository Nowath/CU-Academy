import { AuthService } from "./api/AuthService";

class ApiClient {
    private static instance: ApiClient;

    public readonly authService: AuthService;

    private constructor() {
        this.authService = new AuthService();
    }

    public static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    public static resetInstance(): void {
        ApiClient.instance = null as any;
    }
}

export const api = ApiClient.getInstance();
