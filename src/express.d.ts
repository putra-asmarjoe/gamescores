import { UserPayload } from './auth/user-payload.interface';

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserPayload; // Properti user yang ditambahkan oleh AuthGuard
  }
}