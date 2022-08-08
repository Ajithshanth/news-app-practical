<template>
  <div class="flex justify-start items-center space-x-8">
    <v-icon large color="black darken-4" class="ml-2"> mdi-share </v-icon>
    <v-icon @click="whatsappShare()" large color="black darken-4" class="ml-2">
      mdi-whatsapp
    </v-icon>
    <v-icon @click="facebookShare()" large color="black darken-4" class="ml-2">
      mdi-facebook
    </v-icon>
    <v-icon @click="messengerShare()" large color="black darken-4" class="ml-2">
      mdi-facebook-messenger
    </v-icon>
    <v-icon @click="linkedinShare()" large color="black darken-4" class="ml-2">
      mdi-linkedin
    </v-icon>
    <v-icon @click="twitterShare()" large color="black darken-4" class="ml-2">
      mdi-twitter
    </v-icon>
    <v-icon @click="mailShare()" large color="black darken-4" class="ml-2">
      mdi-email
    </v-icon>
  </div>
</template>
<script>
export default {
  name: "ShareNews",
  props: { url: {} },
  methods: {
    facebookShare() {
      const navUrl = "https://www.facebook.com/sharer/sharer.php?u=" + this.url;
      window.open(navUrl, "_blank");
    },
    whatsappShare() {
      const navUrl = "whatsapp://send?text=" + this.url;
      window.open(navUrl, "_blank");
    },
    messengerShare() {
      const navUrl = "fb-messenger://share/?link=" + this.url;
      window.open(navUrl, "_blank");
    },
    linkedinShare() {
      const navUrl =
        " https://www.linkedin.com/sharing/share-offsite/?url=" + this.url;
      window.open(navUrl, "_blank");
    },
    twitterShare() {
      const navUrl = "https://twitter.com/intent/tweet?text=" + this.url;
      window.open(navUrl, "_blank");
    },
    mailShare() {
      const navUrl = " mailto:?" + this.url;
      window.open(navUrl, "_blank");
    },
  },
};
</script>
