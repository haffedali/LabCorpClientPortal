import UsersService from "#root/adapters/UsersService";

const createUserResolver = async (obj, { contactId, firstName, lastName, email, password }) => {
  return await UsersService.createUser({ contactId, firstName, lastName, email, password });
};

export default createUserResolver;