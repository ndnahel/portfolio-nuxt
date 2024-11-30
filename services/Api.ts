import axios from "axios";

export default class Api {
    static async get(url: string, params: any = null, headers: any = null) {
        const config: any = {};
        if (params) config.params = params;
        if (headers) config.headers = headers;
        return await axios.get(url, config);
    }

    static async post(url: string, data: any, headers: any = null) {
        const config: any = {};
        if (headers) config.headers = headers;
        return await axios.post(url, data, config);
    }

    static async put(url: string, data: any, headers: any = null) {
        const config: any = {};
        if (headers) config.headers = headers;
        return await axios.put(url, data, config);
    }

    static async delete(url: string, headers: any = null) {
        const config: any = {};
        if (headers) config.headers = headers;
        return await axios.delete(url, config);
    }

    static async postForm(url: string, data: any, headers: any = null) {
        const config: any = {
            headers: { "Content-Type": "multipart/form-data" }
        };
        if (headers) {
            config.headers = { ...config.headers, ...headers };
        }
        return await axios.post(url, data, config);
    }

    static async postFile(url: string, data: any, headers: any = null) {
        const config: any = {
            headers: { "Content-Type": "application/json" }
        };
        if (headers) {
            config.headers = { ...config.headers, ...headers };
        }
        return await axios.post(url, data, config);
    }
}