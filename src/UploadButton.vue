<template>
  <div
    class="upload-btn"
  > 
    <input
      :id="`uploadFile-${id}`"
      type="file"
      :name="name"
      :accept="accept"
      v-on:change="change"
    />
    <label 
      :for="`uploadFile-${id}`"
      v-ripple="ripple"
      :class="`v-btn ${classes}${color} upload-btn`"
    >
      {{ icon ? '' : title }}
      <slot name="icon"></slot>
    </label>
    <v-btn v-if="closable && filename != null" flat icon color="red" class="close" @click.native="deleteFile">
      <v-icon>close</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'upload-btn',
    props: {
      accept: {
        default: '*',
        type: String
      },
      block: {
        default: false,
        type: Boolean
      },
      color: {
        default: 'primary',
        type: String
      },
      disabled: {
        default: false,
        type: Boolean
      },
      flat: {
        default: false,
        type: Boolean
      },
      hover: {
        default: true,
        type: Boolean
      },
      icon: {
        default: false,
        type: Boolean
      },
      large: {
        default: false,
        type: Boolean
      },
      loading: {
        default: false,
        type: Boolean
      },
      name: {
        default: 'uploadFile',
        type: String
      },
      outline: {
        default: false,
        type: Boolean
      },
      ripple: {
        default: true,
        type: Boolean
      },
      round: {
        default: false,
        type: Boolean
      },
      small: {
        default: false,
        type: Boolean
      },
      title: {
        default: 'Upload',
        type: String
      },
      closable: {
        default: true,
        type: Boolean,
      },
    },
    data: () => ({
      id: Math.floor(Math.random() * 100000),
      filename: null,
    }),
    computed: {
      classes () {
        const classes = {
          'v-btn--block': this.block,
          'v-btn--flat': this.flat,
          'upload-btn-hover': this.hover,
          'v-btn--icon': this.icon,
          'v-btn--large': this.large,
          'v-btn--loading': this.loading,
          'v-btn--outline': this.outline,
          'v-btn--round': this.round,
          'v-btn--small': this.small,
          'v-btn--disabled': this.disabled
        }

        let classString = "";
        for (let key in classes) {
          if (classes[key]) {
            classString += `${key} `
          }
        }
        return classString;
      }
    },
    methods: {
      change(event) {
        this.$emit('change', event);
        if (event.target.files.length) {
          this.filename = event.target.files[0].name;
        } else {
          this.filename = null;
        }
      },
      deleteFile(event) {
        this.$emit('deleteFile', event);
        this.filename = null;
      },
    },
  }
</script>

<style scoped>
  .upload-btn {
    padding-left: 16px;
    padding-right: 16px;
  }

  .upload-btn input[type=file] {
    position: absolute;
    height: 0.1px;
    width: 0.1px;
    overflow: hidden;
    opacity: 0;
    z-index: -1;
  }

  .upload-btn-hover {
    cursor: pointer;
  }
</style>