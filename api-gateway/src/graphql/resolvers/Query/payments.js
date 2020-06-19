import PaymentsService from "#root/adapters/PaymentsService";

const paymentsResolver = async () => {
  return await PaymentsService.fetchAllPayments();
};

export default paymentsResolver;