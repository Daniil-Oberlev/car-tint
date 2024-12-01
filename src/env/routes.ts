const routes = {
  FRONTEND_REPOSITORY: process.env.FRONTEND_REPOSITORY as string,
  BACKEND_REPOSITORY: process.env.BACKEND_REPOSITORY as string,
  AI_REPOSITORY: process.env.AI_REPOSITORY as string,

  MAP_API_KEY: process.env.MAP_API_KEY as string,
  PROCESS_IMAGE: process.env.PROCESS_IMAGE as string,
};

export default routes;
