<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goToDocs = () => {
  router.push('/docs')
}
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1>Your assistant on my projects</h1>
      <p>Your personal programming hub for code experiments, projects, and learning resources</p>
      <div class="cta-buttons">
        <a href="#" class="btn btn-primary">Explore Projects</a>
        <a href="#" @click="goToDocs" class="btn btn-outline">View Documentation</a>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features">
    <div class="container">
      <div class="section-title">
        <h2>Development Resources</h2>
        <p>A collection of my programming experiments and documented solutions</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">💻</div>
          <h3>Code Projects</h3>
          <p>
            Personal coding experiments and side projects with detailed explanations and source
            code.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📚</div>
          <h3>Tech Notes</h3>
          <p>Documentation, cheatsheets and how-to guides for various technologies I work with.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">⚙️</div>
          <h3>Dev Toolkit</h3>
          <p>Custom scripts, configurations and tools I've created to optimize my workflow.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:root {
  --primary: #4f46e5;
  --secondary: #4338ca;
  --accent: #6366f1;
  --text: #1f2937;
  --light: #f9fafb;
  --gray: #e5e7eb;
  --dark-gray: #6b7280;
  --border-radius: 8px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  padding: 100px 0 80px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: var(--text);
}

.hero p {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto 40px;
}

.cta-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border-radius: var(--border-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-primary:hover {
  background-color: rgba(107, 229, 70, 0.1);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-outline:hover {
  background-color: rgba(79, 70, 229, 0.1);
}

/* Features Section */
.features {
  padding: 60px 0;
  background-color: var(--color-bg);
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2.2rem;
  color: var(--color-text);
  margin-bottom: 15px;
}

.section-title p {
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-md);
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--color-text);
}

.feature-card p {
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
