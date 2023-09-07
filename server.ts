import { CONFIG } from './src/config/index';
import app from './src/app';

const PORT = CONFIG.PORT || 5000;

const startServer = async (port: number) => {
  app.listen(port);
};

startServer(PORT as number);
