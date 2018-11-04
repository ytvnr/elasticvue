import ConnectionService from '../services/elasticsearch/ConnectionService'

const ElasticsearchAdapterHelper = {
  methods: {
    getElasticsearchAdapter () {
      if (this.$store.state.connection.elasticsearchAdapter !== null) {
        return Promise.resolve(this.$store.state.connection.elasticsearchAdapter)
      } else {
        let connectionService = new ConnectionService(this.$store.state.connection.elasticsearchHost)
        return connectionService.getAdapter().then(
          adapter => {
            this.$store.commit('connection/setElasticsearchAdapter', adapter)
            return adapter
          }
        )
      }
    },
    simpleRequest (options) {
      if (options.confirmMessage.length !== 0) {
        if (confirm(options.confirmMessage)) {
          this.runRequest(options)
        }
      } else {
        this.runRequest(options)
      }
    },
    runRequest (options) {
      this.getElasticsearchAdapter()
        .then(adapter => adapter[options.method](options.methodParams))
        .then(body => {
          if (typeof options.callback === 'function') options.callback.call(body)
          this.showSuccessSnackbar({
            text: options.growl,
            additionalText: JSON.stringify(body)
          })
        })
        .catch(error => this.showErrorSnackbar({ text: 'Error:', additionalText: error.message }))
    }
  }
}

export default ElasticsearchAdapterHelper