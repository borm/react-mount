import path from 'path'

const config = {
  host: '127.0.0.1',
  port: process.env.PORT || 8000,
  source: path.join(__dirname, 'src'),
  output: path.join(__dirname)
};

export default config;