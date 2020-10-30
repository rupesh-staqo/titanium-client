<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h4 class="font-weight-bold mb-0">Purchase Invoice</h4>
          </div>
        </div>
      </div>
    </div>
    <CompanyHeader :company="company" />
    <div class="row">
      <div class="col-sm-12 col-md-5 col-lg-5 col-xl-4 grid-margin">
        <div class="product_detailbox">
          <div class="product_detailbox_img">
            <img :src="image" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 grid-margin stretch-card">
            <div class="card position-relative">
              <div class="card-body">
                <h4 class="mb-3">Upload Image</h4>
                <div class="row">
                  <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input
                      type="file"
                      accept="image/*"
                      @change="onFileChange"
                    />
                  </div>
                  <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <b-button
                      v-b-modal.update-address
                      class="btn btn-primary btn-sm"
                    >
                      Update Address</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-7 col-lg-7 col-xl-8">
        <div class="row">
          <div class="col-md-12 grid-margin">
            <div class="position-relative">
              <div class="overflow-auto selected_prod">
                <template v-if="cars.length > 0">
                  <CarBox
                    v-for="(car, index) in cars"
                    :key="index"
                    :index="index"
                    :car="car"
                  />
                </template>
                <NoRecord v-else />
                <template>
                  <LoadMore v-if="loadMore" />
                  <div v-else class="text-center fixedBtn">
                    <button class="btn" v-if="page >= 0" @click="showMore">
                      Load More
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddressModal />
  </div>
</template>
<script>
import CompanyHeader from "@/components/Authenticated/Company/CompanyHeader";
import CarBox from "@/components/Authenticated/Company/CarBox";
import CompanyService from "@/services/CompanyService";
import CompanyFactory from "@/factories/CompanyFactory";
import CarFactory from "@/factories/CarFactory";
import AddressModal from "@/components/Authenticated/Company/AddressModal";
export default {
  name: "Company",
  components: {
    CarBox,
    AddressModal,
    CompanyHeader,
  },
  data() {
    return {
      loading: false,
      page: 1,
      company: {},
      logo: "",
      cars: [],
      image: "",
      company_id: this.$route.params.id,
      loadMore: false,
    };
  },
  async created() {
    this.loading = true;
    let response = await CompanyService.getSingle(this.company_id);
    if (response) {
      this.company = CompanyFactory.createFromJson(response);
      if (this.company) {
        this.image = this.company.logo;
        let carsResponse = await CompanyService.getCarByCompanyId(
          this.company_id,
          this.page
        );
        if (carsResponse && carsResponse.records) {
          this.cars = CarFactory.createFromJsonArray(carsResponse.records);
          this.page++;
        } else {
          this.page = -1;
        }
      }
    }
    this.loading = false;
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    async createImage(file) {
      this.logo = file;
      if (this.logo) {
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
        let response = await CompanyService.uploadLogo(
          this.company_id,
          this.logo
        );
        if (response) {
          this.$swal(response.message);
        }
      }
    },
    async showMore() {
      if (this.page > 0 && !this.loading && !this.loadMore) {
        this.loadMore = true;
        var response = await CompanyService.getCarByCompanyId(
          this.company_id,
          this.page
        );
        if (response.records) {
          ++this.page;
          let cars = CarFactory.createFromJsonArray(response.records);
          for (var i = 0; i < cars.length; i++) {
            this.cars.push(cars[i]);
          }
        } else {
          this.page = -1;
        }
        this.loadMore = false;
      }
    },
  },
};
</script>