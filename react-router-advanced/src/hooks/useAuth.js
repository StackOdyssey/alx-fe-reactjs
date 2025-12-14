import { useState } from "react";

// Simple simulated authentication hook
export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // toggle login/logout for demo purposes
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return { isAuthenticated, login, logout };
}