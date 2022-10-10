<template>
  <div class="edit-view">
    <div class="box">
      <label for="title">Title</label>
      <input class="title" type="text" v-model="product.title"/>
      <label for="price">Price</label>
      <input class="price" type="number" v-model="product.price"/>
      <label for="images">Images</label>
      <input class="images" ref="image-input" type="file" accept="image/*" @change="onSelectImage" hidden/>
      <SimpleButton message="Add Image" @click="onClickAddImage"/>
      <ImageCollection :images="product.images"/>
      <label for="description">Description</label>
      <textarea class="description" v-model="product.description"/>
      <div class="done-wrapper">
        <SimpleButton message="Done"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ImageCollection from "@/components/ImageCollection.vue";
import {defineComponent} from "vue";
import SimpleButton from "@/components/SimpleButton.vue";

interface Product {
  title: string,
  price: number,
  description: string,
  images: string[]
}

export default defineComponent({
  name: 'EditProduct',
  components: {SimpleButton, ImageCollection},
  data() {
    return {
      product: {} as Product
    }
  },
  methods: {
    onSelectImage(e: Event) {
      console.log('Image Selected - ', e)
    },
    onClickAddImage() {
      (this.$refs["image-input"] as HTMLButtonElement).click()
    }
  },
  mounted() {
    this.product.images = [
        "https://imageio.forbes.com/specials-images/imageserve/63176c131deda40e87b18cfb/save/960x0.jpg?format=jpg&width=960",
        "https://assets.reedpopcdn.com/buy-cyberpunk-2077-for-xbox-one-and-you-get-series-x-version-free-cd-projekt-confirms-1582558730847.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/buy-cyberpunk-2077-for-xbox-one-and-you-get-series-x-version-free-cd-projekt-confirms-1582558730847.jpg",
        "https://www.cnet.com/a/img/resize/b5ac643aebe7422a2715c4020d2439e45e293664/hub/2020/12/07/a9ca2f4f-a55b-48b0-96e6-c126eb0246e9/ebx8hzdwoaex7xc-1620x910.jpg?auto=webp&fit=crop&height=675&width=1200"
    ]
  }
})
</script>

<style lang="scss" scoped>

.edit-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .box {
    width: 50%;
    display: flex;
    flex-direction: column;
    background: #181a21;
    padding: 30px 50px;

    * {
      margin-bottom: 12px;
    }

    label {
      font-size: 20px;
      color: white;
    }

    input {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;

      font-size: 20px;
      border: 0.5px solid grey;
      outline: none;
      background: #E7F0FE;
    }

    textarea {
      border: 1px solid lightgrey;
      padding: 10px;
      font-size: 20px;
      outline: none;
      background: #E7F0FE;
    }

    .done-wrapper {
      display: flex;
      justify-content: right;
    }
  }
}

</style>