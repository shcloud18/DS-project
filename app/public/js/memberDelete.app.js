var deleteMember = new Vue({
  el: '#deleteMember',
  data: {
    members: [],
    member: {}
  },

  methods: {
    fetchMember() {
      fetch('api/firefighters/index.php')
      .then(response => response.json())
      .then(json => { deleteMember.members = json })
    },

    deleteMember() {
      fetch('api/firefighters/delete.php',{
        method:'POST',
        body: JSON.stringify(this.member),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.text())
      this.handleData();
    },

    handleData(){
      this.member = {
        memberID: ""
      }
    }
  },

  created(){
    this.fetchMember();
  }
});

function success() {
  alert("Would you like to delete this member?");
  window.location.href = "members.html"
}
