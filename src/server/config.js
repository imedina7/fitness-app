const config = {
  PORT: process.env.PORT || 8080,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://localhost/fitness',
  G_APIKEY: process.env.G_APIKEY || null,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  OWM_APIKEY: process.env.OWM_APIKEY || ''
}

export default config;