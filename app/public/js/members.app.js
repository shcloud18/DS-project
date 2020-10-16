window.onload = function () {
  var members = new Vue({
      el: '#membersApp',
      data: {
          members: [],
            member: {}

},

methods: {
    fetchMembers() {
      fetch('api/firefighters/index.php')
      .then(response => response.json())
      .then(json => { membersApp.members = json })
    },
  //   createMember() {
  //     this.newUser.memberID = (this.)
  //     fetch('api/firefighters/post.php', {
  //       method: 'POST',
  //       body: JSON.stringify(this.member),
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8"
  //       }
  //     })
  //     .then (respone => response.json() )
  //     .then( json => {
  //       console.log ("Returned from post:", json);
  //     });
  //     console.log("Creating (POSTing)...!");
  //     console.log(this.newUser)
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
  // },
  // created() {
  //   this.fetchMembers();
  // });
