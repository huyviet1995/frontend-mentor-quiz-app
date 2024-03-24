<template>
    <card-item 
        :title="title"
    />
  </template>
  
  <script>
  export default {
    name: 'MultipleChoiceItem',
    props: {
      title: {
        type: String,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    computed: {
      letter() {
        const letters = ['A', 'B', 'C', 'D'];
        return letters[this.index];
      }
    }
  }
  </script>