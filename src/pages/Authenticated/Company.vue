<template>
  <div class="content-wrapper">
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
import Box from "../../components/Authenticated/Company/Box";
import CompanyService from "../../services/CompanyService";
import CompanyFactory from "../../factories/CompanyFactory";
export default {
  name: "Company",
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