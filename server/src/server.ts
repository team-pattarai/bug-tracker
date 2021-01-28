import app from './app';
import http from 'http';
import { PORT } from './utils/config';
import { connectToDB } from './db';

const server = http.createServer(app);

server.listen(PORT, () => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});
