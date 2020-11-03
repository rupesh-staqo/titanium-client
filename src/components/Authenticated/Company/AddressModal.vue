<template>
  <div>
    <ValidationObserver v-slot="{ passes }">
      <b-modal
        id="update-address"
        title="Address Update"
        ref="modal"
        @show="resetModal"
        @hidden="resetModal"
        @ok.prevent="passes(() => handleSubmit())"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <ValidationProvider
            name="address"
            rules="required"
            v-slot="{ errors }"
          >
            <b-form-group
              label="Address"
              label-for="address-input"
              :invalid-feedback="errors[0]"
            >
              <b-form-input
                id="address-input"
                v-model="addr1"
                required
              ></b-form-input>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider name="city" rules="required" v-slot="{ errors }">
            <b-form-group
              label="City"
              label-for="city-input"
              :invalid-feedback="errors[0]"
            >
              <b-form-input
                id="city-input"
                v-model="city"
                required
              ></b-form-input>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            name="region"
            rules="required"
            v-slot="{ errors }"
          >
            <b-form-group
              label="Region"
              label-for="region-input"
              :invalid-feedback="errors[0]"
            >
              <b-form-input
                id="region-input"
                v-model="region"
                required
              ></b-form-input>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            name="postal code"
            rules="required|postal_code:country"
            v-slot="{ errors }"
          >
            <b-form-group
              label="Postal Code"
              label-for="postalCode-input"
              :invalid-feedback="errors[0]"
            >
              <b-form-input
                id="postalCode-input"
                v-model="postal_code"
                required
              ></b-form-input>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            name="country"
            rules="required"
            v-slot="{ errors }"
          >
            <b-form-group
              label="Country"
              label-for="country-input"
              :invalid-feedback="errors[0]"
            >
              <b-form-input
                id="country-input"
                v-model="country"
                required
              ></b-form-input>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            name="latitude"
            rules="required|double"
            v-slot="{ errors }"
          >
            <b-form-group
              label="Latitude"
              label-for="latitude-input"
              :invalid-feedback="errors[0]"
            >
              <b-form-input
                id="latitude-input"
                v-model="latitude"
                required
              ></b-form-input>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            name="longitude"
            rules="required|double"
            v-slot="{ errors }"
          >
            <b-form-group
              label="Longitude"
              label-for="longitude-input"
              :invalid-feedback="errors[0]"
            >
              <b-form-input
                id="longitude-input"
                v-model="longitude"
                required
              ></b-form-input>
            </b-form-group>
          </ValidationProvider>
        </form>
      </b-modal>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapFields } from "vuex-map-fields";
import { mapMutations } from "vuex";
import CompanyService from "@/services/CompanyService";
import AddressFactory from "@/factories/AddressFactory";
export default {
  name: "AddressModal",
  data() {
    return {
      company_id: this.$route.params.id,
    };
  },
  computed: {
    ...mapFields("address", [
      "addr1",
      "city",
      "region",
      "postal_code",
      "country",
      "latitude",
      "longitude",
    ]),
  },
  async created() {
    this.SET_COMPANY_ID(this.company_id);
    let response = await CompanyService.getAddress(this.company_id);
    let address = AddressFactory.createFromJson(response.data);
    this.SET_ADDRESS(address);
  },
  methods: {
    ...mapMutations("address", ["SET_COMPANY_ID","SET_ADDRESS"]),
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    async handleSubmit() {
      // Push the name to submitted names
      // Hide the modal manually
      let response = await CompanyService.createAddress();
        this.$swal({
          icon: "success",
          text: response.message,
          timer: 1500
        });
      this.$nextTick(() => {
        this.$bvModal.hide("update-address");
      });
    },
  },
};
</script>