export interface RSVPData {
  id: string;
  guestName: string;
  numberOfGuests: number;
  attendance: 'accepts' | 'declines';
  message?: string;
  createdAt: string;
}

export interface WeddingWish {
  id: string;
  guestName: string;
  message: string;
  createdAt: string;
  approved: boolean;
  isFamily?: boolean;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isWeddingDay: boolean;
}
