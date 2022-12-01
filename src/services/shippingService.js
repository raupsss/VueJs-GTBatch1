import http from "../http-common";

class shippingService {
    create(data) {
        return http.post("/shipping/insert", data);
    }

    getAll() {
        return http.get("/shipping/getAll");

    }
}

export default new shippingService();