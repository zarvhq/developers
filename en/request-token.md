---
title: Request Token
description: Request Token to access Zarv's API
aside: false
---

<script setup>
import { ref } from 'vue'

const origins = {
  'data-partner': 'Data Partner',
  'government': 'Government',
  'insurance': 'Insurance Company',
  'credit': 'Finance/Credit Company',
  'startup': 'Startup',
  'other': 'Other',
}

const loading = ref(false)
const sent = ref(false)
const error = ref(false)
const name = ref('');
const email = ref('');
const phone = ref('');
const company = ref('');
const industry = ref('');
const role = ref('');

const submitForm = () => {
  loading.value = true;
  sent.value = false;
  if (!!email.value && !!name.value && !!phone.value && !!company.value && !!industry.value && !!role.value) {
    window.analytics.identify(email.value.toLowerCase(), {
      name: name.value,
      phone: phone.value,
      company: company.value,
      industry: industry.value,
      role: role.value,
    })
    window.analytics.track('DEVELOPER_TOKEN', {
      name: name.value,
      email: email.value.toLowerCase(),
      phone: phone.value,
      company: company.value,
      industry: origins[industry.value],
      role: role.value,
    });
  } else {
    error.value = true;
    loading.value = false;
  }
  sent.value = true;
};
</script>

# {{ $frontmatter.title }}<Badge type="warning" text="beta" />

To gain access to our API, you need to sign up and wait for our team to review your application. This process ensures that we can provide you with the best possible support and maintain the security of our platform.

---

<div v-if="sent" style="text-align:center">
  <h2 style="font-weight:bold;border:none">Thank you for your application!</h2>
  
  We will review your request and get back to you shortly.
  
  <a href="/en/guide/getting-started" class="vp-button">Getting Started</a>
</div>

<form @submit.prevent="submitForm" class="form" v-if="!sent">
  <div class="form-group">
    <label for="industry">Company Type</label>
    <select v-model="industry" id="industry" required>
      <option value="" disabled selected>Select your option</option>
      <option value="data-partner">Data Partner</option>
      <option value="government">Government</option>
      <option value="insurance">Insurance Company</option>
      <option value="credit">Finance/Credit Company</option>
      <option value="startup">Startup</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div class="form-group">
    <label for="company">Company Name</label>
    <input type="text" id="company" v-model="company" required />
  </div>
  <div class="form-group">
    <label for="name">Your Name</label>
    <input type="text" id="name" v-model="name" required />
  </div>
  <div class="form-group">
    <label for="email">Your Work Email</label>
    <input type="email" id="email" v-model="email" required />
  </div>
  <div class="form-group" required>
    <label for="role">Your Role</label>
    <select v-model="role" id="role">
      <option value="engineer">Engineer</option>
      <option value="product-manager">Product Manager</option>
      <option value="data-scientist">Data Scientist</option>
      <option value="business-analyst">Business Analyst</option>
      <option value="ceo">CEO</option>
      <option value="cto">CTO</option>
      <option value="founder">Founder</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div class="form-group">
    <label for="phone">Your Whatsapp</label>
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
