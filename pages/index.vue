<template>
  <div>
    <header class="container-fluid">
      <div class="container text-center" id="searchBox">
        <h1>Geo.search</h1>
        <div class="form col-xs-12">
          <input class="col-9" id="searchBar" type="text" placeholder="pesquisar..." v-model="search"
            v-on:keyup.enter="displayResults" />
          <span @click="displayResults" class="glyphicon glyphicon-search .ms-1 col-xs-1" data-toggle="tooltip"
            title="Search"><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
        <!-- <select class="form-select mt-3 float-end" style="width: 30%; border-radius: 50px" aria-label="Buscar por" placeholder="Pesquisar por" v-model="searchBy">
          <option value="DEFAULT">Notícias</option>
          <option value="CITY">Cidade</option>
        </select> -->
      </div>
    </header>

    <div id="mainBody" class="container text-center">
      <ul id="results">
        <a v-for="(result, index) in results" :key="index" @click="injectModal(result)">
          <li style="cursor: pointer;" v-if="searchBy == 'DEFAULT'">
            <h3>{{ result.title }}</h3>
            <p v-html="result.snippet"></p>
          </li>
          <li style="cursor: pointer;" v-else>
            <h3>{{ city.cityName }}</h3>
            <p>{{ city.population }}</p>
          </li>
        </a>
      </ul>
    </div>

    <modal name="example" :adaptive="true" :minHeight=400 :resizable="true"
      styles="border-radius: 12px; padding: 30px; overflowY: auto;" :scrollable="true">
      <div slot="top-right">
        <button @click="$modal.hide('example')">
          ❌
        </button>
      </div>
      <p class="text-center">
        {{ title }}
      </p>
      <hr />
      {{ bodyText }}
      <hr />
      <div>
        <p class="mb-0"><b>Nome do Autor: </b> {{ authorName }} </p>
        <p class="mb-0"><b>Nome do Jornal:</b> {{ journalName }}</p>
        <p class="mb-0"><b>Data de publicação:</b> {{ publishedDate.replaceAll('-', '/') }}</p>
        <p class="mb-0"><b>Matéria completa:</b> <a :href="link" target="_blank">Clique aqui</a></p>
      </div>
    </modal>

    <footer class="text-center">
      <v-scroll-to-top></v-scroll-to-top>
      <p>&copy; Geo.search</p>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'IndexPage',

  data() {
    return {
      results: [],
      search: '',
      searchBy: 'DEFAULT',
      showModal: false,
      bodyText: '',
      authorName: '',
      journalName: '',
      publishedDate: '',
      title: '',
      link: '',
      loading: false,
      city: {
        cityName: '',
        population: 0,
        touristCategory: '',
        lng: '',
        lat: '',
        touristRegion: '',
      }
    }
  },

  methods: {
    async displayResults() {
      if (this.search.length > 0) {

        const toastId = this.$toast('Processando dados...')

        if (this.searchBy == 'DEFAULT') {
          const response = await this.$axios.get(`/api${`/news/search?target_text=${this.search}`}`)
          this.results = response.data.newsResults
        } else {
          const response = await this.$axios.get(`/api${`/city/search?target_city=${this.search}`}`)
          this.results = response.data.newsResults[0]
        }

        $("#searchBox").animate({ 'padding-top': "0" }, 600)
        $(".container-fluid").animate({ height: "30vh" }, 600)

        this.$toast.update(toastId, {
          content: 'Dados processados!', options: {
            type: 'success'
          }
        })

      } else {
        this.$toast.error('Digite algo para pesquisar!');
      }
    },

    injectModal(result) {
      this.bodyText = result.bodyText
      this.authorName = result.authorName
      this.journalName = result.journalName
      this.publishedDate = result.publishedDate
      this.title = result.title
      this.link = result.link

      this.$modal.show('example')
    }

  },

  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
        },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Arvo:700,400' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css' }

      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
        },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js' },
      ],
    }
  }
}
</script>

<style src="@/assets/css/style.css">

</style>
