// store/useStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "./../lib/axios";
import { createSlug } from "./../component/slug";
import type { StoreState, Store, Pitch, User } from "./types";

const initialState: StoreState = {
  loading: false,
  token: "",
  link: "/",
  users: [],
  user: {} as User,
  isLogged: false,
  showLogin: false,
  showData: false,
  share: false,
  images: [],
  pitch: {
    _id: "",
    title: "",
    coverImageUrl: "",
    about: "",
    tag: "",
    amountRaised: "",
    contentImagesUrls: [],
    pdfFileUrl: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
  pitches: [],
  template: {
    _id: "",
    name: "",
    templateCoverImageUrl: "",
    about: "",
    numberOfPages: 0,
    cost: {
      naira: "",
      dollar: "",
    },
    templateImagesUrl: [],
    linkToPurchase: "",
    deliverables: [],
    createdAt: "",
    updatedAt: "",
    __v: 0,
    pageHighlights: "",
  },
  templates: [],
  id: "",
  loginWithCard: false,
  componentLoading: false,
  blogId: "",
  showOTP: false,
  address: "",
  count: 10,
  blogTitle: "",
  blogs: [],
  category: [],
};

export const useStore = create<Store>()(
  devtools((set, get) => ({
    ...initialState,
    resetState: () => set(initialState),

    setToken: (token) => {
      set({ token, isLogged: !!token });
    },
    setIsLoggedin: (isLogged: boolean) => set({ isLogged }),
    setShowLogin: (show: boolean) => set({ showLogin: show }),
    setLoginWithCard: (show: boolean) => set({ loginWithCard: show }),
    setShowData: (show: boolean) => set({ showData: show }),
    setShowOTP: (show: boolean) => set({ showOTP: show }),
    setIsLoading: (status: boolean) => set({ loading: status }),
    setIsComponentLoading: (status: boolean) =>
      set({ componentLoading: status }),
    setlink: (link: string) => set({ link }),
    setUser: (user: User) => set({ user }),
    setAddress: (address: string) => set({ address }),
    setShare: (response: boolean) => set({ share: response }),
    setCount: (count: number) => set({ count }),

    setImages: (images) => set({ images }),

    getId: async (title: string) => {
      const pitches = get().pitches;
      const match = pitches.find((item) => createSlug(item.title) === title);
      if (match) set({ id: match._id });
    },

    getBlogId: (id) => set({ blogId: id }),
    getBlogTitle: (title) => set({ blogTitle: title }),

    fetchPitches: async (response) => set({ pitches: response }),

    fetchCategory: async (responsePromise: Promise<Pitch[]>) => {
      try {
        const category = await responsePromise;
        set({ category });
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    },

    fetchBlogs: (response) => set({ blogs: response }),

    fetchSinglePitch: async (title: string) => {
      set({ pitch: initialState.pitch, componentLoading: true });
      try {
        const res = await axios.get(`/pitch/user/get/pitch/${title}`);
        set({ pitch: res.data.pitchDeck, componentLoading: false });
      } catch (error) {
        console.error("Error fetching pitch:", error);
        set({ componentLoading: false });
      }
    },

    fetchTemplates: (response) => set({ templates: response }),

    fetchSingleTemplate: async (title: string) => {
      set({ loading: true });
      try {
        const res = await axios.get(`/templates/search?name=${title}`);
        set({ template: res.data[0], loading: false });
      } catch (error) {
        console.error("Error fetching template:", error);
        set({ loading: false });
      }
    },
    


  }))
);
