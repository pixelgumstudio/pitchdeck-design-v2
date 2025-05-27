export interface PageInterface {
  title: string,
  description: string,
  url: string,
  image: string,
  }

export interface Pitch {
  _id: string;
  title: string;
  coverImageUrl: string;
  about: string;
  tag: string;
  amountRaised: string;
  contentImagesUrls: string[];
  pdfFileUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Template {
  pageHighlights: string;
  _id: string;
  name: string;
  templateCoverImageUrl: string;
  about: string;
  numberOfPages: number;
  cost: {
    naira :string;
    dollar :string;
  };
  templateImagesUrl: string[];
  linkToPurchase: string;
  deliverables: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Tag {
        _id: string;
        tag: string;
    }

export interface StoreState {
  loading: boolean;
  token: string;
  link: string;
  users: User[];
  user: User;
  isLogged: boolean;
  showLogin: boolean;
  showData: boolean;
  share: boolean;
  images: string[];
  pitch: Pitch;
  pitches: Pitch[];
  template: Template;
  templates: Template[];
  id: string;
  loginWithCard: boolean;
  componentLoading: boolean;
  blogId: string;
  showOTP: boolean;
  address: string;
  count: number;
  blogTitle: string;
  blogs: Blog[];
  category: Pitch[];
}

export interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  postText: string;
  coverImageUrl: string;
  createdAt: string;
  updatedAt: string;
  // Add more fields as needed
}

export interface User {
  _id: string;
  userName: string;
  email: string;
  // Add more user fields as needed
}

// Add all actions/methods to Store interface
export interface Store extends StoreState {
  resetState: () => void;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  setLoginWithCard: (show: boolean) => void;
  setIsLoggedin: (isLogged: boolean) => void;
  setShowLogin: (show: boolean) => void
  setShowData: (show: boolean) => void;
  setShowOTP: (show: boolean) => void;
  setIsLoading: (status: boolean) => void;
  setIsComponentLoading: (status: boolean) => void;
  setlink: (link: string) => void;
  setUser: (user: User) => void;
  setAddress: (address: string) => void;
  setShare: (response: boolean) => void;
  setCount: (count: number) => void;
  setImages: (images: string[]) => void;
  getId: (title: string) => Promise<void>;
  getBlogId: (id: string) => void;
  getBlogTitle: (title: string) => void;
  fetchPitches: (response: Pitch[]) => Promise<void>;
  fetchCategory: (responsePromise: Promise<Pitch[]>) => Promise<void>;
  fetchBlogs: (response: Blog[]) => void;
  fetchSinglePitch: (title: string) => Promise<void>;
  fetchTemplates: (response: Template[]) => void;
  fetchSingleTemplate: (title: string) => Promise<void>;
}