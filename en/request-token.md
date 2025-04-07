<script setup>
import { ref } from 'vue';

const email = ref('');
const token = ref('');

const submitForm = () => {
  const payload = {
    event: 'DEVELOPER_REQUEST_TOKEN',
    traits: {
      email: email.value,
      token: token.value
    },
  };
  fetch('https://api.segment.io/v1/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer YOUR_SEGMENT_WRITE_KEY'
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
</script>

# Request Token<Badge type="warning" text="beta" />

## How It Works

This is a simple form that allows you to request a token.

<form @submit.prevent="submitForm">
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />
  </div>
  <div>
    <label for="token">Token:</label>
    <input type="text" id="token" v-model="token" required />
  </div>
  <button type="submit" class="vp-button">Submit</button>
</form>

### Notes

- Make sure the email address is valid and the token is correctly formatted.
- The API endpoint used in this example is for demonstration purposes. Replace it with the appropriate endpoint for your use case.
- Handle errors gracefully in your application to improve user experience.
- This feature is currently in beta and may be subject to changes.
