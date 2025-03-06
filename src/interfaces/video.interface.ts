import { Info } from "./response.interface";

export interface Video {
  idVideo: string;
  idUser: string;
  idRanking: string;
  nameVideo: string;
  description: string;
  image: string;
  url: string;
  stateVideo: string;
  dateCreate: string;
  average: number;
  isDelete: string;
  usersLike: string[];
}

export interface VideoState {
  videos: Video[];
  info: Info | null;
  videoDetail: Video | null;
  loading: boolean;
  error: string | null;
}

export interface CardVideoProps {
  idVideo: string;
  nameVideo: string;
  image: string;
  average: number;
}
