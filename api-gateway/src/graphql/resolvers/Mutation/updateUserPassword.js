import UsersService from "#root/adapters/UsersService";

const updateUserPasswordResolver = async (obj, { email, password }, context) => {
  const userSession = await UsersService.updateUserPassword({ email, password });

  context.res.cookie("userSessionId", userSession.id, { httpOnly: true });

  return userSession;
};

export default updateUserPasswordResolver;
