import {AxiosResponse} from 'axios';
import client from './client';

interface TokenArgs {
  email: string;
  password: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
}

export default {
  token(args: TokenArgs): Promise<AxiosResponse<TokenResponse>> {
    const endpoint = '/auth/token';
    return client.post<TokenResponse>(endpoint, args);
  },
};
