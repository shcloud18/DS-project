var memberCert = new Vue({
  el: '#memberCert',
  data: {
    certList: [{
      certificationID:'',
      certifyingAgency:'',
      certificationName:'',
      defaultexpirationPeriod:''
    }],
    newCert:{
      lastName:'',
      firstName:'',
      certificationName:'',
      expirationDate:''
    },
    activeCert:null,
    activeMember:null,
    certMem:[],
    certDetails:[],
    select:{
      certList:''
    }
    },

  methods: {
    fetchCertDetails() {
      fetch('api/certification/MemWithCert.php')
      .then(response => response.json())
      .then(json => { this.certDetails = json;
      console.log(this.certDetails);
      });
    },

    something( evt ){
      console.log("hi michael");
},
    detailCert(cid) {
      fetch('api/certification/MemWithCert.php', {
        method:'GET',
        body: JSON.stringify(this.newCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log("Returned from post", json);

        this.activeCert=json;
      });

      console.log("Updating (POSTing)...!");
      console.log(this.certDetails)
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
    this.fetchCertDetails();
  }
  }
});
