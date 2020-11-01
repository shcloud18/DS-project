var editMember = new Vue({
      el: '#editMember',
      data: {
          members: [{
            memberID: '',
            position: '',
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            address: '',
            city: '',
            state: '',
            workPhone: '',
            radioNumber: '',
            stationNumber: '',
            isActive: '',
            dob: '',
            startDate: ''
          }],
          editMember: {
            memberID: '',
            position: '',
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            address: '',
            city: '',
            state: '',
            workPhone: '',
            radioNumber: '',
            stationNumber: '',
            isActive: '',
            dob: '',
            startDate: ''
          }
        },

        methods:{
          fetchMember() {
            fetch('api/firefighters/')
            .then(response => response.json())
            .then(json => {
              this.members=json;
              console.log(this.members);
    });
  },


    editMember() {
      fetch('api/firefighters/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.editMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then (response => response.json() )
      .then( json => {
        console.log ("Returned from post:", json);
        this.members = json;
        this.editMember = this.editMemberData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.editMember);
    },
    editMemberData() {
      return {
        memberID: '',
        position: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        workPhone: '',
        radioNumber: '',
        stationNumber: '',
        isActive: '',
        dob: '',
        startDate: ''
      }
    }
  },

  created(){
    this.fetchMember();
  }

});
function success() {
  alert("Confirm member edit?");
  window.location.href = "members.html"
}
