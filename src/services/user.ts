import axios from "axios";

export interface SignupRequest {
    email: string
    password: string
    name: string
}

export interface LoginRequest {
    email: string
    password: string
}

class UserService {
    async signup(request: SignupRequest): Promise<void> {
        return axios.post('/users/signup', JSON.stringify(request), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async login(request: LoginRequest): Promise<void> {
        return axios.post('/users/login', JSON.stringify(request), {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
    }

    async getMe(): Promise<boolean> {
        return axios.get('/users/me', {
            withCredentials: true
        })
    }
}
const userService = new UserService()
export default userService