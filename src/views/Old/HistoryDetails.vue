<template>
  <div class="p-8">
    <BackComponent />

    <div class="flex justify-between items-center">
      <div class="text-2xl text-indigo-600">Browser History</div>
    </div>

    <div class="pt-6">
      <table class="table-auto w-full">
        <thead>
          <tr class="text-left">
            <th>Visited Headines</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in browserHistory" :key="i">
            <td>{{ item.path }}</td>
            <td>{{ dateFormat(item.date) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import moment from "moment";
import BackComponent from "../../components/BackComponent.vue";

export default {
  name: "HistoryDetails",
  components: { BackComponent },
  data: () => ({
    browserHistory: store.state.browserHistory,
  }),
  methods: {
    dateFormat(date) {
      return moment(date).format(" hh:mm a - MMMM Do YYYY");
    },
  },
};
</script>
