var membersapp = new Vue({
      el: '#membersApp',
      data: {
          members: [{
            memberID: '',
            position: '',
            firstName: '',
            lastName: '',
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
          newMember: {
            memberID: '',
            position: ''
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


    createMember() {
      this.newMember.memberID = (this.newMember.position);
      fetch('api/firefighters/post.php', {
        method: 'POST',
        body: JSON.stringify(this.newMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then (respone => response.json() )
      .then( json => {
        console.log ("Returned from post:", json);
        this.members.push(json[0]);
        this.newMember = this.newMemberData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.newMember);
    },
    newMemberData() {
      return {
        memberID: '',
        position: ''
      }
    }
  },
  created(){
    this.fetchMember();

  }
});
  //     window.alert("Member was created");
  //     window.location.href = 'members.html';
  //   },
  //   handleClick(m) {
  //     fetch('api/membersWithCertification/index.php', {
  //       method: 'POST',
  //       body: JSON.stringify(m),
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8"
  //       }
  //     }).then(response => response.json())
  //       .then(json => { memberDetailApp.memberCert = json })
  //     memberDetailApp.member = m;
  //   },
  //   handleEdit(m) {
  //     window.location.href = 'editmember.html?memberGuid='+m.memberGuid;
  //   },
  //   handleDelete(m) {
  //     fetch('api/firefighters/delete.php', {
  //       method: 'POST',
  //       body: JSON.stringify(m),
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8"
  //       }
  //     })
  //     window.alert("Member was deleted");
  //     window.location.href = 'members.html';
  //   }
