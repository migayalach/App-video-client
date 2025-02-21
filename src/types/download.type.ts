export type FileType = "mp4" | "mp3";
export type MP3Type = "low" | "high" | "best";
export type MP4Type = "144p" | "360p" | "480p" | "720p" | "1080p";
export type ActionType = (name: FileType, value: MP3Type | MP4Type) => void;
