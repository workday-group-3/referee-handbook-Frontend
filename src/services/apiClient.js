import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "my_token"
        this.currCourse = null
        this.currCourseName = "current_course"
    }

    setToken(token) {
        this.token = token
        localStorage.setItem(this.tokenName, token)
    }

    setCurrCourse(currCourse){
        this.currCourse = currCourse
        localStorage.setItem(this.currCourseName, currCourse)
    }

    async request({ endpoint, method = `GET`, data = {}}) {
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json",
            Authorization: this.token ? `Bearer ${this.token}` : "",
        }

        try {
            const res = await axios({ url, method, data, headers })
            return { data: res.data, error: null }
        } catch (error) {
            console.error({ errorResponse: error.response })
            const message = error?.response?.data?.error?.message
            return { data: null, error: message || String(error) }
        }
    }

    async loginUser(credentials) {
        return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
    }

    async signupUser(credentials) {
        return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
    }

    async fetchUserFromToken() {
        return await this.request({ endpoint: `auth/me`, method: `GET` })
    }

    async logoutUser() {
        this.setToken(null)
        localStorage.setItem(this.tokenName, "")
    }

    async fetchBeginnerCourses() {
        return await this.request({endpoint: `learning`, method: `GET`, data:null})
    }

    async fetchBeginnerCourseByName(name) {
        return await this.request({endpoint: `learning/${name}/beginner`, method: `GET`})
    }
}

export default new ApiClient("http://localhost:3001")