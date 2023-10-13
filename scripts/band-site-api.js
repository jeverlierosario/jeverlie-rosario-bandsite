const leeAPIKey = "?api_key=ad84ec4e-4017-4519-9ec4-26eef3e0327c";

class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://project-1-api.herokuapp.com";
  }
  async getcomments() {
    try {
      const response = await axios.get(`S{this.baseURL}/comments?api_key=${this.apiKey}`);
      const comments = response.data;
      //newer comments first
      comments.sort((a, b) => b.timestamp - a.timestamp);
      return comments;
    } catch(error) {
      console.log(error);
    }
  }
  async getShows() {
    try {
      const response = await axios.get(`S{this.baseURL}/showdates?api_key=${this.apiKey}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async postComment(commentObject) {
    try {
      const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, commentObject, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

module.expports = BandSiteAPI;