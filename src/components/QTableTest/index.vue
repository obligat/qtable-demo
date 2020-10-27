<template>
    <div>
        <q-table
            :data="tableData"
            :columns="tableConfig"
            :page-config="pageConfig"
            @handlePageChange="handlePageChange"
            @handleSelectionChange="handleSelectionChange"
        >
            <el-table-column slot="operation">
                <el-button type="text" size="medium">
                    自定义操作
                </el-button>
            </el-table-column>
        </q-table>
    </div>
</template>

<script>
import QTable from '../../common/QTable/index';
import {TABLE_CONFIG, tableDataMock} from './config';

export default {
    components: {
        QTable
    },
    data() {
        return {
            pageConfig: {
                page: 1,
                total: 0,
                size: 10
            },
            tableData: tableDataMock,
            tableConfig: TABLE_CONFIG,
            multipleSelection: []
        };
    },
    methods: {
        // 改变页码
        handlePageChange(val) {
            this.pageConfig.page = val;
        },
        // 多选结果
        handleSelectionChange(selects) {
            this.multipleSelection = selects;
        }
    }
};
</script>
