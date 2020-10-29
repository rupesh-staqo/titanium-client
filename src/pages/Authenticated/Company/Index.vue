<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h4 class="font-weight-bold mb-0">Company/Dealers</h4>
          </div>
        </div>
      </div>
    </div>    
    <div class="row">
      <div class="col-md-12 grid-margin">
        <Box 
          v-for="(item, index) in companies" 
          :key=item.id
          :index=index
          :company=item
        />
      </div>
    </div>
  </div>
</template>
<script>
import Box from "@/components/Authenticated/Company/Box";
import CompanyService from "@/services/CompanyService";
import CompanyFactory from "@/factories/CompanyFactory";
export default {
  name: "CompanyList",
  components: {
    Box,
  },
  data(){
      return{
        loading: false,
        companies: []
      }
  },
  async created() {
    this.loading = true;
    let response = await CompanyService.getCompaines();
    if (response && response.records) {
      this.companies = CompanyFactory.createFromJsonArray(response.records);
      this.loading = false;
    }
  },
};
</script>