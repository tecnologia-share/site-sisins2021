const defaultConfig = {
  onError: (error, request, response) => {
    response.status(501).json({ message: 'Something went wrong! :(' });
  },
  onNoMatch: (request, response) => {
    response
      .status(405)
      .json({ message: `Method ${request.method} not allowed` });
  },
};

export { defaultConfig };
