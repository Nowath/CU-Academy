"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Landing() {
    const { user, loading, login, logout } = useAuth();

    if (loading) return <div>Loading...</div>;

    if (!user) {
        return <button onClick={login}>Login ด้วย Google</button>;
    }

    return (
        <div>
            <p>สวัสดี {user.username}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
