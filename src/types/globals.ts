export interface IEvents {
  _id: string;
  category: string;
  image: string;
  title: string;
  venue: string;
  details: string;
  date: string;
  admin?: string;
}

export interface ITeams {
  _id: string;
  image: string;
  title: string;
  name: string;
}

export interface IReviews {
  _id: string;
  name: string;
  designation: string;
  comment: string;
  image: string;
  rating: number;
}

export interface IGuest {
  _id: string;
  title: string;
  name: string;
  guestEmail: string;
  address: string;
  contact: number;
  admin: number;
  guestId: number;
}
