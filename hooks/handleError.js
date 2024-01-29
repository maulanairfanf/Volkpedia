
const handleError = async (error) => {

  if (error.response.status === 401 || error.response.status === 500) {
    await SecureStore.deleteItemAsync(TOKEN_KEY) 
    api.defaults.headers.common['Authorization'] = ''
  }

  return error;
};

export default handleError;
