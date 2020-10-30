var expiredCertificationsApp = new Vue({
      el: '#expiredCertificationsApp',
      data: {
        ExpiredCertifications: [{
          firstName: '',
          lastName: '',
          position: '',
          certificationName: '',
          renewedDate: '',
          expirationDate: '',
          status: ''
        }],
        certs: {
          certificationName: " "
        }

    },
    methods: {
      fetchExpiredCertifications() {
        fetch('api/expiredCertifications/index.php')
        .then(response => response.json())
        .then(json => {
          this.ExpiredCertifications=json;
          console.log(this.ExpiredCertifications);

      });
    },
    created() {
      this.fetchExpiredCertifications();

    }
  }
});
