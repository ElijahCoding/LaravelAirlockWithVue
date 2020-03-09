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
      <li class="mr-4">
        <router-link :to="{ name: 'account' }" class="text-gray-800 font-medium">
          {{ user.name }}
        </router-link>
      </li>
      <li>
        <a href="#" class="text-gray-800 font-medium">
          Sign out
        </a>
      </li>
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
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>