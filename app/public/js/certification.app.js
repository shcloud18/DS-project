waitingApp = new Vue({
  el: '#certificationApp',
  data: {
    certList: [{
      certificationID:'',
      certificationName:'',
      certifyingAgency:'',
      defaultExpirationPeriod:''
    }],
    newCert:{
      certificationID:'',
      certificationName:'',
      certifyingAgency:'',
      defaultExpirationPeriod:''
    }
  },

  created() {
    this.fetchCert();
  },


  methods:{
    fetchCert(){
      fetch('api/certification/index.php')
      .then(response => response.json())
      .then(json => {
        this.certList=json;
        console.log(this.certList);
      });
    },

    createCert(){
      fetch('api/certification/create.php',{
        method:'POST',
        body: JSON.stringify(this.newCert),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json())
      .then( json => {
        console.log("Returned from post:", json);
        this.certList = json;
        this.newCert = this.newCertData();
      });
    },

    newCertData(){
      return{
        certificationID: '',
        certificationName: '',
        certifyingAgency: '',
        defaultExpirationPeriod: ''
      }
    },

    // deleteCert(){
    //   fetch('api/certification/delete.php',{
    //     method: 'POST',
    //     body: JSON.stringify(this.activeCert),
    //     headers: {
    //       "content-Type": "application/json; charset=utf-8"
    //     }
    //   })
    //   console.log("creating (POSTing)...!");
    //   console.log(this.activeCert);
    // }
    // },
}
})

// Codes reference from MSIS triage 2020 and GA Help Session
