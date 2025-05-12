<template>
  <div class="docsInfo">
    <div class="docs-container">
      <header>
        <h1>Documentation</h1>
        <p class="subtitle">Browse our technical documentation and guides</p>
      </header>

      <div class="docs-grid">
        <!-- Document 1 -->
        <div class="doc-card">
          <div class="doc-header">
            <div class="doc-title">Minecraft Developments</div>
            <div class="doc-meta">Last updated: May 10th, 2025</div>
          </div>
          <div class="doc-content">
            <p class="doc-description">
              Explore the latest tools and mods for Minecraft creators. From custom plugins to
              shader packs, enhance your building experience.
            </p>
            <div class="doc-tags">
              <span class="tag">List</span>
              <span class="tag">Setup</span>
              <span class="tag">Tutorial</span>
            </div>
            <div class="doc-actions">
              <button class="btn btn-primary">View Document</button>
              <button class="btn btn-outline">Download PDF</button>
            </div>
          </div>
        </div>

        <!-- Document 2 -->
        <div class="doc-card">
          <div class="doc-header">
            <div class="doc-title">in Java</div>
            <div class="doc-meta">Last updated: May 10th, 2025</div>
          </div>
          <div class="doc-content">
            <p class="doc-description">
              Powerful, cross-platform applications built with enterprise-grade reliability. Master
              object-oriented programming and Android development.
            </p>
            <div class="doc-tags">
              <span class="tag">List</span>
              <span class="tag">API</span>
              <span class="tag">Reference</span>
            </div>
            <div class="doc-actions">
              <button class="btn btn-primary">View Document</button>
              <button class="btn btn-outline">Download PDF</button>
            </div>
          </div>
        </div>

        <!-- Document 3 -->
        <div class="doc-card">
          <div class="doc-header">
            <div class="doc-title">Web developments</div>
            <div class="doc-meta">Last updated: May 10th, 2025</div>
          </div>
          <div class="doc-content">
            <p class="doc-description">
              Build modern, responsive websites with cutting-edge frameworks and tools. From
              frontend design to backend APIs, master full-stack development.
            </p>
            <div class="doc-tags">
              <span class="tag">List</span>
              <span class="tag">Example</span>
              <span class="tag">Release</span>
            </div>
            <div class="doc-actions">
              <button class="btn btn-primary">View Document</button>
              <button class="btn btn-outline">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.docsInfo {
  margin-top: 60px;
  top: 60px;
  padding: 20px;
  height: 775px;
}
body {
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  padding: 20px;
}

.docs-container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px 0;
}

h1 {
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  color: var(--color-text);
  font-size: 1.1rem;
  opacity: 0.8;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.doc-card {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid var(--color-border);
}

.doc-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.doc-header {
  background-color: var(--color-primary);
  color: white;
  padding: 15px 20px;
}

.doc-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.doc-meta {
  font-size: 0.85rem;
  opacity: 0.9;
}

.doc-content {
  padding: 20px;
}

.doc-description {
  margin-bottom: 15px;
  color: var(---color-text);
}

.doc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
}

.tag {
  background-color: var(--color-border);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--color-text);
}

.doc-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid var(--color-border);
}

.btn {
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text);
}

.btn-primary:hover {
  background-color: var(--color-bg-secondary);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-outline:hover {
  background-color: rgba(37, 99, 235, 0.1);
}

@media (max-width: 768px) {
  .docs-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
