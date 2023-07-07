<template>
    <div class="stopwatch-widget">
      <h2>STOPWATCH</h2>
      <p>{{ formatTime }}</p>
      <div>
        <button @click="startStopwatch" :disabled="isRunning">Start</button>
        <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
        <button @click="resetStopwatch">Reset</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isRunning: false,
        startTime: null,
        elapsedTime: 0,
      };
    },
    computed: {
      formatTime() {
        const milliseconds = this.elapsedTime % 1000;
        const seconds = Math.floor(this.elapsedTime / 1000) % 60;
        const minutes = Math.floor(this.elapsedTime / 60000) % 60;
        const hours = Math.floor(this.elapsedTime / 3600000);
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
      },
    },
    methods: {
      startStopwatch() {
        if (!this.isRunning) {
          this.isRunning = true;
          this.startTime = Date.now();
          this.timerInterval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
          }, 10);
        }
      },
      stopStopwatch() {
        if (this.isRunning) {
          this.isRunning = false;
          clearInterval(this.timerInterval);
        }
      },
      resetStopwatch() {
        this.isRunning = false;
        clearInterval(this.timerInterval);
        this.elapsedTime = 0;
      },
    },
  };
  </script>
  
  <style scoped>
  .stopwatch-widget {
    border: 1.5px solid #bdbcbc;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    background-color: #d4e8fc;
    border-radius: 8px;
  }
  .stopwatch-widget h2 {
    color: #1d4158;
    font-size: 24px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .stopwatch-widget p {
    color: #666;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .stopwatch-widget button {
    padding: 10px 20px;
    background-color: #2d6ec2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .stopwatch-widget button:hover {
    background-color: #2d6ec2;
  }
  .stopwatch-widget button:disabled {
    background-color: #ccc;
    color: #999;
    cursor: not-allowed;
  }
  </style>