---
title: Solicitar Token
description: Solicitar Token para acessar a API da Zarv
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
  sent.value = true;
};
</script>

# {{ $frontmatter.title }}<Badge type="warning" text="beta" />

Para acessar nossa API, você precisa se inscrever e aguardar a revisão da sua solicitação pela nossa equipe. Esse processo garante que possamos oferecer o melhor suporte possível e manter a segurança da nossa plataforma.

---

<div v-if="sent">
  <div style="text-align:center;padding-top:20px;padding-bottom:20px">
    <h2 style="font-weight:bold;border:none;margin-top:10px">Obrigado pela sua solicitação!</h2>

Revisaremos sua solicitação e entraremos em contato em breve.
  
  <a href="/" class="vp-button">Voltar para a página inicial</a>
</div>

## O Que Acontece Depois?

Após enviar sua solicitação, nossa equipe analisará cuidadosamente os detalhes fornecidos. Esse processo de revisão geralmente leva alguns dias úteis. Certifique-se de que todas as informações na sua solicitação estão corretas e completas para evitar atrasos.

::: tip Importante!
Após a aprovação da sua solicitação, você receberá sua chave de API **por e-mail**, que poderá usar para autenticar-se em nossa API. Mantenha essa chave segura, pois ela concede acesso à sua conta e aos nossos serviços. Caso perca sua chave de API ou suspeite de acesso não autorizado, entre em contato com nossa equipe de suporte imediatamente para revogar e gerar uma nova chave.
:::

</div>

<form @submit.prevent="submitForm" class="form" v-if="!sent">
  <div class="form-group">
    <label for="industry">Tipo de Empresa</label>
    <select v-model="industry" id="industry" required>
      <option value="" disabled selected>Selecione sua opção</option>
      <option value="data-partner">Parceiro de Dados</option>
      <option value="government">Governo</option>
      <option value="insurance">Companhia de Seguros</option>
      <option value="credit">Empresa de Finanças/Crédito</option>
      <option value="startup">Startup</option>
      <option value="other">Outro</option>
    </select>
  </div>
  <div class="form-group">
    <label for="company">Nome da Empresa</label>
    <input type="text" id="company" v-model="company" required />
  </div>
  <div class="form-group">
    <label for="name">Seu Nome</label>
    <input type="text" id="name" v-model="name" required />
  </div>
  <div class="form-group">
    <label for="email">Seu E-mail Corporativo</label>
    <input type="email" id="email" v-model="email" required />
  </div>
  <div class="form-group" required>
    <label for="role">Seu Cargo</label>
    <select v-model="role" id="role">
      <option value="engineer">Engenheiro</option>
      <option value="product-manager">Gerente de Produto</option>
      <option value="data-scientist">Cientista de Dados</option>
      <option value="business-analyst">Analista de Negócios</option>
      <option value="ceo">CEO</option>
      <option value="cto">CTO</option>
      <option value="founder">Fundador</option>
      <option value="other">Outro</option>
    </select>
  </div>
  <div class="form-group">
    <label for="phone">Seu Whatsapp</label>
    <input type="text" id="phone" v-model="phone" required />
  </div>
  <div class="form-group">
    <button type="submit" class="vp-button">Solicitar Acesso à API</button>
  </div>
</form>

## Precisa de Ajuda?

Se você tiver dúvidas ou encontrar problemas durante o processo de solicitação, entre em contato com nossa equipe de suporte. Estamos aqui para ajudá-lo em cada etapa do processo. Você pode nos contatar por e-mail em [developers@zarv.com](mailto:developers@zarv.com). Além disso, nossa seção de FAQ fornece respostas para perguntas comuns sobre o processo de solicitação e uso da API.
