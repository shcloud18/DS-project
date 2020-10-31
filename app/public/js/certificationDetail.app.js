waitingApp = new Vue({
  el: '#certDetailApp',
  data:{
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
  methods: {
    handleReset() {
      this.certList = {
        certificationID:'',
        certifyingAgency:'',
        certificationName:'',
        defaultexpirationPeriod:''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
