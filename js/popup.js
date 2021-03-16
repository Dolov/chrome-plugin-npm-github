



const ReviewApp = {
  data() {
      return {
        searchText: '查询',
        searchValue: '',
        searchResponse: null,
        currentChecked: null,
      }
  },
  mounted() {
    this.$refs.inputRef.focus()
  },
  methods: {
    onChange(event) {
      this.searchValue = event.target.value
    },
    onCheck(checkedValue) {
      this.currentChecked = checkedValue
    },
    getGithub1s(url) {
      if (!url) return null
      return url.replace('github', 'github1s')
    },
    search() {
      if (!this.searchValue) {
        return
      }
      this.searchText = '查询中...'
      const xhr = new XMLHttpRequest()
      xhr.responseType = 'json'
      xhr.open("GET", `https://vercel-serverless-five.vercel.app/api/index?q=${this.searchValue}`, true)
      // xhr.open("GET", `http://localhost:3000/api?q=${this.searchValue}`, true)
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