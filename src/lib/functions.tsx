import axios from "./axios";

export const shuffleArray =  async(array: []) => {
    // Create a copy of the array to avoid modifying the original array
    const shuffledArray = await [...array];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray
  }
  export const loadPitches = async () => {
    try {
      const response = await axios.get(`/pitch/filter?tag=All`);
      return response.data
    } catch (error) {
      console.error('Error in sort function:', error);
      throw error; // Re-throw the error to propagate it further
    }
  };

  export const loadTemplates = async () => {
      try{
    const response = await axios.get('/templates/getTemplates');
    return response.data;
      }
    catch (error) {
      console.error('Error in sort function:', error);
      throw error; // Re-throw the error to propagate it further
    }
  };


  export const loadByCategory = async ({category}: {category: string}) => {
    try {
      const response = await axios.get(`/pitch/${category}`);
      // console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error in sort function:', error);
      throw error; // Re-throw the error to propagate it further
    }
  };


   export const loadTags = async () => {
    try {
      const response = await axios.get(`/pitch/tags`);
      // console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error in sort function:', error);
      throw error; // Re-throw the error to propagate it further
    }
  };

    
