
const handleError = async (error) => {

  if (error.response.status === 401 || error.response.status === 500) {
    await SecureStore.deleteItemAsync(TOKEN_KEY) 
    api.defaults.headers.common['Authorization'] = ''
  }

  throw error;
};

export default handleError;
