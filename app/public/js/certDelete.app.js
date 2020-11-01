var deleteCert = new Vue({
  el: '#deleteCert',
  data: {
    certList: [],
    certification: {}
  },

  methods: {
    fetchCert() {
      fetch('api/certification/index.php')
      .then(response => response.json())
      .then(json => { deleteCert.certList = json })
    },

    deleteCert() {
      fetch('api/certification/delete.php',{
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
  alert("Would you like to delete this certification?");
  window.location.href = "certifications.html"
}
