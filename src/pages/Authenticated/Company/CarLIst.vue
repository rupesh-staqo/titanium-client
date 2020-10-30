<template>
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
</template>
<script>
import CarBox from "@/components/Authenticated/Company/CarBox";
export default {
  name: "CarList",
  components: {
    CarBox,
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
  },
  methods: {
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