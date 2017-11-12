<script>
  import { isEmpty } from 'lodash'

  export default {
    name: 'app-file-upload',
    props: {
      label: String,
      message: String,
      widthAccepted: Number,
      heightAccepted: Number,
      willCheck: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      files: [],
      fileSelected: {},
      image: {},
      widthError: false,
      heightError: false
    }),
    computed: {
      hasErrors () {
        return this.widthError && this.heightError
      },
      type () {
        return isEmpty(this.files)
          ? ''
          : this.hasErrors
            ? 'is-danger'
            : 'is-success'
      }
    },
    watch: {
      files () {
        this.readImage(this.files[0])
      },
      fileSelected () {
        this.emitFile(this.fileSelected)
      },
      image () {
        if (this.willCheck) {
          this.checkImageInformation(this.image)
        }
        this.emitImageInformation(this.image)
      },
      hasErrors () {
        this.$emit('load-errors', this.hasErrors)
      }
    },
    methods: {
      checkImageInformation (image) {
        const { width, height } = image
        this.checkWidth(image, width)
        this.checkHeight(image, height)
      },
      checkWidth (image, width) {
        if (width !== this.widthAccepted) {
          this.widthError = true
          return
        }

        this.widthError = false
        return
      },
      checkHeight (image, height) {
        if (height !== this.heightAccepted) {
          this.heightError = true
          return
        }

        this.heightError = false
        return
      },
      emitFile (file) {
        this.$emit('load-file', file)
      },
      emitImageInformation (image) {
        this.$emit('load-image-information', image)
      },
      readImage (file) {
        this.fileSelected = file
        const reader = new FileReader()

        reader.onload = (e) => {
          const image = new Image()
          image.src = reader.result
          this.image = image
        }
        reader.readAsDataURL(file)
      }
    }
  }
</script>

<template lang="html">
  <b-field :label="label" :message="message" :type="type">

    <b-upload v-model="files">
      <a class="button" :class="type">
        <b-icon icon="upload" />
        <span> Click to upload </span>
      </a>
    </b-upload>
  </b-field>
</template>
