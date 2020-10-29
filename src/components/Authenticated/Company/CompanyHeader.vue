<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="vendorbg">
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3">
              <div class="bgtext float-left">Company</div>
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3">
              <img
                src="@/assets/images/code.svg"
                class="float-left d-none d-sm-block d-md-block"
              />
              <div class="helptxt text-gpblue mt-2">Company Name</div>
              <div class="main_label mb-2">{{ company.name }}</div>
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3">
              <img
                src="@/assets/images/date.svg"
                class="float-left d-none d-sm-block d-md-block"
              />
              <div class="helptxt text-gpblue mt-2">Company Id</div>
              <div class="main_label mb-2">{{ company.company_id }}</div>
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3">
              <img
                src="@/assets/images/code1.svg"
                class="float-left d-none d-sm-block d-md-block"
              />
              <div class="helptxt text-gpblue mt-2">Sync</div>
              <div class="main_label mb-2">
                <label class="switch">
                  <input
                    type="checkbox"
                    :checked="company.is_sync == 1 ? true : false"
                    @change="check($event)"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CompanyService from "@/services/CompanyService";
// import CompanyFactory from "@/factories/CompanyFactory";
export default {
  name: "CompanyHeader",
  props: {
    company: {
      default: true,
    },
  },
  methods: {
    async check(event) {
      var isSync = false;
      if (event.target.checked) {
        isSync = true;
      } else {
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