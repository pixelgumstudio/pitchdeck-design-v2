// import { createSlug } from "./component/slug";
// import axios from "./lib/axios";
// import { create } from "zustand";
// import Category from './pages/Category';

// // eslint-disable-next-line react-hooks/rules-of-hooks

// type pitch = {
//   _id: string;
//   title: string;
//   coverImageUrl: string;
//   about: string;
//   tag: string;
//   amountRaised: string;
//   contentImagesUrls: string[];
//   pdfFileUrl: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// };

// type template = {
//   _id: string;
//   name: string;
//   templateCoverImageUrl: string;
//   about: string;
//   numberOfPages: number;
//   cost: string;
//   templateImagesUrl: string[];
//   linkToPurchase: string;
//   deliverables: string[];
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// };

// type StoreState = {
//   loading: boolean;
//   componentLoading: boolean;
//   token: string;
//   link: string;
//   users: [];
//   user: {};
//   isLogged: boolean;
//   showLogin: boolean;
//   loginWithCard: boolean;
//   showData: boolean;
//   showOTP: boolean;
//   share: boolean;
//   tags: [];
//   images: [];
//   pitch: pitch;
//   pitches: pitch[];
//   category: pitch[];
//   template: template;
//   templates: template[];
//   blogs: [];
//   id: string;
//   blogId: string;
//   blogTitle: string;
//   address: string;
//   count: number;
// };

// const initialState: StoreState = {
//   loading: false,
//   token: "",
//   link: `/`,
//   users: [],
//   user: {},
//   isLogged: false,
//   showLogin: false,
//   showData: false,
//   share: false,
//   tags: [],
//   images: [],
//   pitch: {
//     _id: "",
//     title: "",
//     coverImageUrl: "",
//     about: "",
//     tag: "",
//     amountRaised: "",
//     contentImagesUrls: [],
//     pdfFileUrl: "",
//     createdAt: "",
//     updatedAt: "",
//     __v: 0,
//   },
//   pitches: [],
//   template: {
//     _id: "",
//     name: "",
//     templateCoverImageUrl: "",
//     about: "",
//     numberOfPages: 0,
//     cost: "",
//     templateImagesUrl: [],
//     linkToPurchase: "",
//     deliverables: [],
//     createdAt: "",
//     updatedAt: "",
//     __v: 0,
//   },
//   templates: [],
//   id: "",
//   loginWithCard: false,
//   componentLoading: false,
//   blogId: "",
//   showOTP: false,
//   address: "",
//   count: 10,
//   blogTitle: "",
//   blogs: [],
//   category: []
// };

// interface Store extends StoreState {
//   setUser: (user: {}) => void;
//   setlink: (link: "") => void;
//   setAddress: (address: string) => void;
//   setCount: (count: number) => void;
//   setTags: (tags: []) => void;
//   setImages: (images: []) => void;
//   setToken: (token: string) => void;
//   setShowLogin: (show: boolean) => void;
//   setLoginWithCard: (show: boolean) => void;
//   setShowData: (show: boolean) => void;
//   setShowOTP: (show: boolean) => void;
//   // setIsLoggedin: (status: string) => void;
//   setIsLoading: (status: boolean) => void;
//   setIsComponentLoading: (status: boolean) => void;
//   setShare: (status: boolean) => void;
//   fetchSinglePitch: (id: string) => void;
//   fetchPitches: (pitches: pitch[]) => void;
//   fetchCategory: (category: Promise<pitch[]>) => void;
//   fetchBlogs: (blogs: []) => void;
//   fetchSingleTemplate: (id: string) => void;
//   fetchTemplates: (templates: template[]) => void;
//   getId: (title: string) => void;
//   getBlogId: (id: string) => void;
//   getBlogTitle: (id: string) => void;
//   resetState: () => void;
// }

// export const store = create<Store>((set, get) => ({
//   ...initialState,

//   resetState: () => set(initialState),

