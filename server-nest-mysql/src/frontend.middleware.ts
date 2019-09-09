import { NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

export class FrontendMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {    
    
      const { baseUrl } = req;
      if (baseUrl.indexOf('api') === 1) {
        // it starts with /api --> continue with execution
        next();
      } else if (allowedExt.filter(ext => baseUrl.indexOf(ext) > 0).length > 0) {
        // it has a file extension --> resolve the file
        res.sendFile(__dirname + `/client/${baseUrl}`);
      } else {
        // in all other cases, redirect to the index.html!
        res.sendFile(__dirname + `/client/index.html`);
      }
  }
}