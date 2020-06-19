import { Payment } from "#root/db/models";

const setupRoutes = app => {
  app.get("/payments", async (req, res, next) => {
    try {
      const payments = await Payment.findAll();
      return res.json(payments);
    } catch (e) {
      return next(e);
    }
  });

  app.post("/payments", async (req, res, next) => {
    if (!req.body.description || !req.body.title) {
      return next(new Error("Invalid body!"));
    }

    try {
      const payment = await Payment.create({ description: req.body.description, title: req.body.title });
      return res.json(payment);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;