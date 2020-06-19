import got from "got";

const PAYMENTS_SERVICE_URI = "http://payments-service:7101";

export default class PaymentsService {
  static async createPayment({ description, title }) {
    const body = await got.post(`${PAYMENTS_SERVICE_URI}/payments`, { json: { description, title } }).json();
    return body;
  }

  static async fetchAllPayments() {
    const body = await got.get(`${PAYMENTS_SERVICE_URI}/payments`).json();
    return body;
  }
}