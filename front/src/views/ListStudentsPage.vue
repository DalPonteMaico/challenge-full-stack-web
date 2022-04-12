<template>
  <div>
    <v-app-bar>
      Consulta de alunos
    </v-app-bar>


    <v-container>
      <div>
        <v-card
            class="pa-2 d-flex justify-space-between"
            flat
            tile
        >
          <form class="flex-fill d-flex">
            <v-text-field
                v-model="search"
                label="Digite sua busca"
                solo
            ></v-text-field>

            <v-btn
                large
                group
                tile>
              Pesquisar
            </v-btn>
          </form>
          <div class="pl-10 ">
            <router-link
                class="v-btn primary v-size--large"
                to="/students/new"
                large>
              Cadastrar Aluno
            </router-link>
          </div>
        </v-card>

      </div>


      <v-data-table
          :headers="tableHaders"
          :items="items"
          :search="search"
          :items-per-page="5"
          class="elevation-1"
          :loading="loading"
      >
        <template v-slot:[`item.actions`]="{item}">
          <div>
            <v-btn
                class="ma-1"
                outlined
                :to="`/students/${item.id}/edit`"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn
                class="ma-1"
                outlined
                @click="deleteItem(item)"
                color="red"
            >
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
          </div>
        </template>

      </v-data-table>

    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import config from "../../config";

const {API_URL} = config

export default {
  name: "StudentsPage",
  data: () => ({
    loading: true,
    search: '',
    tableHaders: [
      {text: 'Registro Acadêmico', value: 'registration'},
      {text: 'Nome', value: 'name'},
      {text: 'CPF', value: 'socialIdNumber'},
      {text: 'Ações', value: 'actions', sortable: false},
    ],
    items: []
  }),
  methods: {
    loadStudents() {
      axios
          .get(`${API_URL}/students`)
          .then(response => {
            const {data: {students}} = response

            this.loading = false
            this.items = students
          })
    },
    editItem(item) {
      console.log(item)
    },

    deleteItem(item) {
      const {id} = item

      axios
          .delete(`${API_URL}/students/${id}`,)
          .then(response => {
            console.log(response.status, response.data)
            if (response.status === 200)
              this.loadStudents()
            else
              console.error('Error', response)
          })
    },
  },
  mounted() {
    this.loadStudents()
  },
}
</script>

<style scoped>

</style>
