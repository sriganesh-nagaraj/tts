const textToSpeech = require('@google-cloud/text-to-speech')
const { writeFile } = require('node:fs/promises')
const client = new textToSpeech.TextToSpeechClient()

async function main() {
  const request = {
    input: { text: 'Hello, world!' },
    voice: { languageCode: 'en-GB', name: 'en-GB-Wavenet-A' },
    audioConfig: { audioEncoding: 'MP3' },
  }

  const [response] = await client.synthesizeSpeech({
    input: {
      ssml: `<speak>

<break time="1s"/>Dear Zack, Welcome.

<break time="2s"/>Find a comfortable seated position, your spine gently lengthened, shoulders relaxed, and hands resting softly in your lap. Allow a gentle smile to grace your lips.

<break time="2s"/>Now, let's begin with a deep exhalation, releasing any tension you may be holding. Breathe out…  <break time="2s"/>And now, a slow, deep inhalation, filling your lungs with fresh air. <break time="3s"/>

<break time="1s"/>Exhale fully…<break time="2s"/>  Inhale deeply…<break time="3s"/>

<break time="1s"/>One last time: exhale, releasing… <break time="2s"/> and inhale, receiving… <break time="3s"/>

<break time="2s"/>Good. Now, Zack,  gently turn your attention inwards.  Notice any sadness present within you. Acknowledge it, without judgment, like observing a cloud passing in the sky.  It's okay to feel sadness. Simply observe its presence.

<break time="3s"/>Imagine now, with each exhale, you are gently releasing this sadness.  Picture it flowing out of you with every breath, like a grey mist dissipating into the air.

<break time="3s"/>And with each inhale,  breathe in a sense of peace and calm.

<break time="3s"/>Now, imagine yourself transported to a tranquil meadow bathed in the warm glow of the afternoon sun.  Feel the soft grass beneath your feet, cool and yielding.  Smell the sweet fragrance of wildflowers carried on a gentle breeze.  Hear the buzzing of bees flitting from blossom to blossom.

<break time="4s"/>See the vibrant colors of the flowers around you:  deep reds, sunny yellows, and vibrant blues.  Allow their beauty to fill you with a sense of joy and wonder.  Feel the warmth of the sun on your skin, nurturing and comforting.  This is your sanctuary.

<break time="4s"/>Here, in this peaceful meadow, begin a new breath pattern. Inhale slowly, counting to four… one, two, three, four. Hold for two… one, two. And exhale fully, counting to six… one, two, three, four, five, six.

<break time="4s"/>Continue this breath:  inhale for four, hold for two, exhale for six.  With each breath, allow the feeling of happiness to grow within you, like the blossoming of a flower.

<break time="8s"/>Breathe in happiness, breathe out peace.

<break time="4s"/>Now, Zack, gently bring your awareness back to your body and your surroundings. Wiggle your fingers and toes. Take one final deep breath, filling your lungs with the peace and happiness of the meadow.

<break time="2s"/>And when you’re ready, open your eyes.

<break time="2s"/>Carry this sense of happiness with you as you continue your day, remembering the tranquility of the meadow whenever you need it.

<break time="2s"/>Namaste.

</speak>`,
    },
    voice: { languageCode: 'en-AU', name: 'en-AU-Wavenet-C' },
    audioConfig: { audioEncoding: 'MP3', speakingRate: 0.8 },
  })
  await writeFile('output.mp3', response.audioContent, 'binary')
  console.log('Audio content written to file: output.mp3')
}

main()
