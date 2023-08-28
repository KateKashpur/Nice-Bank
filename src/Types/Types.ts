
export type PostType = {
    id: number;
    message: string;
    likesCount: number;
  };
  
  export type ContactsType = {
    github: string;
    facebook: string;
    insta: string;
    telegram: string;
    viber: string;
  };
  
  export type PhotosType = {
    small: string | null;
    large: string | null;
  };
  
  export type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    aboutMe: string;
    contacts: ContactsType;
    photos: PhotosType;
  };
  

  
export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
}