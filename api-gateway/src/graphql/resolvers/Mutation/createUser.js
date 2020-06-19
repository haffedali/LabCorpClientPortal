import UsersService from "#root/adapters/UsersService";

const createUserResolver = async (obj, { firstName, lastName, email, password }) => {
  return await UsersService.createUser({ firstName, lastName, email, password });
};

export default createUserResolver;