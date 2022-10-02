<template>
  <div class="main-frame">
    <label for="title">Title</label>
    <input class="title" type="text" v-model="product.title"/>
    <label for="price">Price</label>
    <input class="price" type="number" v-model="product.price"/>
    <label for="images">Images</label>
    <input class="images" type="file" accept="image/*" @change="onSelectImage"/>
    <ImageCollection :images="product.images"/>
    <label for="description">Description</label>
    <textarea class="description" v-model="product.description"/>
  </div>
</template>

<script lang="ts">
import ImageCollection from "@/components/ImageCollection.vue";
import {defineComponent} from "vue";

interface Product {
  title: string,
  price: number,
  description: string,
  images: string[]
}

export default defineComponent({
  name: 'EditProduct',
  components: {ImageCollection},
  data() {
    return {
      product: {} as Product
    }
  },
  methods: {
    onSelectImage(e: Event) {
      console.log('Image Selected - ', e)
      const target = e.target
    }
  }
})
</script>

<style lang="scss" scoped>

.main-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  * {
    width: 80%;
  }

  label {
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  input {
    border: 1px solid lightgrey;
    padding: 10px;
    font-size: 28px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  textarea {
    border: 1px solid lightgrey;
    padding: 10px;
    font-size: 28px;
    border-radius: 10px;
  }
}

</style>