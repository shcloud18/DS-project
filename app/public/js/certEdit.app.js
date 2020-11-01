var editCert = new Vue({
  el: '#editCert',
  data: {
    certList: [],
    certification: {}
  },

  methods: {
    fetchCert() {
      fetch('api/certification/index.php')
      .then(response => response.json())
      .then(json => {
        this.certList = json;
      console.log(this.certList);
    });
    },

    updateCert() {
      fetch('api/certification/update.php',{
        method:'POST',
        body: JSON.stringify(this.certification),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.text())
      this.handleData();
    },

    handleData(){
      this.certification = {
        certificationID: ""
      }
    }
  },

  created(){
    this.fetchCert();
  }
});

function success() {
  alert("Would you like to edit this certification?");
  window.location.href = "certifications.html"
}
