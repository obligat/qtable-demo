export const tableDataMock = [
    {
        date: '2016-05-03',
        name: '乐乐',
        address: '上海市普陀区金沙江路 1518 弄'
    },
    {
        date: '2016-05-02',
        name: '梅朵新',
        gender: 1,
        address: '上海市普陀区金沙江路 1518 弄'
    },
    {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    },
    {
        date: '2016-05-01',
        name: '朱崇科',
        address: '上海市普陀区金沙江路 1518 弄'
    },
    {
        date: '2016-05-08',
        name: '袭来东',
        address: '上海市普陀区金沙江路 1518 弄'
    },
    {
        date: '2016-05-06',
        name: '吉星',
        address: '上海市普陀区金沙江路 1518 弄'
    },
    {
        date: '2016-05-07',
        name: '柴科',
        address: '上海市普陀区金沙江路 1518 弄'
    }
];

// 表格字段
export const TABLE_CONFIG = [
    {
        type: 'selection',
        width: '55'
    },
    {
        prop: 'date',
        label: '日期'
    },
    {
        prop: 'name',
        label: '姓名'
    },
    {
        prop: 'gender',
        label: '性别',
        formatter(row, col, cell) {
            return !cell ? '男' : '女';
        }
    },
    {
        prop: 'address',
        label: '地址'
    },
    {
        slot: 'operation'
    }
];
