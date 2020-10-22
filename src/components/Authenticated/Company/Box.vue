<template>
  <div class="invoice_listing">
    <div class="row">
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 d-flex flex-row pr-0">
        <div class="d-inline text-center mt-2 mr-2">
          <img src="@/assets/images/global_download.svg" />
        </div>
        <div class="d-inline mt-2">
          <div class="main_label">
            <a href="ewdf">
              {{ company.name }}
            </a>
          </div>
          <div class="helptxt mb-2">Name</div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-2 col-6 mt-2">
        <div class="main_label">{{ company.company_id }}</div>
        <div class="helptxt mb-2">Company Id</div>
      </div>
      <div class="col-sm-8 col-md-8 col-lg-8 col-xl-4 d-flex flex-row mt-2">
        <div class="col-6 px-0">
          <div class="main_label">{{ company.is_sync }}</div>
          <div class="helptxt mb-2">Is Sync</div>
        </div>
        <div class="col-6 pr-0">
          <div class="main_label">invoice.invoice_total</div>
          <div class="helptxt mb-2">Value</div>
        </div>
      </div>
      <div
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyBox",
  props: {
    company: {
      type: Object,
      default: () => {},
    },
  },
};
</script>