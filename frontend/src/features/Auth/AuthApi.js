import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const loginApi = async (loginData) => {
    try {
        const url = `${BASE_URL}/users/login/`
        const response = await axios.post(url, loginData)
        return response
    } catch (error) {
        return {
            data: {
                msg: 'ایمیل یا رمز عبور اشتباه است .'
            }
        }
    }
}