<template>
  <div>
    <div class="float-right mt-4 pb-2">
      <ButtonComponent
        v-on:click.native="errorApiCall()"
        text="Error API Call"
      />
      <ButtonComponent
        v-on:click.native="changApiKeyModal = true"
        text="Error API Call"
      />
    </div>
    <v-dialog
      max-width="500px"
      transition="slide-x-reverse-transition"
      v-model="changApiKeyModal"
    >
      <v-card style="background-color: #f9f9f9">
        <div class="p-8">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            API KEY
          </label>

          <div class="flex">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              v-model="apiKey"
              type="text"
              placeholder="Type here.."
              autocomplete="off"
              @keyup.enter="changeApiKey()"
            />

           
             <ButtonComponent
        v-on:click.native="changeApiKey"
        text="Change"
      />
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import store from "@/store";
import ButtonComponent from "./ButtonComponent.vue";
export default {
  name: "ApiErrorHandling",
  data: () => ({
    changApiKeyModal: false,
    apiKey: "c924afc561b84f1f80707784e0d1473c",
  }),
  methods: {
    async errorApiCall() {
      this.isLoading = true;
      await this.$http
        .get(`/sources?apiKey`)
        .then(() => {})
        .catch((error) => {
          this.isLoading = false;
          alert(error.message);
        });
    },
    changeApiKey() {
      var apiKey = this.apiKey;
      store.dispatch("addApiKey", {
        apiKey,
      });
      this.changApiKeyModal = false;
      location.reload();
    },
  },
  components: { ButtonComponent },
};
</script>
