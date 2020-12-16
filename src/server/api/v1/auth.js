import config from '../../config.js';

const getApiKey = (req, res) => {
  const responseObject = {
    apikey: ''
  }
  switch (req.params.type){
    case 'google':
    default:
        responseObject.apikey = config.G_APIKEY;
  }
}

const AuthApiHandlers = { getApiKey };

export default AuthApiHandlers;