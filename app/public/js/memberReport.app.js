commentApp = new Vue({
  el: '#memberReport',
  data:{
    memberData: [{
      memberID:'',
      firstName:'',
      lastName:'',
      stationNumber:'',
      radioNumber:'',
      stationNumber:'',
    }],
    newComment: {
      memberID:'',
      firstName:'',
      lastName:'',
      stationNumber:'',
      radioNumber:'',
      stationNumber:'',
    }
  },
  methods:{
    fetchMember(){
      fetch('api/memberReport/index.php')
      .then(response => response.json())
      .then(json => {
        this.memberData=json;
        console.log(this.memberData);
      });
    },
    createMember(){
      fetch('api/memberReport/create.php', {
        method:'POST',
        body: JSON.stringify(this.memberData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.memberData = json;
        this.newComment = this.newMemberData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.newComment);
      this.fetchMember();
    },
      newMemberData() {
        return {
          memberID: "",
          firstName: "",
          lastname:'',
          stationNumber:'',
          radioNumber:'',
          stationNumber:'',
        }
      }

  },
  created(){
    this.fetchMember();
  }
});
