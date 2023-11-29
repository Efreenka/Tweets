<template>
  <div>
    <div v-for="tweet in data.tweets">
      <span>{{ tweet.message }}</span>
    <button @click="onLikeButtonPressed(tweet.id)">Like</button>
    Likes: {{ tweet.likes.length }}
    <button @click="onDislikeButtonPressed(tweet.id)">Dislike</button>
    
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue'
import { getTweets, addTweet, deleteTweet, likeTweet, dislikeTweet } from '../Api/Api';
import type { Tweet } from '../interfaces/Tweet';

let data: { tweets: Tweet[]; }  = reactive(
  {
    tweets: []
  }
  )

const onLikeButtonPressed = async (id:string) => {
  await likeTweet(id)
  
  let response = await getTweets()
  data.tweets = response!
}

const onDislikeButtonPressed = async (id:string) => {
  await dislikeTweet(id)

  let response = await getTweets()
  data.tweets = response!
}


onMounted( async () =>{
  await addTweet("Ahoj")
  const response = await getTweets()
  data.tweets = response!
})

const likesLenght = computed(()=> {

})

console.log(data)

</script>

<style>
  
</style>
