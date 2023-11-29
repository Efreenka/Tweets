import type { Tweet } from "@/interfaces/Tweet"

const BASE_URL = "http://localhost:9090"

export const getTweets = async (): Promise<Tweet[] | undefined> => {
    try {
        const response = await fetch(`${BASE_URL}/tweets`)
        const tweets = await response.json()
        return tweets.results
    } catch (error) {
        console.error(`Error getting tweets: ${error}`)
    }
}

export const getTweet = async (tweetId: string): Promise<Tweet | undefined> => {
    try {
        const response = await fetch(`${BASE_URL}/tweets/${tweetId}`)
        const tweet = await response.json()
        return tweet
    } catch (error) {
        console.error(`Error getting tweet ${tweetId}: ${error}`)
    }
}

export const addTweet = async (message: string): Promise<Tweet | undefined> => {
    try {
        const response = await fetch(`${BASE_URL}/tweets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        })
        const newTweet = await response.json()
        return newTweet
    } catch (error) {
        console.error(`Error adding tweet: ${error}`)
    }
}

export const deleteTweet = async (tweetId: string): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/tweets/${tweetId}`, {
            method: 'DELETE'
        })
        if (response.ok) {
            console.log(`Tweet ${tweetId} deleted successfully.`)
        } else {
            console.error(`Error deleting tweet ${tweetId}: ${response.statusText}`)
        }
    } catch (error) {
        console.error(`Error deleting tweet ${tweetId}: ${error}`)
    }
}

export const likeTweet = async (tweetId: string): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/tweets/${tweetId}/likes`, {
            method: 'POST'
        })
        if (response.ok) {
            console.log(`Liked tweet ${tweetId} successfully.`)
        } else {
            console.error(`Error liking tweet ${tweetId}: ${response.statusText}`)
        }
    } catch (error) {
        console.error(`Error liking tweet ${tweetId}: ${error}`)
    }
}

export const dislikeTweet = async (tweetId: string): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/tweets/${tweetId}/likes`, {
            method: 'DELETE'
        })
        if (response.ok) {
            console.log(`Dislike tweet ${tweetId} successfully.`)
        } else {
            console.error(`Error dislike tweet ${tweetId}: ${response.statusText}`)
        }
    } catch (error) {
        console.error(`Error dislike tweet ${tweetId}: ${error}`)
    }
}
