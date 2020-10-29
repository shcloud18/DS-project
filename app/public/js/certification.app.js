waitingApp = new Vue({
  el: '#certificationApp',
  data: {
    certList: [{
      certificationID:'',
      certifyingAgency:'',
      certificationName:'',
      defaultexpirationPeriod:''
    }],
    newCertForm:{
      certificationID:'',
      certifyingAgency:'',
      certificationName:'',
      defaultexpirationPeriod:''
    }
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
        body: JSON.stringify(this.newCertForm),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json())
      .then( json => {
        console.log("Returned from post:", json);
        this.certList = json;
        this.newCertForm = this.newCertData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.newCertForm);
      this.fetchCert();
    },

    newCertData() {
      return {
        certificationID:'',
        certifyingAgency:'',
        certificationName:'',
        defaultexpirationPeriod:''
      }
    },

    certEdit(){
      window.location.href = "editCertification.html?certificationID="+cert.certificationID;
    },

    certDelete(){
      fetch('api/certification/delete.php',{
        method: 'POST',
        body: JSON.stringify(cert),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("Certification has been deleted")
      window.location.href = 'certifications.html'
    }
  },
  created(){
    this.fetchCert();
  }
})

// Codes reference from MSIS triage 2020 and GA Help Session
