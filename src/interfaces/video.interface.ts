export interface Video {
  idVideo: string;
  idUser: string;
  idRanking: string;
  nameVideo: string;
  description: string;
  url: string;
  stateVideo: string;
  dateCreate: string;
  average: number;
  isDelete: string;
}

export interface CardVideoProps {
  videos: Video[];
}
