<template>
  <v-container>
    <v-app-bar>
      Consulta de alunos
    </v-app-bar>


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
        :items-per-page="5"
        class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{}">
        <div>
          [<a>editar</a>][<a>excluir</a>]
        </div>
      </template>

    </v-data-table>


  </v-container>
</template>

<script>
export default {
  name: "StudentsPage",
  data: () => ({
    search: '',
    tableHaders: [
      {text: 'Registro Acadêmico', value: 'registration'},
      {text: 'Nome', value: 'name'},
      {text: 'CPF', value: 'socialIdNumber'},
      {text: 'Ações', value: 'actions', sortable: false},
    ],
    items: [
      {
        registration: '01209159',
        name: 'Maico Dal Ponte',
        socialIdNumber: '19100000000',
        email: 'maico.dalponte@codengage.com',
      }
    ]
  }),
  methods: {
    editItem(item) {
      console.log(item)
    },

    deleteItem(item) {
      console.log(item)
    },
  }
}
</script>

<style scoped>

</style>
