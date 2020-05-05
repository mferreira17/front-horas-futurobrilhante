<template>
  <v-container>
    <div style="padding-bottom:10px;">
      <h4>Voluntários - Futuro Brilhante</h4>
    </div>
    <v-card>
      <v-card-subtitle>Insira seus dados para se cadastrar</v-card-subtitle>
      <v-card-text>
        <v-form>
          <v-text-field
            name="nome"
            label="Nome"
            outlined
            v-model.trim="voluntario.nome"
            required
            :error-messages="nomeErros"
            @input="$v.voluntario.nome.$touch()"
            @blur="$v.voluntario.nome.$touch()"
          ></v-text-field>
          <v-text-field
            name="email"
            type="email"
            label="Email"
            outlined
            v-model="voluntario.email"
            :error-messages="emailErros"
            @input="$v.voluntario.email.$touch()"
            @blur="$v.voluntario.email.$touch()"
          ></v-text-field>
          <v-text-field
            name="senha"
            type="password"
            label="Senha"
            outlined
            v-model="voluntario.senha"
          ></v-text-field>
          <v-btn color="primary" type="submit" @click="submit">Cadastrar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable */

const { required, email, minLength } = require("vuelidate/lib/validators");

export default {
  name: "VoluntarioForm",

  data() {
    return {
      voluntario: {
        nome: "",
        email: "",
        senha: ""
      }
    };
  },

  validations: {
    voluntario: {
      nome: {
        required
      },
      email: {
        required,
        email
      }
    }
  },

  computed: {
    nomeErros() {
      const errors = [];
      if (!this.$v.voluntario.nome.$dirty) return errors;
      !this.$v.voluntario.nome.required && errors.push("Nome é obrigatório");
      return errors;
    },
    emailErros() {
      const erros = [];
      if (!this.$v.voluntario.email.$dirty) return erros;
      !this.$v.voluntario.email.required && erros.push("Email é obrigatório");
      !this.$v.voluntario.email.email && erros.push("Insira um email válido");
      return erros;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      console.log("esta sendo submetido form...");
    }
  }
};
</script>

<style>
</style>