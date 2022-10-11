export default {
    loadImage(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            let reader = new FileReader()
            reader.onload = (e) => {
                let target: any = e.target;
                let data = target.result;
                resolve(data)
            }
            reader.onerror = (e) => {
                reject(e)
            }
            reader.readAsDataURL(file)
        }) 
    }
}