// Blog Items
export interface IBlogAPIResponse {
  data: {
    count: number;
    data: IBlogData[];
  };
  error: any;
  isLoading: boolean;
  isLoadingError: boolean;
  isError: boolean;
}

export interface IBlogData {
  _id: string;
  title: string;
  image: string;
  imageDescription: string;
  summary: string;
  content: string;
  categories: string[];
  createdAt: string;
}

// Experience Items

export interface IExperienceAPIResponse {
  data: IExperienceData[];
  error: any;
  isLoading: boolean;
  isLoadingError: boolean;
  isError: boolean;
}

export interface IExperienceData {
  _id: string;
  userId: string;
  isAdmin: boolean;
  designation: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

// Education items

export interface IEducationAPIResponse {
  data: IEducationData[];
  error: any;
  isLoading: boolean;
  isLoadingError: boolean;
  isError: boolean;
}

export interface IEducationData {
  _id: string;
  userId: string;
  isAdmin: boolean;
  university: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

// Skills
export interface ISkillAPIResponse {
  data: ISkillData[];
  error: any;
  isLoading: boolean;
  isLoadingError: boolean;
  isError: boolean;
}

export interface ISkillData {
  _id: string;
  userId: string;
  isAdmin: boolean;
  skill: string;
  percentage: 70;
}

// Profile
export interface IProfileAPIResponse {
  data: IProfileData;
  error: any;
  isLoading: boolean;
  isLoadingError: boolean;
  isError: boolean;
}

export interface IProfileData {
  _id: string;
  about: string;
  currentCity: string;
  cv: string;
  dateOfBirth: string;
  designation: string;
  firstName: string;
  github: string;
  image: string;
  isAdmin: boolean;
  lastName: string;
  linkedin: string;
  phone: string;
  skype: string;
  stackoverflow: string;
  userId: string;
  email: string;
}
