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

            <v-dialog
                v-model="showDialog"
                width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="ma-1"
                    outlined
                    color="red"
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon>mdi-trash-can</v-icon>
                </v-btn>

              </template>

              <v-card class="pt-5">
                <v-card-text>
                  Tem certeza que deseja remover a matrícula <strong>{{ item.registration }}</strong>
                  <br>
                  Aluno: <strong>{{ item.name }}</strong>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="d-flex justify-end">
                  <v-btn
                      color="red"
                      outlined
                      @click="deleteItem(item)"
                  >
                    Excluir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
  name: "ListStudentsPage",
  data: () => ({
    showDialog: false,
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
      const {id} = item
      this.$router.go(`/students/${id}`)
    },

    deleteItem(item) {
      const {id} = item

      axios
          .delete(`${API_URL}/students/${id}`,)
          .then(response => {
            console.log(response.status, response.data)
            if (response.status === 200) {
              this.showDialog = false
              this.loadStudents()
            } else
              console.error('Error', response)
          }).catch(e => console.error('Não foi possível excluir', e))
    },
  },
  mounted() {
    this.loadStudents()
  },
}
</script>

<style scoped>

</style>
