---
title: Request Token
description: Request Token to access Zarv's API
aside: false
---

<script setup>
import { ref } from 'vue'
import { useUrlSearchParams } from '@vueuse/core'

const origins = {
  'data-partner': 'Data Partner',
  'government': 'Government',
  'insurance': 'Insurance Company',
  'credit': 'Finance/Credit Company',
  'startup': 'Startup',
  'other': 'Other',
}

const roles = {
  engineer: 'Engineer',
  'product-manager': 'Product Manager',
  'data-scientist': 'Data Scientist',
  'business-analyst': 'Business Analyst',
  ceo: 'CEO',
  cto: 'CTO',
  founder: 'Founder',
  other: 'Other',
}

const params = useUrlSearchParams('hash-params', {
  origin: {
    type: String,
    default: null,
  },
})

const loading = ref(false)
const sent = ref(false)
const error = ref(false)
const name = ref('')
const email = ref('')
const phone = ref('')
const company = ref('')
const industry = ref(params.origin || null)
const role = ref('')

const submitForm = () => {
  loading.value = true;
  sent.value = false;
  if (!!email.value && !!name.value && !!phone.value && !!company.value && !!industry.value && !!role.value) {
    fetch('https://n8n.zarv.net/webhook/developers/api-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value.toLowerCase(),
        phone: phone.value,
        company: company.value,
        industryId: industry.value,
        industry: origins[industry.value],
        roleId: role.value,
        role: roles[role.value]
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const output = response.json();
      if (output.success) {
        sent.value = true;
      } else {
        error.value = true;
      }
    })
    .catch(() => {
      error.value = true;
    })
    .finally(() => {
      loading.value = false;
    });
  } else {
    error.value = true;
    loading.value = false;
  }
};
</script>

# {{ $frontmatter.title }}<Badge type="warning" text="beta" />

To gain access to our API, you need to sign up and wait for our team to review your application. This process ensures that we can provide you with the best possible support and maintain the security of our platform.

---

<div v-if="sent">
  <div style="text-align:center;padding-top:20px;padding-bottom:20px">
    <h2 style="font-weight:bold;border:none;margin-top:10px">Thank you for your application!</h2>

We will review your request and get back to you shortly.
  
  <a href="/" class="vp-button">Back home</a>
</div>

## What Happens Next?

Once you submit your application, our team will carefully review the details you provided. This review process typically takes a few business days. Please ensure that all the information in your application is accurate and complete to avoid delays.

::: tip Important!
After your application is approved, you will receive your API key **via email**, which you can use to authenticate with our API. Keep this key secure, as it grants access to your account and our services. If you lose your API key or suspect unauthorized access, contact our support team immediately to revoke and regenerate your key.
:::

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

## Need Help?

If you have any questions or encounter issues during the application process, feel free to reach out to our support team. We're here to assist you every step of the way. You can contact us via email at [developers@zarv.com](mailto:developers@zarv.com). Additionally, our FAQ section provides answers to common questions about the application process and API usage.
