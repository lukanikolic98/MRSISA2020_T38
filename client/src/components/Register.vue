<template>
  <div>
    <h1 id=head>Register</h1>

    <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email" />
    <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password" />
    <br>
    <input
        type="firstname"
        name="firstname"
        v-model="firstname"
        placeholder="first tname" />
    <input
        type="lastname"
        name="lastname"
        v-model="lastname"
        placeholder="last name" />
    <br>
    <input
        type="address"
        name="address"
        v-model="address"
        placeholder="address" />
    <input
        type="city"
        name="city"
        v-model="city"
        placeholder="city" />
    <input
        type="country"
        name="country"
        v-model="country"
        placeholder="country" />
    <br>
    <input
        type="phone"
        name="phone"
        v-model="phone"
        placeholder="phone" />
    <input
        type="lbo"
        name="lbo"
        v-model="lbo"
        placeholder="lbo" />
    <br>
    <div class="error" v-html="error"/>
    <br>
    <button
    @click="register"
    >Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      address: '',
      city: '',
      country: '',
      phone: '',
      lbo: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          address: this.address,
          city: this.city,
          country: this.country,
          phone: this.phone,
          lbo: this.lbo
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
    color: red;
}
</style>
