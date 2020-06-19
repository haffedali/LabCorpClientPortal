import UsersService from "#root/adapters/UsersService";

const usersResolver = async () => {
  return await UsersService.fetchAllUsers();
};

export default usersResolver;

// import ListingsService from "#root/adapters/ListingsService";

// const listingsResolver = async () => {
//   return await ListingsService.fetchAllListings();
// };

// export default listingsResolver;