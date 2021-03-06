'use strict';
var valuename = 'urlVals';
    appApi.value('main.api.urlVals', {
      baseUrl:"http://demo.societywise.in/api",
      login:{
        url:"/v1/users/login",
        method:"POST"
      },
      signup:{
        url:"/v1/users",
        method:"POST"
      },
      profile:{
        url:"/v1/users/profile",
        method:"GET",
        params:{
          userId:"user-id"
        }
      },
      bills:{
        url:'/v1/transactions',
        method:"GET"
      },
      balances:{
        url:'/v1/transactions/summary',
        method:"GET"
      },
      payments:{
        url:'/v1/payments',
        method:"GET"
      },
      tickets:{
        url:'/v1/tickets',
        method:"GET"
      },
      updates:{
        url:'/v1/updates',
        method:"GET"
      },
      neighbours:{
        url:'/v1/neighbours',
        method:"GET"
      },
      access:{
        url:'/v1/access',
        method:"GET"
      }
  });
