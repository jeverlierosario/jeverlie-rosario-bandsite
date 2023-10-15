export class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://project-1-api.herokuapp.com";
  }
  async getcomments() {
    try {
      const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
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
      const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`);
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

  async deleteComment(commentId) {
    try {
      const response = await axios.delete(`${this.baseURL}/comments/${commentId}?api_key=${this.apiKey}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}