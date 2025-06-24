import { Rate } from './rates';

export type ApiResponse = {
  success: boolean;
  timestamp: number;
  base: Rate;
  date: string;
  rates: Record<Rate, number>;
};
