import userService from "@/services/user";

class AuthenticationManager {
    private isAuthenticated = false

    async authenticate(): Promise<boolean> {
        if (this.isAuthenticated) {
            return Promise.resolve(true)
        }
        console.log("[AuthenticationManager] Trying to authenticate...")
        return userService.getMe()
            .then(() => {
                this.isAuthenticated = true
                console.log("[AuthenticationManager] Succeeded to authenticate")
                return true
            })
            .catch(() => {
                this.isAuthenticated = false
                console.log("[AuthenticationManager] Failed to authenticate")
                return false
            })
    }
}

const authenticationManager = new AuthenticationManager()
export default authenticationManager