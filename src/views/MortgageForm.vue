<template>
  <page-container heading="Credit">
    <form class="mortgage-form" @submit.prevent="handleBorrowing">
      <div class="form-control">
        <label for="amount">Amount</label>
        <q-input v-model.number="$v.model.amount.$model" id="amount" type="number" />
      </div>

      <div class="form-control">
        <label for="tenor">Tenor</label>
        <q-option-group
          v-model="model.tenor"
          id="tenor"
          :options="tenorOptions"
          color="primary"
          inline
        />
      </div>

      <q-btn type="submit" color="primary" label="Borrow" :disable="submitDisabled" />
    </form>
  </page-container>
</template>
<script>
import PageContainer from '../layouts/-components/PageContainer.vue';
import { required, minValue } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  components: { PageContainer },
  data() {
    return {
      model: {
        amount: 0,
        tenor: 3,
      },

      tenorOptions: [
        {
          label: '3',
          value: 3,
        },
        {
          label: '6',
          value: 6,
        },
        {
          label: '12',
          value: 12,
        },
      ],
    };
  },
  validations: {
    model: {
      amount: { required, minValue: minValue(1) },
    },
  },
  computed: {
    submitDisabled() {
      return this.$v.model.$anyError || this.$v.model.$invalid;
    },
  },
  methods: {
    ...mapActions('mortgage', ['applyForALoan']),
    handleBorrowing() {
      this.applyForALoan(this.model);
    },
  },
};
</script>

<style lang="scss" scoped>
.mortgage-form {
  display: grid;
  gap: 32px;
}
.form-control {
  display: grid;
  gap: 4px;
}
</style>
