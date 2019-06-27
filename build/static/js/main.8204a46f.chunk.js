(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),u=(n(21),n(1)),i=n(3),s=function(e){var t=e.handleSearchChange,n=e.filteredPerson;return c.a.createElement("div",null,c.a.createElement("p",null,"filter shown with ",c.a.createElement("input",{onChange:t})),0!==n.length&&"".concat(n[0].name," ").concat(n[0].number))},l=function(e){var t=e.submitPerson,n=e.handleNameChange,a=e.handleNumberChange;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,"name: ",c.a.createElement("input",{onChange:n})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{onChange:a})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},m=function(e){var t=e.persons,n=e.deletePerson;return c.a.createElement("div",null,t.map(function(e){return c.a.createElement("p",{key:e.name},e.name," ",e.number," ",c.a.createElement("button",{onClick:function(){return n(e)}},"delete"))}))},d=function(e){var t=e.notification;if(!t.message)return null;var n="error"===t.type?{color:"red"}:{color:"green"};return console.log("dynamicStyle ",n),c.a.createElement("div",{className:"notification",style:n},t.message)},f=n(4),b=n.n(f),h="/api/persons",p={getAll:function(){return b.a.get(h).then(function(e){return e.data})},postPerson:function(e){return b.a.post(h,e).then(function(e){return e.data})},deletePerson:function(e){return b.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data})},updateNumber:function(e,t){return b.a.put("".concat(h,"/").concat(t),e).then(function(e){return e.data})}};var g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),f=Object(i.a)(o,2),b=f[0],h=f[1],g=Object(a.useState)(""),j=Object(i.a)(g,2),v=j[0],E=j[1],O=Object(a.useState)([]),y=Object(i.a)(O,2),w=y[0],C=y[1],P=Object(a.useState)({}),S=Object(i.a)(P,2),N=S[0],T=S[1];return Object(a.useEffect)(function(){p.getAll().then(function(e){return r(e)}).catch(function(e){T(Object(u.a)({},N,{message:"Persons not fetched",type:"error"})),setTimeout(function(){T(Object(u.a)({},N,{message:"",type:""}))},5e3)})},[]),console.log(n),c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(d,{notification:N}),c.a.createElement(s,{handleSearchChange:function(e){var t=n.filter(function(t){return t.name.toLocaleLowerCase()===e.target.value.toLocaleLowerCase()});0!==t.length&&C(t)},filteredPerson:w}),c.a.createElement("h2",null,"add a new"),c.a.createElement(l,{submitPerson:function(e){e.preventDefault();var t={name:b,number:v},a=n.filter(function(e){return e.name===t.name});0!==a.length?window.confirm("".concat(t.name," is already added to phonebook, replace the old number with a new one?"))&&p.updateNumber(t,a[0].id).then(function(e){r(n.map(function(t){return t.id!==e.id?t:e})),T(Object(u.a)({},N,{message:"Updated ".concat(t.name,"'s number"),type:"success"})),setTimeout(function(){T(Object(u.a)({},N,{message:"",type:""}))},5e3)}).catch(function(e){T(Object(u.a)({},N,{message:"Could not updated ".concat(t.name,"'s number"),type:"error"})),setTimeout(function(){T(Object(u.a)({},N,{message:"",type:""}))},5e3)}):p.postPerson(t).then(function(e){r(n.concat(e)),T(Object(u.a)({},N,{message:"Added ".concat(t.name),type:"success"})),setTimeout(function(){T(Object(u.a)({},N,{message:"",type:""}))},5e3)}).catch(function(e){T(Object(u.a)({},N,{message:"could not add person",type:"error"})),setTimeout(function(){T(Object(u.a)({},N,{message:"",type:""}))},5e3)})},handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){E(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(m,{persons:n,deletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&p.deletePerson(e.id).then(function(t){r(n.filter(function(t){return t.id!==e.id})),T(Object(u.a)({},N,{message:"".concat(e.name," is removed from the server"),type:"success"})),setTimeout(function(){T(Object(u.a)({},N,{message:"",type:""}))},5e3)}).catch(function(t){T(Object(u.a)({},N,{message:"Information of ".concat(e.name," has already been removed from the server"),type:"error"})),setTimeout(function(){T(Object(u.a)({},N,{message:"",type:""}))},5e3)})}}))};o.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8204a46f.chunk.js.map