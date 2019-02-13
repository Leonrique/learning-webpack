/* eslint-disable */
<template>
    <div >
      <Header/>
      <div class="row">
        <div class="col-md-12">
          <ul is="transition-group">
            <li v-for="user in users" class="user" :key="user['.key']">
              <span>{{user.name}} - {{user.email}}</span>
              <button v-on:click="removeUser(user)" class="btn">X</button>
            </li>
          </ul>
          <form id="form" v-on:submit.prevent="addUser">
            <input type="text" class="form-control input-md" v-model="newUser.name" placeholder="Username">
            <input type="email" class="form-control input-md" v-model="newUser.email" placeholder="email@email.com">
            <input type="submit" class="btn" value="Add User">
          </form>
          <ul class="errors">
            <li v-show="!validation.name">Name cannot be empty.</li>
            <li v-show="!validation.email">Please provide a valid email address.</li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable */
import { db, usersRef } from './firebase'
import Header from './components/Header.vue'

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
   name: 'OtherStuff',
   components: { Header },
   data: function() {
      return {
         newUser: {
            name: '',
            email: ''
         }
      }
   },
   firebase: {
      users: usersRef
   },
   mounted() {
      console.log(this.users)
   },
   computed: {
      validation: function() {
         return {
            name: !!this.newUser.name.trim(),
            email: emailRE.test(this.newUser.email)
         }
      },
      isValid: function() {
         var validation = this.validation
         return Object.keys(validation).every(function(key) {
            return validation[key]
         })
      }
   },
   methods: {
      addUser: function() {
         if (this.isValid) {
            usersRef.push(this.newUser)

            /* var pessoa = {
               nome: 'leon',
               sobreNome: 'Oliveira',
               cidadeEmQueNasceu: 'Goaiania'
            }
            usersRef.push(pessoa) */

            this.newUser.name = ''
            this.newUser.email = ''
         }
      },
      removeUser: function(user) {
         usersRef.child(user['.key']).remove()
      }
   }
}
</script>

<style scoped>
#OtherStuff {
   text-align: center;
}

ul {
   padding: 0;
}

input {
   margin: 5px;
}

.user {
   height: 50px;
   line-height: 30px;
   padding: 10px;
   border-top: 1px solid #eee;
   overflow: hidden;
   transition: all 0.25s ease;
}

.user:last-child {
   border-bottom: 1px solid #eee;
}

.v-enter,
.v-leave-active {
   height: 0;
   padding-top: 0;
   padding-bottom: 0;
   border-top-width: 0;
   border-bottom-width: 0;
}

.errors {
   color: #f00;
}
</style>
