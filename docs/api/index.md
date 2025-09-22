---
editLink: false
---

# Referência das API's

<style>
.api-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.api-card {
  flex: 0 0 calc(50% - 1rem);
  min-width: 280px;
}

.api-card a {
  text-decoration: none;
}

.api-card-content {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s ease;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  height: 100%;
  box-sizing: border-box;
}

.api-card-content:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.api-card-title {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}

.api-card-description {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>

<div class="api-grid">

  <!-- <div class="api-card">
    <a href="/api/collector">
      <div class="api-card-content">
        <h3 class="api-card-title">Collector</h3>
        <p class="api-card-description">API de coleta de dados</p>
      </div>
    </a>
  </div> -->

  <div class="api-card">
    <a href="/api/zarv-id">
      <div class="api-card-content">
        <h3 class="api-card-title">Zarv ID</h3>
        <p class="api-card-description">API de validação e score</p>
      </div>
    </a>
  </div>

  <!-- <div class="api-card">
    <a href="/api/assets">
      <div class="api-card-content">
        <h3 class="api-card-title">Assets</h3>
        <p class="api-card-description">API de gerenciamento de ativos</p>
      </div>
    </a>
  </div> -->

</div>
