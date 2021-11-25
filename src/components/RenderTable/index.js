import { Table, Tag } from 'antd';
import dataJson from '../../data.json';
import { TableCell } from './TableCell';
import { Link } from 'react-router-dom'

// Получить уникальные статусы
// const uniqStatus = dataJson.reduce((acc, i) => {
//         return acc.includes(i.status) ? acc : [...acc, i.status];
//     }, [])
// console.log(uniqStatus);

const statuses = {
    color: {
        new: 'red',
        completed: 'green',
        assigned_to: 'orange',
        started: 'blue',
        declined: 'black',
    },
    text: {
        new: 'Новое',
        completed: 'Выполнено',
        assigned_to: 'Назначено',
        started: 'Выполняется',
        declined: 'Отменено',
    }
}


const convertToDate = (milliseconds) => {
    const date = new Date(milliseconds);
    return date.toLocaleString().replace(':' + date.getSeconds(), '').split(', ').join(' ')
}

export const DataTable = () => {
    const columns = [
        {
            title: 'Номер / Дата',
            dataIndex: 'name',
            key: 'id',
            width: '10%',
            render: (text, record) => (
                <TableCell top={`№${record.id}`} bottom={convertToDate(record.created_date)} />
            ),
        },
        {
            title: 'Тип задания / Автор',
            dataIndex: 'age',
            key: 'id',
            width: '20%',
            render: (text, record) => (
                <TableCell top={record.order_type.name} bottom={`${record.created_user.surname} ${record.created_user.name} ${record.created_user.patronymic} `} />
            ),
        },
        {
            title: 'Аккаунт / Терминал',
            dataIndex: 'age',
            key: 'id',
            width: '30%',
            render: (text, record) => (
                <TableCell top={record.account.name} bottom={record.terminal.name} />
            ),
        },
        {
            title: 'Статус',
            dataIndex: 'address',
            key: 'id',
            width: '10%',
            render: (text, record) => <Link to="/info"><Tag color={statuses.color[record.status]}>{statuses.text[record.status]}</Tag></Link>,

        },
    ];

    return (
        <Table
            columns={columns}
            rowKey="key"
            dataSource={dataJson}
            pagination={{ position: ["bottomCenter"] }}
        />
    );
}