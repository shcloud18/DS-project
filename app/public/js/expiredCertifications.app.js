var expiredCertificationsApp = new Vue({
      el: '#expiredCertificationsApp',
      data: {
        ExpiredCertifications: [{
        }],
        newcerts: {
          renewedDate: '',
          expirationDate: '',
          certStatus: ''
        }

    },
    methods: {
      fetchExpiredCertifications() {
        fetch('api/expiredCertifications/')
        .then(response => response.json())
        .then(json => {
          this.ExpiredCertifications=json;
          console.log(this.ExpiredCertifications);
},
fetchExpCertsFilter() {
    fetch('api/reports/expCertsFilter.php')
    .then(response => response.json())
    .then(json => { expCertApp.ExpCertsFilter = json })
  },

  handleSubmitCertDetail(event) {
        fetch('api/reports/expCertsFiltered.php', {
          method: 'POST',
          body: JSON.stringify(this.certs),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then(response => response.json())
        .then(json => { expCertApp.ExpCerts = json })
      },
},
created() {
  this.fetchExpCerts();
  this.fetchExpCertsFilter();
}
});
