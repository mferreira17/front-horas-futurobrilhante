<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item to="/minhas-atividades">
          <v-list-item-action>
            <v-icon>mdi-poll-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Minhas Atividades</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/nova-atividade">
          <v-list-item-action>
            <v-icon>mdi-plus-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Nova Atividade</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Meus Dados</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Futuro Brilhante</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span> &copy; Futuro Brilhante - 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  /* eslint-disable */
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
