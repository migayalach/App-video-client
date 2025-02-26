import { Info } from "@/interfaces/response.interface";

export interface Results {
    idLike: string;
    video: Video;
  }
  
  export interface Video {
    idVideo: string;
    idUser: string;
    nameVideo: string;
    description: string;
    image: string;
    url: string;
    stateVideo: string;
    dateCreate: string;
    average: number
  }
  export interface LikeState {
    info: Info | null;
    favorites: Results[];
    loading: boolean;
    error: string | null;
  }