var members = new Vue({
el: '#Members',
data: {
  memberList: [],
  activeMember: null,

},
computed: {
  activeMember() {
    return this.activeMember ? this.activeMember.lastName + ', ' + this.activeMember.firstName : ''
  }
},

methods: {
  newMemberData() {
    return {
      memberID: "",
      firstName: "",
      lastName: "",
      gender: ""
    }
  },


created() {
    fetch("dummy/member-list.php")
    .then( response => response.json() )
    .then( json => {
      this.memberList = json;


      console.log(json)}
    );

    })

}


})
