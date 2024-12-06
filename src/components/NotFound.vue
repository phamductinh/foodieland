<template>
  <div className="not-found">
    <h1>404</h1>
    <p>Oops! The page you're looking for does'nt exist.</p>
    <a href="/">Go Back Home</a>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #333;
  color: #fff;

  h1 {
    font-size: 6rem;
    font-weight: bold;
    margin: 0;
    color: #ff4757;
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #fff;
  }

  a {
    font-size: 1.2rem;
    color: #3498db;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 2px solid #3498db;
    border-radius: 4px;
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover {
      background-color: #3498db;
      color: #fff;
    }
  }
}
</style>
