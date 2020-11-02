var editMember = new Vue({
      el: '#editMemberElement',
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
    something( evt ){
      console.log(this.editMember);
    },

    timeToEditTheMember( evt ) {
      console.log("hi adam");
      fetch('api/firefighters/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.editMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
  //    .then (response => response.json() )
      // .then( json => {
      //   console.log ("Returned from post:", json);
      //   this.editMember = json;
         this.editMember = this.editMemberData();
      // });
      console.log("Creating (POSTing)...!");
      console.log(this.editMember);
      this.fetchMember();
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
