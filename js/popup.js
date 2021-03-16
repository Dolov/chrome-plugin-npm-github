



const ReviewApp = {
  data() {
      return {
        searchText: '查询',
        searchValue: '',
        searchResponse: null,
      }
  },
  methods: {
    onChange(event) {
      this.searchValue = event.target.value
    }, 
    search() {
      if (!this.searchValue) {
        return
      }
      this.searchText = '查询中...'
      const xhr = new XMLHttpRequest()
      xhr.responseType = 'json'
      xhr.open("GET", `https://vercel-serverless-five.vercel.app/api/index?q=${this.searchValue}`, true)
      xhr.send()
      xhr.onreadystatechange = () => {
        this.searchText = '查询'
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          this.searchResponse = xhr.response
        }
      }
    }
  },
  created() {
    
  },
}

Vue.createApp(ReviewApp).mount('#container')