<template>
  <page-container heading="Payments">
    <q-table :data="mortgageList" :columns="columns" row-key="index" :pagination="pagination">
      <template #body-cell-action="{ row }">
        <td class="text-right">
          <q-btn @click="repayLoan(row)">Repay</q-btn>
        </td>
      </template>
    </q-table>
  </page-container>
</template>
<script>
import PageContainer from '@/layouts/-components/PageContainer.vue';
import { format } from 'date-fns';
import { mapState, mapActions } from 'vuex';

export default {
  components: { PageContainer },
  data() {
    return {
      columns: [
        {
          name: 'index',
          label: 'Week',
          field: 'period',
          align: 'left',
        },
        {
          name: 'amount',
          label: 'Amount',
          align: 'center',
          field: 'amount',
          format: (val) =>
            new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val),
        },
        {
          name: 'dueDate',
          label: 'Due Date',
          field: 'dueDate',
          align: 'center',
          format: (val) => format(val, 'dd/MM/yyyy HH:mm'),
        },
        {
          name: 'action',
        },
      ],
      pagination: {
        rowsPerPage: 30, // current rows per page being displayed
      },
      mortgageList: [],
    };
  },
  computed: {
    ...mapState('mortgage', ['amount']),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!vm.amount) next({ name: 'mortgage' });
    });
  },
  async created() {
    this.mortgageList = await this.getRepaymentList();
  },
  methods: {
    ...mapActions('mortgage', ['getRepaymentList']),

    repayLoan({ period }) {
      this.$q.notify({
        color: 'positive',
        position: 'top-right',
        message: `Repayment for Period ${period} Successful`,
      });
    },
  },
};
</script>
