<template>
  <div class="invoice_listing">
    <div class="row">
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center">
        <div class="productThumb">
          <img :src="company.logo" />
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 d-flex flex-row pr-0">
        <div class="d-inline mt-2">
          <div class="main_label">
            <router-link :to="`${'/company/'+company.id}`">
              {{ company.name }}
            </router-link>
          </div>
          <div class="helptxt mb-2">Name</div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-6 mt-2">
        <div class="main_label">{{ company.company_id }}</div>
        <div class="helptxt mb-2">Company Id</div>
      </div>
      <div class="col-sm-8 col-md-8 col-lg-12 col-xl-2 d-flex flex-row mt-2">
        <div class="col-6 px-0">
          <div class="main_label">
            <label class="switch">
              <input
                type="checkbox"
                :checked="company.is_sync == 1 ? true : false"
                @change="check($event)"
              />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="helptxt mb-2">Sync</div>
        </div>
        <!-- <div class="col-6 pr-0">
          <div class="main_label">invoice.invoice_total</div>
          <div class="helptxt mb-2">Value</div>
        </div> -->
      </div>
      <!-- <div
        class="col-sm-4 col-md-4 col-lg-4 col-xl-2 d-flex flex-row justify-content-center my-2"
      >
        <div class role="group" aria-label="Basic example">
          <a href="#">
            <img src="@/assets/images/global_newedit.svg" class="px-1" />
          </a>
          <a href="javascript:void(0)">
            <img src="@/assets/images/global_cancel.svg" class="px-1" />
          </a>
          <a href="javascript:void(0)">
            <img src="@/assets/images/global_delete.svg" />
          </a>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import CompanyService from "../../../services/CompanyService";
export default {
  name: "CompanyBox",
  props: {
    company: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async check(event) {
      var isSync = false;
      if (event.target.checked) {
        isSync = true;
      }else{
        isSync = false;
      }
      await CompanyService.isSync(this.company.id, isSync);
    },
  },
};
</script>
<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>