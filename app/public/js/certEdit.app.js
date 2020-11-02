var editCert = new Vue({
  el: '#editCert',
  data: {
    certList: [],
    certification: {}
  },

  methods: {
    fetchCert() {
      fetch('api/certification/')
      .then( response => response.json() )
      .then( json => {
         this.certList = json;
         console.log(this.certList);
    });
  },
    something ( evt ){
      console.log(this.certification);
    },
    timetoeditcertification( evt ) {
      console.log("hello");
      fetch('api/certification/update.php',{
        method:'POST',
        body: JSON.stringify(this.certification),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      // .then(response => response.json() )
      // .then( json => {
      //   console.log ("Returned from post:", json);
      //   this.certList = json;
        this.certification = this.updatedcert();
      // });
      console.log("Creating (POSTing)...!");
      console.log(this.certification);
      this.fetchCert();
    },
    updatedcert() {
      return {
        certificationID: '',
        certificationName: '',
        certifyingAgency: '',
        defaultExpirationPeriod: ''

      }
    }
},

  created(){
    this.fetchCert();
  }
});
//
// function success() {
//   alert("Would you like to edit this certification?");
//   window.location.href = "certifications.html"
// }
