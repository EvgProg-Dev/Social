import axios from "axios";

const instance = axios.create({
    headers: {
        "API-KEY": "440f636a-680f-4a16-b885-15c5d95cad4c",
        // Authorization: "Bearer e742c199-ee5b-47d4-a613-ccc6f87fa4b11",
        Authorization: "Bearer e742c199-ee5b-47d4-a613-ccc6f87fa4b1",
    },
});





export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 9) {
        return instance
            .get(`/api/users?page=${pageNumber}&count=${pageSize}`)
            .then((res) => res.data);
    },
    followUsers(id) {
        return instance.post(`/api/follow/${id}`);
    },
    unfollowUsers(id) {
        return instance.delete(`/api/follow/${id}`)
    },
    getProfile(id) {
        return instance.get(`/api/profile/${id}`)
    },
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`/api/profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`/api/profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`/api/profile/status`, {status})
    }
}




export const authAPI = {
    me() {
        return instance.get(`/api/auth/me`);
    },
    login(email, password, remember = false) {
        return instance.post(`/api/auth/login`, {email, password, remember})
    },
    logout() {
        return instance.delete(`/api/auth/login`);
    }

}










