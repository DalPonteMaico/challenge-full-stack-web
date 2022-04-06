<template>
  <v-app id="inspire">
    <v-navigation-drawer permanent app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <router-link to="/" class="text-decoration-none">
              Módulo Acadêmico
            </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item>
          <router-link to="/students" class="text-decoration-none">
            <v-list-item-content>
              <v-list-item-title>
                Alunos
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view :key="$route.path"/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
