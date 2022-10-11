import {ImageContext} from "@/components/ImageCollection.vue";

class ImageUploader {
    upload(src: string): ImageContext {
        return new ImageContext(src, new Promise(resolve => {
            let v = Math.random() * 5
            setTimeout(resolve, v * 1000)
        }))
    }
}

const imageUploader = new ImageUploader()
export default imageUploader
