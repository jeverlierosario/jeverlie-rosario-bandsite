const leeAPIKey = "?api_key=ad84ec4e-4017-4519-9ec4-26eef3e0327c";

class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://project-1-api.herokuapp.com";
  }
  //commentsd
  async getcomments() {
    try {
      const response = await axios.get(`S{this.baseURL}/comments${this.apiKey}`);
      console.log(response.data);
      return response.data;
    } catch(error) {
      console.log(error);
    }
  }
  //showdates
  async getShows() {
    try {
      const reponse = await axios.get(`S{this.baseURL}/comments${this.apiKey}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}