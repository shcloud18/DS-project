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
  handleNewMemberForm ( evt ){
    evt.preventDefault();

    console.log("Creating...!");
    console.log(this.newMemberForm);

    this.memberList.push(this.newMemberForm);

    this.newMemberForm = this.newMemberData();
  },

  handleTriageForm ( evt ) {
    console.log("Form submitted!");

    this.triageForm.member = this.activeMember;
    console.log(this.triageForm);

  }
created() {
    fetch("dummy/member-list.php")
    .then( response => response.json() )
    .then( json => {
      this.memberList = json;


      console.log(json)}
    );
    this.newMemberForm = this.newMemberData();
    }

}
