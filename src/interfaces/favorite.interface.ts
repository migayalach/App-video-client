import { Info } from "@/interfaces/response.interface";

export interface Results {
    idLike: string;
    video: Video;
  }
  
  export interface Video {
    idUser: string;
    nameVideo: string;
    description: string;
    url: string;
    stateVideo: string;
    dateCreate: string;
  }
  export interface LikeState {
    info: Info | null;
    favorites: Results[];
    loading: boolean;
    error: string | null;
  }