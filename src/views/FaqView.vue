<template>
  <div class="faqInfo">
    <header>
      <h1>Programming FAQ</h1>
      <p class="subtitle">Frequently Asked Questions for Developers</p>
    </header>

    <div class="faq-container">
      <div class="faq-section">
        <div class="section-title">1. Getting Started with Programming</div>
        <ul class="faq-list">
          <li class="faq-item">
            <div class="faq-question">What programming language should I learn first?</div>
            <div class="faq-answer">
              <p>It depends on your goals:</p>
              <ul>
                <li>
                  <span class="highlight">Web Development:</span> Start with
                  <strong>HTML/CSS</strong>, then <strong>JavaScript</strong>.
                </li>
                <li>
                  <span class="highlight">Data Science/AI:</span> <strong>Python</strong> is the
                  best choice.
                </li>
                <li>
                  <span class="highlight">Mobile Apps:</span> <strong>Swift</strong> (iOS) or
                  <strong>Kotlin</strong> (Android).
                </li>
                <li>
                  <span class="highlight">Game Development:</span> Try <strong>C#</strong> (Unity)
                  or <strong>C++</strong> (Unreal Engine).
                </li>
              </ul>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">How long does it take to learn programming?</div>
            <div class="faq-answer">
              <p>It varies, but with consistent practice:</p>
              <ul>
                <li><strong>Basic proficiency:</strong> 3–6 months.</li>
                <li><strong>Job-ready skills:</strong> 1–2 years.</li>
                <li><strong>Mastery:</strong> 5+ years (continuous learning).</li>
              </ul>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">
              Do I need a computer science degree to become a programmer?
            </div>
            <div class="faq-answer">
              <p>
                No! Many developers are self-taught or use online courses (e.g., freeCodeCamp,
                Coursera, Udemy). However, a degree can help with deeper concepts and job
                opportunities.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="faq-section">
        <div class="section-title">2. Coding Problems & Debugging</div>
        <ul class="faq-list">
          <li class="faq-item">
            <div class="faq-question">Why is my code not working?</div>
            <div class="faq-answer">
              <p>Common issues:</p>
              <ul>
                <li><strong>Syntax errors</strong> (missing brackets, semicolons).</li>
                <li><strong>Logic errors</strong> (incorrect conditions, loops).</li>
                <li><strong>Environment issues</strong> (wrong dependencies, outdated tools).</li>
              </ul>
              <p>
                <span class="highlight">Tip:</span> Use debugging tools (<code>console.log()</code>,
                breakpoints, linters).
              </p>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">How do I improve my problem-solving skills?</div>
            <div class="faq-answer">
              <ul>
                <li>
                  Practice on platforms like <strong>LeetCode</strong>, <strong>HackerRank</strong>,
                  or <strong>Codewars</strong>.
                </li>
                <li>Break problems into smaller steps.</li>
                <li>Learn algorithms & data structures.</li>
              </ul>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">What is a "stack overflow," and how do I fix it?</div>
            <div class="faq-answer">
              <p>
                It happens when a function calls itself infinitely (recursion without a base case).
              </p>
              <p><span class="highlight">Solution:</span></p>
              <ul>
                <li>Add a termination condition.</li>
                <li>Use iteration instead of recursion if possible.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="faq-section">
        <div class="section-title">3. Career & Jobs in Programming</div>
        <ul class="faq-list">
          <li class="faq-item">
            <div class="faq-question">How do I build a strong portfolio?</div>
            <div class="faq-answer">
              <ul>
                <li>Work on <strong>real projects</strong> (not just tutorials).</li>
                <li>Contribute to <strong>open-source</strong> (GitHub).</li>
                <li>
                  Showcase projects on a <strong>personal website</strong> or
                  <strong>LinkedIn</strong>.
                </li>
              </ul>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">
              What's the difference between a developer, engineer, and programmer?
            </div>
            <div class="faq-answer">
              <ul>
                <li><strong>Programmer:</strong> Writes code (may not design systems).</li>
                <li><strong>Developer:</strong> Builds software (full lifecycle).</li>
                <li><strong>Engineer:</strong> Solves complex problems with scalable solutions.</li>
              </ul>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">How much do programmers earn?</div>
            <div class="faq-answer">
              <p>Salaries vary by location/experience:</p>
              <ul>
                <li><strong>Junior Dev:</strong> $50k–$80k/year.</li>
                <li><strong>Senior Dev:</strong> $100k–$180k/year.</li>
                <li><strong>FAANG/High-tier:</strong> $150k–$300k+.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="faq-section">
        <div class="section-title">4. Tools & Technologies</div>
        <ul class="faq-list">
          <li class="faq-item">
            <div class="faq-question">What's the best code editor/IDE?</div>
            <div class="faq-answer">
              <p>Popular choices:</p>
              <ul>
                <li><strong>VS Code</strong> (lightweight, extensions).</li>
                <li><strong>IntelliJ IDEA</strong> (Java/Kotlin).</li>
                <li><strong>PyCharm</strong> (Python).</li>
                <li><strong>Vim/Emacs</strong> (for terminal lovers).</li>
              </ul>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">Should I use Git?</div>
            <div class="faq-answer">
              <p><strong>Yes!</strong> Git is essential for version control. Learn:</p>
              <ul>
                <li>
                  Basic commands (<code>git clone</code>, <code>commit</code>, <code>push</code>).
                </li>
                <li>Branching & merging.</li>
                <li>Platforms like <strong>GitHub/GitLab</strong>.</li>
              </ul>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">What's the difference between SQL and NoSQL?</div>
            <div class="faq-answer">
              <ul>
                <li><strong>SQL</strong> (MySQL, PostgreSQL): Structured, table-based.</li>
                <li>
                  <strong>NoSQL</strong> (MongoDB, Redis): Flexible, document/key-value storage.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="faq-section">
        <div class="section-title">5. Future of Programming</div>
        <ul class="faq-list">
          <li class="faq-item">
            <div class="faq-question">Will AI replace programmers?</div>
            <div class="faq-answer">
              <p>
                Unlikely. AI (like GitHub Copilot) assists but can't replace human problem-solving.
                Focus on <strong>high-level design</strong> and <strong>creativity</strong>.
              </p>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">What should I learn next after basics?</div>
            <div class="faq-answer">
              <p>Explore:</p>
              <ul>
                <li><strong>Cloud (AWS/Azure/GCP).</strong></li>
                <li><strong>DevOps (Docker, Kubernetes).</strong></li>
                <li><strong>Machine Learning (TensorFlow, PyTorch).</strong></li>
              </ul>
            </div>
          </li>
          <li class="faq-item">
            <div class="faq-question">How do I stay updated with tech trends?</div>
            <div class="faq-answer">
              <p>Follow:</p>
              <ul>
                <li>Blogs (Dev.to, Medium).</li>
                <li>Newsletters (JavaScript Weekly, Python Bytes).</li>
                <li>Conferences (Google I/O, WWDC).</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <footer>
      <h3>Need More Help?</h3>
      <p>Join developer communities for support and networking!</p>
      <div class="community-links">
        <a href="https://stackoverflow.com" class="community-link" target="_blank"
          >Stack Overflow</a
        >
        <a href="https://reddit.com/r/learnprogramming" class="community-link" target="_blank"
          >Reddit</a
        >
        <a href="https://discord.gg/programming" class="community-link" target="_blank">Discord</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.faqInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding: 20px;
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
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px 0;
  border-bottom: 2px solid var(--gray);
}

