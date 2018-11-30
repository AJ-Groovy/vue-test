<template>
  <div class="scanner">
    QR Scanner
    <video v-show="" class="preview"></video>
    <button class="btn">Reset</button>
    <p>{{this.result}}</p>
  </div>
</template>

<script>
import Instascan from 'instascan'
export default {
  name: 'Scanner',
  data () {
    return {
      result: 'hello',
      isScanFinished: false
    }
  },
  created () {
    let scanner = new Instascan.Scanner({
      video: document.querySelector('.preview')
    })
    scanner.addListener('scan', function (content) {
      console.log(content)
    })

    Instascan.Camera.getCameras()
      .then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0])
        } else {
          console.error('No cameras found.')
        }
      })
      .then((data) => {
        this.result = data
      })
      .catch(function (e) {
        console.error(e)
      })
  }
}
</script>

<style>
.scanner {
  font-size: 45px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.preview {
  border: 1px solid black;
  margin-bottom: 30px;
}
.btn {
  border: 1px solid black;
}
</style>
