<template>
  {{ account }}
  <div class="container-fluid">
    <section class="row justify-content-around p-2">
      <div class="col-md-3 card my-2">
        <section class="row">
          <p class="nickname-font">@{{ account.nickname }}</p>
          <h3>{{ account.name }}</h3>

        </section>

      </div>
      <form action="">
        <div class="col-md-7 card my-2">
          <div class="row">
            <h3 class="mt-3">Edit your Account Info:</h3>
            <div class="form-floating my-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" required v-model="editable.email">
              <label for="email">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="name" class="form-control" id="floatingInput" placeholder="Name" name="name" required v-model="editable.name">
              <label for="name">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="nickname" class="form-control" id="floatingInput" placeholder="Nickname" name="nickname" required v-model="editable.nickname">
              <label for="nickname">Nickname</label>
            </div>
            <div class="form-floating my-3">
              <input type="picture" class="form-control" id="floatingInput" placeholder="prof-pic" name="email" required v-model="editable.picture">
              <label for="picture">Profile Picture</label>
            </div>
            <div class="form-floating my-3">
              <input type="picture" class="form-control" id="floatingInput" placeholder="banner-img" name="email" required v-model="editable.coverImg">
              <label for="picture">Banner Image</label>
            </div>
            <div class="form-floating my-3">
              <textarea type="bio" class="form-control" id="floatingInput" placeholder="Bio" name="bio" required v-model="editable.bio"  rows="5"></textarea>
              <label for="bio">Bio</label>
            </div>
            <div class="form-floating my-3">
              <input type="github" class="form-control" id="floatingInput" placeholder="Github" name="github" required v-model="editable.github">
              <label for="github">Github</label>
            </div>
            <div class="form-floating my-3">
              <input type="linkedin" class="form-control" id="floatingInput" placeholder="LinkedIn" name="linkedin" required v-model="editable.linkedin">
              <label for="linkedin">LinkedIn</label>
            </div>
            <div class="form-floating my-3">
              <input type="resume" class="form-control" id="floatingInput" placeholder="Resume" name="resume" required v-model="editable.resume">
              <label for="resume">Resume</label>
            </div>
            <div class="form-floating my-3">
              <input type="class" class="form-control" id="floatingInput" placeholder="Class" name="class" required v-model="editable.class">
              <label for="class">Class</label>
            </div>
            <button> </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...AppState.account }
    })

    return {
      editable,
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

nickname-font {
  color: grey
}
</style>
