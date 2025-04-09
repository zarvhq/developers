---
title: Request Token
description: Request Token to access Zarv's API
aside: false
---

<script setup>
import { ref } from 'vue';

// With window location, get orign from URL
const url = new URL(window.location.href);
const origin = url.searchParams.get('origin') || null;

const loading = ref(false)
const sent = ref(false)
const error = ref(false)
const name = ref('');
const email = ref('');
const phone = ref('');
const company = ref('');
const industry = ref('');

let industryLabel = 'Developers'
if (origin === 'data-provider') {
  industryLabel = 'Data Providers'
  industry.value = 'data-provider'
} else if (origin === 'government') {
  industryLabel = 'Government'
  industry.value = 'government'
} else if (origin === 'insurance') {
  industryLabel = 'Insurance Companies'
  industry.value = 'insurance'
} else if (origin === 'credit') {
  industryLabel = 'Finance/Credit Companies'
  industry.value = 'credit'
}

const submitForm = () => {
  loading.value = true;
  sent.value = false;
  const payload = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    company: company.value,
    industry: industry.value,
  }
  console.log({ payload})
  window.analytics.track('DEVELOPER_TOKEN', payload);
  sent.value = true;
};
</script>

# {{ $frontmatter.title }} for {{ industryLabel }}<Badge type="warning" text="beta" />

To gain access to our API, you need to sign up and wait for our team to review your application. This process ensures that we can provide you with the best possible support and maintain the security of our platform.

---

<div v-if="sent" style="text-align:center">
  <h2 style="font-weight:bold;border:none">Thank you for your application!</h2>
  
  We will review your request and get back to you shortly.
  
  <a href="/en/guide/getting-started" class="vp-button">Getting Started</a>
</div>

<form @submit.prevent="submitForm" class="form" v-if="!sent">
  <div class="form-group">
    <label for="industry">Access Type:</label>
    <select v-model="industry" id="industry" :disabled="origin !== null">
      <option value="data-provider">Data Providers</option>
      <option value="government">Government</option>
      <option value="insurance">Insurance Companies</option>
      <option value="credit">Finance/Credit Companies</option>
      <option value="other">Single Developer</option>
    </select>
  </div>
  <div class="form-group">
    <label for="company">Company Name:</label>
    <input type="text" id="company" v-model="company" required />
  </div>
  <div class="form-group">
    <label for="name">Your Name:</label>
    <input type="text" id="name" v-model="name" required />
  </div>
  <div class="form-group">
    <label for="email">Your Work Email</label>
    <input type="email" id="email" v-model="email" required />
  </div>
  <div class="form-group">
    <label for="phone">Your Whatsapp:</label>
    <input type="text" id="phone" v-model="phone" required />
  </div>
  <div class="form-group">
    <button type="submit" class="vp-button">Request API Access</button>
  </div>
</form>

## What Happens Next?

Once you submit your application, our team will carefully review the details you provided. This review process typically takes a few business days. Please ensure that all the information in your application is accurate and complete to avoid delays.

::: tip Important!
After your application is approved, you will receive your API key **via email**, which you can use to authenticate with our API. Keep this key secure, as it grants access to your account and our services. If you lose your API key or suspect unauthorized access, contact our support team immediately to revoke and regenerate your key.
:::

## Need Help?

If you have any questions or encounter issues during the application process, feel free to reach out to our support team. We're here to assist you every step of the way. You can contact us via email at [help@zarv.com](mailto:help@zarv.com). Additionally, our FAQ section provides answers to common questions about the application process and API usage.
