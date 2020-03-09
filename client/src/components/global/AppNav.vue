<template>
  <div class="flex justify-between mb-10">
    <ul class="flex items-center">
      <li class="mr-4">
        <router-link :to="{ name: 'home' }" class="text-gray-800 font-medium">
          Home
        </router-link>
      </li>
    </ul>
    <ul class="flex items-center">
      <template v-if="authenticated">
        <li class="mr-4">
          <router-link :to="{ name: 'account' }" class="text-gray-800 font-medium">
            {{ user.name }}
          </router-link>
        </li>
        <li>
          <a href="#" class="text-gray-800 font-medium" @click.prevent="signOut">
            Sign out
          </a>
        </li>
      </template>
      <template v-else>
        <li class="mr-4">
          <router-link :to="{ name: 'signin' }" class="text-gray-800 font-medium">
            Sign in
          </router-link>
        </li>
        <li>
          <a href="#" class="font-medium text-gray-800">
            Sign up
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated'
      })
    }
  }
</script>