//   setToken: (token: any) => {
//     if (token) {
//       set((_state: any) => ({ token: token, isLogged: true }));
//     } else {
//       set((_state: any) => ({ token: token, isLogged: false }));
//     }
//   },
//   setShowLogin: (show: any) => {
//     set((state: any) => ({ showLogin: show }));
//   },
//   setLoginWithCard: (show: any) => {
//     set((state: any) => ({ loginWithCard: show }));
//   },
//   setShowData: (show: any) => {
//     set((state: any) => ({ showData: show }));
//   },
//   setShowOTP: (show: any) => {
//     set((state: any) => ({ showOTP: show }));
//   },

//   // setIsLoggedin: (token: string) => {
//   //   if (token.length > 0) {
//   //     set((state: any) => ({ isLogged: true }));
//   //   } else {
//   //     set((state: any) => ({ isLogged: false }));
//   //   }
//   // },

//   setIsLoading: (status: any) => {
//     set((state: any) => ({ loading: status }));
//   },
//   setIsComponentLoading: (status: any) => {
//     set((state: any) => ({ componentLoading: status }));
//   },
//   setlink: (link: any) => {
//     set((state: any) => ({ link: link }));
//   },

//   setUser: (user: any) => {
//     set((state: any) => ({ user: user }));
//   },

//   setAddress: (address: string) => {
//     // console.log(address)
//     set((state) => ({ address: address }));
//   },
//   setShare: (response: boolean) => {
//     set(() => ({ share: response }));
//   },

//   setCount: (count: number) => {
//     set((state) => ({ count: count }));
//   },

//   // Temporary Use
//   setTags: (tags: []) => {
//     // Destructure the array object to just array of strings
//     let result = tags.map(({ tag }) => tag);
//     // Remove duplicates
//     const uniqueSet: any = new Set(result);
//     // Convert the Set back to an array
//     const newTags: any = ["All decks", ...uniqueSet];
//     set((state: any) => ({ tags: newTags }));
//   },

//   setImages: (images: any) => {
//     set((state: any) => ({ images: images }));
//   },

//   getId: async (title: string) => {
//     const pitches = get().pitches;
//     pitches.map(
//       (item) =>
//         createSlug(item.title) === title &&
//         set((state: any) => ({ id: item._id }))
//     );
//   },
//   getBlogId: async (id: string) => {
//     set((state: any) => ({ blogId: id }));
//   },
//   getBlogTitle: async (title: string) => {
//     set((state: any) => ({ blogTitle: title }));
//   },

//   fetchPitches: async (response: any) => {
//     // console.log(response)
//     set((state: any) => ({ pitches: response }));
//   },


//   fetchCategory : async (response: Promise<pitch[]>) => {
//     try {
//       // Wait for the Promise to resolve and extract the JSON data
//       const jsonData = await response;
//       // console.log(jsonData); // Ensure that you're getting the JSON data
//       set((state: any) => ({ category: jsonData }));
//     } catch (error) {
//       console.error('Error fetching category:', error);
//     }
//   },

//   fetchBlogs: async (response: any) => {
//     // console.log(response)
//     set((state: any) => ({ blogs: response }));
//   },

//   fetchSinglePitch: async (title: string) => {
//     set({ pitch: initialState.pitch, componentLoading: true });
//     try {
//       await axios
//         .get(`/pitch/user/get/${"pitch/" + title}`)

//         // Update the state with the fetched data
//         .then(function (response) {
//           set({ pitch: response.data.pitchDeck, componentLoading: false });
//         });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       set({ componentLoading: false });
//     }
//   },
//   fetchTemplates: async (response: any) => {
//     set((state: any) => ({ templates: response }));
//   },

//   fetchSingleTemplate: async (title: string) => {
//     set({ loading: true });
//     try {
//       // await axios.get(`/templates/template/${title}`).then(function (response) {
//       await axios
//         .get(`/templates/search?name=${title}`)
//         .then(function (response) {
//           set({ template: response.data[0], loading: false });
//         });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       set({ loading: false });
//     }
//   },
// }));

// // function then(arg0: (res: any) => void) {
// //   throw new Error("Function not implemented.");
// // }
