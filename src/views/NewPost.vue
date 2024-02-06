<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import router from '@/router';
import { fetch } from '../api'

const generes = [
  'EDM',
  'Hip Hop',
  'Jazz',
  'Pop',
  'R&B',
  'Orchestral',
  '8-Bit',
  'Rock',
  'Metal',
  'Other'
]
const initialState = {
  title: '',
  media: '',
  genere: '',
  description: ''
}
const rules = {
  title: { required },
  media: { required },
  genere: { required },
  description: {}
}

const state = reactive({
  ...initialState,
})

const v$ = useVuelidate(rules, state)

const shareSong = async () => {
  fetch('/api/posts', 'POST', state)
  router.push("/")
}
</script>
<template>
  <v-container fluid class="w-75">
    <v-row dense>
      <v-col cols="12">
        <h1>Share New Song for Feedback</h1>
      </v-col>
      <v-col cols="12">
        <v-container class="h-25">
          <div v-html="state.media"></div>
        </v-container>
      </v-col>
      <v-col cols="12">
        <form>
          <v-text-field v-model="state.media" :error-messages="v$.media.$errors.map(e => e.$message)"
            label="Song Embed Link*" required @input="v$.media.$touch" @blur="v$.media.$touch"></v-text-field>

          <v-text-field v-model="state.title" :error-messages="v$.title.$errors.map(e => e.$message)" :counter="10"
            label="Song Title*" required @input="v$.title.$touch" @blur="v$.title.$touch"></v-text-field>

          <v-select v-model="state.genere" :error-messages="v$.genere.$errors.map(e => e.$message)" :items="generes"
            label="Genere*" required @change="v$.genere.$touch" @blur="v$.genere.$touch"></v-select>

          <v-textarea v-model="state.description" label="Song Description" @input="v$.description.$touch"
            @blur="v$.description.$touch"></v-textarea>

          <v-btn v-if="!v$.$invalid" class="me-4" @click="shareSong" color="primary">
            Share
          </v-btn>
          <v-btn v-else class="me-4" @click="v$.$validate" color="primary">
            Share
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>