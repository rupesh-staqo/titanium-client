<template>
  <div class="invoice_listing">
    <div class="row">
      <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center">
        <div class="productThumb">
          <img :src="car.image" />
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 d-flex flex-row pr-0">
        <div class="d-inline mt-2">
          <div class="main_label">
            {{car.make}}
          </div>
          <div class="helptxt mb-2">Make</div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-6 mt-2">
        <div class="main_label"> {{car.model_name}} </div>
        <div class="helptxt mb-2">Model Name</div>
      </div>
      <div class="col-sm-8 col-md-8 col-lg-12 col-xl-2 d-flex flex-row mt-2">
        <div class="col-6 px-0">
          <div class="main_label">
            {{car.year}}
          </div>
          <div class="helptxt mb-2">Year</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyBox",
  props: {
    car: {
      type: Object,
      default: () => {},
    },
  },
};
</script>