var memWCert = new Vue({
  el: '#memWCert',
  data: {
    memberCert: []
  },

  methods: {
    fetchMemberCert() {
      fetch('api/certification/MemWithCert.php')
      .then(response => response.json())
      .then(json => { memberCert.memberCert = json })
    },

  //   deleteCert() {
  //     fetch('api/certification/delete.php',{
  //       method:'POST',
  //       body: JSON.stringify(this.certification),
  //       headers:{
  //         "Content-Type": "application/json; charset=utf-8"
  //       }
  //     })
  //     .then(response => response.text())
  //     this.handleData();
  //   },
  //
  //   handleData(){
  //     this.certification = {
  //       certificationID: ""
  //     }
  //   }
  // },

  created(){
    this.fetchMemberCert();
  }
});
