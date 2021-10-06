const envFlag = process.env.NODE_ENV === 'development'
const BASE_URL = envFlag ? 'http://123.207.32.32:8000' : 'https://XXXXX'

export { BASE_URL }
