import { Video } from "./video.interface";

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Response {
  info: Info;
  results: Video[];
}
