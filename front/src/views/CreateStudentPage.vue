<template>
  <div>
    <v-app-bar>
      Cadastrar aluno
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
            required
        ></v-text-field>
        <v-text-field
            v-model="socialIdNumber"
            label="CPF"
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

export default {
  name: 'CreateStudents',
  data: () => ({
    name: 'asdasd',
    email: '123@tes.te',
    registration: '9999999',
    socialIdNumber: '00000000191',
  }),

  methods: {
    submit() {
      const payload = {
        student: {

          name: this.name,
          email: this.email,
          registration: this.registration,
          socialIdNumber: this.socialIdNumber,
        }
      }

      axios
          .post('http://localhost:3001/students', payload)
          .then(response => {
            console.log(response.data)
            if (response.status === 201)
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
}
</script>

<style scoped>

</style>
