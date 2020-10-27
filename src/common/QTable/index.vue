<template>
    <div class="m-table">
        <el-table :data="data" @selection-change="handleSelectionChange">
            <template v-for="item in columns">
                <slot v-if="item.slot && !item.hidden" :name="item.slot" />
                <el-table-column
                    :show-overflow-tooltip="true"
                    v-else-if="!item.hidden"
                    v-bind="item"
                    :key="item.prop"
                    align="center"
                />
            </template>
        </el-table>
        <div class="pagination-wrap" v-if="usePagination">
            <el-pagination
                layout="prev, pager, next, total"
                @current-change="handlePageChange"
                :current-page.sync="pageConfig.page"
                :page-size="pageConfig.size"
                :total="pageConfig.total"
            ></el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name: 'QTable',
    props: {
        data: {
            required: true,
            type: Array,
            default() {
                return [];
            }
        },
        columns: {
            required: true,
            type: Array,
            default() {
                return [];
            }
        },
        pageConfig: {
            required: false,
            type: Object,
            default() {
                return {
                    page: 1,
                    total: 1,
                    size: 10
                };
            }
        },
        usePagination: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        // 改变页码
        handlePageChange(val) {
            this.$emit('handlePageChange', val);
        },

        // 多选
        handleSelectionChange(val) {
            this.$emit('handleSelectionChange', val);
        }
    }
};
</script>
<style>
.pagination-wrap {
    text-align: center;
}
</style>
