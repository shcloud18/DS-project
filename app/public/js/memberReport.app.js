commentApp = new Vue({
  el: '#commentText',
  data:{
    comments: [{
      id:'',
      commentText:''
    }],
    newComment: {
      id:'',
      commentText:''
    }
  },
  methods:{
    fetchComment(){
      fetch('api/comments/index.php')
      .then(response => response.json())
      .then(json => {
        this.comments=json;
        console.log(this.comments);
      });
    },
    createComment(){
      fetch('api/comments/create.php', {
        method:'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.comments = json;
        this.newComment = this.newCommentData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.newComment);
      this.fetchComment();
    },
      newCommentData() {
        return {
          id: "",
          commentText: ""
        }
      }

  },
  created(){
    this.fetchComment();
  }
});
