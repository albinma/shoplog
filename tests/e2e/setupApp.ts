import { createServer } from 'http';
import next from 'next';

export async function setupApp(port: number): Promise<void> {
  const hostname = 'localhost';
  const app = next({ hostname, port });
  const requestListener = app.getRequestHandler();

  await app.prepare();

  createServer(requestListener).listen(port, (error?: unknown) => {
    if (error) {
      throw error;
    }

    console.log(`Server ready at http://${hostname}:${port}`);
  });
}
