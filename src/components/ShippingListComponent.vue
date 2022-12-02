<template>
  <div class="row justify-content-center">
    <table class="table mt-5 col-10 table-hover">
      <thead>
        <tr class="text-center">
          <th scope="col-0">No</th>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">Alamat</th>
          <th scope="col">Kota</th>
          <th scope="col">Nomor Telepon</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in shippingData"
          :key="index"
          class="text-center"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ item.first_name + " " + item.last_name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.phone_number }}</td>
          <td>
            <button
              type="button"
              class="btn btn-warning text-light mr-2"
              @click="$emit('updateShipping', item)"
            >
              Update
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="funcDeleteShipping(item.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import shippingService from "../services/shippingService.js";

export default {
  name: "ShippingListComponent",
  data() {
    return {
      shippingData: null,
    };
  },

  methods: {
    getShipping() {
      shippingService
        .getAll()
        .then((response) => {
          this.shippingData = response.data;
          console.log(this.shippingData);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    funcDeleteShipping(id) {
      // let first_name = this.item.this.first_name;
      // let last_name = this.item.last_name;
      // let name = first_name + " " + last_name;

      // alert(id);
      if (confirm(`Apakah Anda ingin menghapus dari Shipping List ? `)) {
        shippingService
          .deleteShipping(id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
        location.reload();
      } else {
        alert("Hapus dibatalkan");
      }
    },
  },

  mounted() {
    this.getShipping();
  },
};
</script>

<style>
</style>