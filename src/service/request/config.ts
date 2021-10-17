let BASE_URL: string
if (process.env.NODE_ENV === 'development') {
  // BASE_URL = process.env.VUE_APP_BASE_URL
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}
export { BASE_URL }
