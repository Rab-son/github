<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="bg-white shadow-md fixed w-full z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-xl font-bold text-primary">Rabson Sayenda</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#summary" class="text-gray-600 hover:text-primary">Summary</a>
            <a href="#skills" class="text-gray-600 hover:text-primary">Skills</a>
            <a href="#projects" class="text-gray-600 hover:text-primary">Projects</a>
            <a href="#experience" class="text-gray-600 hover:text-primary">Experience</a>
            <a href="#education" class="text-gray-600 hover:text-primary">Education</a>
            <a href="#certifications" class="text-gray-600 hover:text-primary">Certifications</a>
            <a href="#references" class="text-gray-600 hover:text-primary">References</a>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="pt-24 pb-12 bg-gradient-to-r from-primary to-secondary text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Mobile Money Integration Specialist</h1>
          <p class="text-xl md:text-2xl">Telekom Networks Malawi | TNM Mpamba</p>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Summary Section -->
      <section id="summary" class="mb-16">
        <h2 class="section-title">Summary</h2>
        <div class="card">
          <p class="text-lg leading-relaxed">
            I am a Mobile Money Integration Specialist, working for Telekom Networks Malawi and TNM
            Mpamba. I have experience designing mobile money solutions from business requirements,
            algorithms, databases, websites and other software products for TNM Mpamba. I also
            provide digital solutions to startups and already-established corporations.
          </p>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="mb-16">
        <h2 class="section-title">Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card">
            <h3 class="text-xl font-semibold mb-4">Languages</h3>
            <ul class="space-y-2">
              <li>PHP</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold mb-4">Web Programming</h3>
            <ul class="space-y-2">
              <li>Laravel</li>
              <li>Svelte</li>
              <li>FastAPI</li>
              <li>Vue.js</li>
            </ul>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold mb-4">Analytics</h3>
            <ul class="space-y-2">
              <li>Data Modelling</li>
              <li>Data Normalization & Warehousing</li>
            </ul>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold mb-4">Database Management</h3>
            <ul class="space-y-2">
              <li>SQL</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="mb-16">
        <h2 class="section-title">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card hover:shadow-lg transition-shadow duration-300">
            <a
              href="https://github.com/Rab-son/news-app"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <h3 class="text-xl font-semibold mb-2">News Rooms App</h3>
              <p class="text-gray-600">A modern news application built with React-native and News API</p>
            </a>
          </div>
          <div class="card hover:shadow-lg transition-shadow duration-300">
            <a
              href="https://github.com/Rab-son/financial-advisor"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <h3 class="text-xl font-semibold mb-2">Financial Advisor</h3>
              <p class="text-gray-600">
                Financial advisory platform with personalized recommendations
              </p>
            </a>
          </div>
          <div class="card hover:shadow-lg transition-shadow duration-300">
            <a
              href="https://rabadminmysite.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <h3 class="text-xl font-semibold mb-2">Admin Dashboard</h3>
              <p class="text-gray-600">Custom admin dashboard for task management</p>
            </a>
          </div>
          <div class="card hover:shadow-lg transition-shadow duration-300">
            <a
              href="https://github.com/Rab-son/harvest_hub.git"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <h3 class="text-xl font-semibold mb-2">Harvest Hub</h3>
              <p class="text-gray-600">Agricultural marketplace connecting farmers and buyers</p>
            </a>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="mb-16">
        <h2 class="section-title">Experience</h2>
        <div class="space-y-8">
          <div class="card">
            <h3 class="text-xl font-semibold">Mobile Money Integrations Specialist</h3>
            <p class="text-gray-600">
              Telekom Networks Malawi | Blantyre, Malawi | April 2023 - Present
            </p>
            <ul class="list-disc list-inside mt-4 space-y-2">
              <li>
                Supported the TNM Mpamba platform, ensuring continuous, stable, and efficient
                operations
              </li>
              <li>Developed and deployed a new streamlined TNM Mpamba USSD Application</li>
              <li>
                Managed integrations with third parties like Terrapay, DPO, and various local
                services
              </li>
              <li>Modified over 4,000 customer USSD notifications</li>
              <li>Migrated 90+ services to a new streamlined menu within 3 months</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="text-xl font-semibold">Remote Software Engineer</h3>
            <p class="text-gray-600">
              Maravi Commodity Traders Limited | Lilongwe, Malawi | Jun 2022 - December 2022
            </p>
            <ul class="list-disc list-inside mt-4 space-y-2">
              <li>Managed the company's website, ensuring SSL certificate activation</li>
              <li>Supervised and managed software engineering projects</li>
              <li>
                Designed and developed an e-commerce platform using Laravel, Vue.JS, and Tailwind
                CSS
              </li>
            </ul>
          </div>

          <div class="card">
            <h3 class="text-xl font-semibold">Remote Software Engineer</h3>
            <p class="text-gray-600">University of Malawi | Zomba, Malawi | Oct 2020 - Nov 2022</p>
            <ul class="list-disc list-inside mt-4 space-y-2">
              <li>
                Designed and developed user interfaces for NAMIS and UNDP's Waste Management System
              </li>
              <li>Provided technical support and consultation for system inconsistencies</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="mb-16">
        <h2 class="section-title">Education</h2>
        <div class="space-y-6">
          <div class="card">
            <h3 class="text-xl font-semibold">University of Malawi</h3>
            <p class="text-gray-600">
              Bachelor of Science (Computer Science and Mathematics) | 2020
            </p>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold">University of the People</h3>
            <p class="text-gray-600">Bachelor of Science in Computer Science | 2022 | cGPA: 3.76</p>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold">University of the People</h3>
            <p class="text-gray-600">
              Associate of Science In Computer Science | 2021 | cGPA: 3.78
            </p>
          </div>
        </div>
      </section>

      <!-- Certifications Section -->
      <section id="certifications" class="mb-16">
        <h2 class="section-title">Certifications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card">
            <h3 class="text-xl font-semibold">Meta (formerly Facebook)</h3>
            <p class="text-gray-600">Meta Back-end Developer Professional Certificate | 2024</p>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold">University of Alberta</h3>
            <p class="text-gray-600">
              Software Design and Architecture Specialization Certificate | 2024
            </p>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold">Holberton Inc</h3>
            <p class="text-gray-600">ALX Software Engineering Programme | 2023</p>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold">Huawei Global Training Center</h3>
            <p class="text-gray-600">
              Mobile Wallet Instance Configuration Professional Practice Certificate | 2023
            </p>
          </div>
        </div>
      </section>

      <!-- References Section -->
      <section id="references" class="mb-16">
        <h2 class="section-title">References</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card">
            <h3 class="text-xl font-semibold mb-2">Telekom Networks Malawi</h3>
            <ul class="space-y-2">
              <li>
                <p class="font-medium">Charles Chitseko</p>
                <p class="text-gray-600">Mobile Money Systems Administrator</p>
                <p class="text-gray-600">+265 887 03 19 31</p>
                <p class="text-gray-600">charlees.chitseko@tnmmpamba.co.mw</p>
              </li>
            </ul>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold mb-2">University of Malawi</h3>
            <ul class="space-y-2">
              <li>
                <p class="font-medium">Dr. Tiwonge Manda</p>
                <p class="text-gray-600">Associate Professor</p>
                <p class="text-gray-600">+265 887 03 19 31</p>
                <p class="text-gray-600">tmanda@unima.ac.mw</p>
              </li>
            </ul>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold mb-2">Maravi Commodity Traders Limited</h3>
            <ul class="space-y-2">
              <li>
                <p class="font-medium">Gerald Mwenelupembe</p>
                <p class="text-gray-600">Managing Founder</p>
                <p class="text-gray-600">+265 999 84 56 89</p>
                <p class="text-gray-600">geraldmwenelupembe@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p>&copy; 2024 Rabson Sayenda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import MobileNav from './components/MobileNav.vue'
</script>
