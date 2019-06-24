const fetch = require('node-fetch');
const usersUrl = 'https://jsonplaceholder.typicode.com/users/'
const ordersUrl = 'http://localhost:3000/api/rest/orders/'

const users = () => {
  return fetch(usersUrl).then(res => res.json())
};

const user = ({ userId } = {},{id}) => {
  return fetch(usersUrl + (userId || id)).then(res => res.json())
}

const orders = () => {
  return fetch(ordersUrl).then(res => res.json())
};


const order = (_,{id}) => {
  return fetch(ordersUrl+id).then(res => res.json())
}

const items = (parent,args, {dataSources: {Items}}) => {
  return Items.find().exec();
}

const item = ({itemId} = {},{ id }, {dataSources: { Items }}) => {
  return Items.findById(itemId || id).exec();
}

module.exports = {
  Query: {
    users,
    orders,
    items,
    user,
    findUser: user,
    order,
    item,
    dateTime: () => (new Date()).toString(),
    timeStamp: () => Date.now(),
  },
  Order: {
    item,
    user,
  }
};