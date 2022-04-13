<template>
  <div>
    <v-app-bar>
      Editar aluno
    </v-app-bar>

    <v-container>
      <form @submit.prevent="submit">
        <v-text-field
            v-model="name"
            label="Nome"
            required
        ></v-text-field>
        <v-text-field
            v-model="email"
            label="E-mail"
            required
        ></v-text-field>
        <v-text-field
            v-model="registration"
            label="RA"
            readonly
            required
        ></v-text-field>
        <v-text-field
            v-model="socialIdNumber"
            label="CPF"
            readonly
            required
        ></v-text-field>
        <div class="d-flex justify-end">

          <v-btn class="mr-4 secondary" @click="clear">
            Cancelar
          </v-btn>

          <v-btn
              class=" primary"
              type="submit"
          >
            Salvar
          </v-btn>

        </div>
      </form>

    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import config from "../../config";

const {API_URL} = config

export default {
  name: 'EditStudentPage',
  data: () => ({
    id: '',
    name: '',
    email: '',
    registration: '',
    socialIdNumber: '',
  }),
  methods: {
    loadStudent() {
      const {id} = this.$route.params
      console.log(`${API_URL}/students/${id}`)
      axios
          .get(`${API_URL}/students/${id}`)
          .then(response => {
            const {data: {student}} = response
            console.log(student)
            const {id, name, email, registration, socialidnumber} = student
            this.id = id
            this.name = name
            this.email = email
            this.registration = registration
            this.socialIdNumber = socialidnumber
          })
    },
    submit() {
      const payload = {
        student: {
          id: this.id,
          name: this.name,
          email: this.email,
          registration: this.registration,
          socialIdNumber: this.socialIdNumber,
        }
      }

      axios
          .put(`${API_URL}/students/${this.id}`, payload)
          .then(response => {
            console.log(response.data)
            if (response.status === 200)
              this.$router.push('/students')
            else
              console.error('Error', response)
          })
    },
    clear() {
      this.name = ''
      this.email = ''
      this.registration = ''
      this.socialIdNumber = ''
    },
  },
  mounted() {
    this.loadStudent()
  },
}
</script>

<style scoped>

</style>