h1 {
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  color: var(--color-text);
  font-size: 1.2rem;
  opacity: 0.8;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-section {
  margin-bottom: 40px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.section-title {
  background-color: var(--color-primary);
  color: white;
  padding: 15px 20px;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.section-title:hover {
  background-color: var(--color-primary-hover);
  color: white;
}

.section-title::after {
  content: '+';
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.section-title.active::after {
  content: '-';
}

.faq-list {
  padding: 0;
  list-style: none;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  padding: 15px 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question:hover {
  background-color: rgba(37, 99, 235, 0.05);
}

.faq-question::after {
  content: '▸';
  transition: transform 0.3s ease;
}

.faq-question.active::after {
  transform: rotate(90deg);
}

.faq-answer {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    padding 0.3s ease;
}

.faq-answer.show {
  padding: 0 20px 20px;
  max-height: 1000px;
}

.faq-answer ul {
  padding-left: 20px;
  margin: 10px 0;
}

.faq-answer li {
  margin-bottom: 5px;
}

.highlight {
  color: var(--color-primary);
  font-weight: 600;
}

footer {
  text-align: center;
  margin-top: 40px;
  padding: 20px 0;
  border-top: 2px solid var(--gray);
}

.community-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.community-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.community-link:hover {
  color: var(--color-text);
  text-decoration: underline;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.1rem;
  }
}
</style>
