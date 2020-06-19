import PaymentsService from "#root/adapters/PaymentsService";

const createPaymentResolver = async (obj, { description, title }, context) => {
  if (!context.res.locals.userSession) throw new Error("Not logged in!");
  return await PaymentsService.createPayment({ description, title });
};

export default createPaymentResolver;