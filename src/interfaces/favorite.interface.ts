import { Info } from "@/interfaces/response.interface";

export interface Video {
  idVideo: string;
  idUser: string;
  nameVideo: string;
  description: string;
  image: string;
  url: string;
  stateVideo: string;
  dateCreate: string;
  average: number;
  usersLike: String[];
}

export interface LikeState {
  info: Info | null;
  message: string;
  results: Video[];
  loading: boolean;
  error: string | null;
}

export interface ResponseLike {
  message: string;
  video: Video[];
}

export interface ActFavorite {
  idUser: string;
  idVideo: string;
}
