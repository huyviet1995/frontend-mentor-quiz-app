<template>
    <div class="home-page">
      <div class="column">
        <h1>Welcome to the Frontend Quiz!</h1>
        <p>Pick a subject to get started down below.</p>
      </div>
      <div class="column">
        <ul class="subject-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Accessibility</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    justify-content: space-between;
  }
  
  .column {
    width: 45%; /* Adjust as needed */
  }
  
  .subject-list {
    list-style-type: none;
    padding: 0;
  }
  
  .subject-list li {
    margin-bottom: 20px; /* Adjust as needed */
  }
  </style>